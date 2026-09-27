<script lang="ts">
  import { onMount } from "svelte";

  type DragSample = { time: number; x: number; y: number };

  const GRAVITY = 2200;
  const FLOOR_BOUNCE = 0.42;
  const WALL_BOUNCE = 0.52;
  const MAX_THROW_SPEED = 1450;
  const MAX_ANGULAR_SPEED = 900;

  let stage: HTMLDivElement;
  let mark: HTMLButtonElement;
  let transform = $state("translate3d(0px, 0px, 0) rotate(0deg)");
  let drops = $state(0);

  let reducedMotion: MediaQueryList | undefined;
  let animationFrame: number | undefined;
  let lastFrame = 0;
  let x = 0;
  let y = 0;
  let velocityX = 0;
  let velocityY = 0;
  let angle = 0;
  let angularVelocity = 0;
  let inView = false;
  let hasEntered = false;
  let dragging = false;
  let pointerId: number | undefined;
  let grabX = 0;
  let grabY = 0;
  let dragSamples: DragSample[] = [];
  let lastDragEnd = -Infinity;

  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

  function bounds() {
    const width = stage?.clientWidth ?? 0;
    const height = stage?.clientHeight ?? 0;
    const markWidth = mark?.offsetWidth ?? 0;
    const markHeight = mark?.offsetHeight ?? 0;

    return {
      maxX: Math.max(0, width - markWidth),
      maxY: Math.max(0, height - markHeight),
    };
  }

  function renderPosition() {
    transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${angle.toFixed(2)}deg)`;
  }

  function resetForDrop() {
    const { maxX } = bounds();
    x = maxX / 2;
    y = 0;
    velocityX = 0;
    velocityY = 0;
    angle = 0;
    angularVelocity = 0;
    renderPosition();
  }

  function placeAtRest() {
    const { maxX, maxY } = bounds();
    x = maxX / 2;
    y = maxY;
    velocityX = 0;
    velocityY = 0;
    angle = 0;
    angularVelocity = 0;
    renderPosition();
  }

  function stopAnimation() {
    if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
    animationFrame = undefined;
    lastFrame = 0;
  }

  function startAnimation() {
    if (reducedMotion?.matches || !inView || dragging || animationFrame !== undefined) return;
    animationFrame = requestAnimationFrame(step);
  }

  function step(timestamp: number) {
    animationFrame = undefined;
    if (reducedMotion?.matches || !inView || dragging) return;

    if (lastFrame === 0) lastFrame = timestamp;
    const delta = Math.min((timestamp - lastFrame) / 1000, 0.05);
    lastFrame = timestamp;

    velocityY += GRAVITY * delta;
    const linearDamping = Math.exp(-1.15 * delta);
    const angularDamping = Math.exp(-1.8 * delta);
    velocityX *= linearDamping;
    angularVelocity *= angularDamping;
    x += velocityX * delta;
    y += velocityY * delta;
    angle += angularVelocity * delta;
    if (Math.abs(angle) > 360) angle %= 360;

    const { maxX, maxY } = bounds();
    if (x <= 0) {
      x = 0;
      velocityX = Math.abs(velocityX) * WALL_BOUNCE;
      angularVelocity += velocityY * 0.07;
    } else if (x >= maxX) {
      x = maxX;
      velocityX = -Math.abs(velocityX) * WALL_BOUNCE;
      angularVelocity -= velocityY * 0.07;
    }

    if (y <= 0) {
      y = 0;
      velocityY = Math.abs(velocityY) * WALL_BOUNCE;
      angularVelocity += velocityX * 0.08;
    } else if (y >= maxY) {
      y = maxY;
      velocityY = -Math.abs(velocityY) * FLOOR_BOUNCE;
      velocityX *= 0.72;
      angularVelocity *= 0.7;
    }

    if (y >= maxY - 0.1 && Math.abs(velocityY) < 28) {
      y = maxY;
      velocityX = Math.abs(velocityX) < 4 ? 0 : velocityX;
      velocityY = 0;
      angularVelocity = Math.abs(angularVelocity) < 3 ? 0 : angularVelocity;
    }

    renderPosition();

    const settled = y >= maxY - 0.1 && velocityX === 0 && velocityY === 0 && angularVelocity === 0;
    if (!settled) animationFrame = requestAnimationFrame(step);
  }

  function drop() {
    if (reducedMotion?.matches) {
      placeAtRest();
      return;
    }

    stopAnimation();
    resetForDrop();
    velocityY = 80;
    angularVelocity = 150;
    startAnimation();
  }

  function updateLayout() {
    if (reducedMotion?.matches) {
      placeAtRest();
    } else if (!hasEntered) {
      resetForDrop();
    } else {
      const { maxX, maxY } = bounds();
      x = clamp(x, 0, maxX);
      y = clamp(y, 0, maxY);
      renderPosition();
    }
  }

  function startDrag(event: PointerEvent) {
    if (event.button !== 0 || reducedMotion?.matches) return;

    stopAnimation();
    dragging = true;
    pointerId = event.pointerId;
    grabX = mark.offsetWidth / 2;
    grabY = mark.offsetHeight / 2;
    dragSamples = [{ time: performance.now(), x, y }];
    mark.setPointerCapture(event.pointerId);
    mark.focus({ preventScroll: true });
    event.preventDefault();
  }

  function drag(event: PointerEvent) {
    if (!dragging || event.pointerId !== pointerId) return;

    const rect = stage.getBoundingClientRect();
    const { maxX, maxY } = bounds();
    x = clamp(event.clientX - rect.left - grabX, 0, maxX);
    y = clamp(event.clientY - rect.top - grabY, 0, maxY);
    const previous = dragSamples.at(-1);
    if (previous) angle += (x - previous.x) * 0.14;

    const sample = { time: performance.now(), x, y };
    dragSamples = [...dragSamples, sample].filter(({ time }) => sample.time - time < 120);
    renderPosition();
    event.preventDefault();
  }

  function finishDrag(event: PointerEvent, cancelled = false) {
    if (!dragging || event.pointerId !== pointerId) return;

    const latest = dragSamples.at(-1);
    const earliest = dragSamples[0];
    const wasDragged = Boolean(
      latest && earliest && Math.hypot(latest.x - earliest.x, latest.y - earliest.y) > 4,
    );
    if (mark.hasPointerCapture(event.pointerId)) mark.releasePointerCapture(event.pointerId);
    dragging = false;
    pointerId = undefined;
    if (!wasDragged) return;

    const elapsed = latest && earliest
      ? Math.max((latest.time - earliest.time) / 1000, 0.016)
      : 0.016;
    velocityX = latest && earliest ? clamp((latest.x - earliest.x) / elapsed, -MAX_THROW_SPEED, MAX_THROW_SPEED) : 0;
    velocityY = latest && earliest ? clamp((latest.y - earliest.y) / elapsed, -MAX_THROW_SPEED, MAX_THROW_SPEED) : 0;
    angularVelocity = clamp(angularVelocity + velocityX * 0.2, -MAX_ANGULAR_SPEED, MAX_ANGULAR_SPEED);

    if (Math.hypot(velocityX, velocityY) < 80) velocityY = 100;
    lastDragEnd = cancelled ? -Infinity : performance.now();
    startAnimation();
  }

  function handleClick() {
    if (performance.now() - lastDragEnd < 350) return;
    drops += 1;
    drop();
  }

  onMount(() => {
    reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(stage);
    resizeObserver.observe(mark);
    updateLayout();

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (!inView) {
        stopAnimation();
        return;
      }

      if (!hasEntered) {
        hasEntered = true;
        if (reducedMotion?.matches) placeAtRest();
        else drop();
      } else {
        startAnimation();
      }
    });
    intersectionObserver.observe(stage);

    const handleMotionChange = () => {
      if (reducedMotion?.matches) {
        stopAnimation();
        dragging = false;
        placeAtRest();
      } else {
        resetForDrop();
        if (inView && hasEntered) drop();
      }
    };
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      stopAnimation();
      reducedMotion?.removeEventListener("change", handleMotionChange);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
    };
  });
</script>

<div bind:this={stage} class="gravity-stage">
  <button
    bind:this={mark}
    type="button"
    class="gravity-mark"
    aria-label="Drop the accompany mark"
    style:transform={transform}
    onpointerdown={startDrag}
    onpointermove={drag}
    onpointerup={finishDrag}
    onpointercancel={(event) => finishDrag(event, true)}
    onclick={handleClick}
  >
    <img src="/accompany-mark.svg" width="512" height="512" alt="" draggable="false" />
  </button>
  <p class="gravity-hint">drag, throw, or press to drop</p>
  <p class="gravity-secret" aria-live="polite">{drops >= 3 ? "you found our little orbit. even technology needs to play." : ""}</p>
</div>
