<script lang="ts">
  let { size = 22 }: { size?: number } = $props();
</script>

<svg
  class="logo-mark"
  width={size}
  height={size}
  viewBox="0 0 32 32"
  fill="none"
  aria-hidden="true"
>
  <ellipse
    cx="16"
    cy="16"
    rx="13"
    ry="5.5"
    stroke="url(#lg-a)"
    stroke-width="1.7"
    transform="rotate(-24 16 16)"
  />
  <ellipse
    cx="16"
    cy="16"
    rx="13"
    ry="5.5"
    stroke="url(#lg-b)"
    stroke-width="1.7"
    opacity="0.65"
    transform="rotate(38 16 16)"
  />
  <circle cx="16" cy="16" r="3.1" fill="url(#lg-c)" />
  <circle cx="26.5" cy="9" r="1.5" fill="#ffd9a0" />
  <defs>
    <linearGradient id="lg-a" x1="3" y1="16" x2="29" y2="16" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ff9a62" />
      <stop offset="1" stop-color="#6ee7c8" />
    </linearGradient>
    <linearGradient id="lg-b" x1="3" y1="16" x2="29" y2="16" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8ea2ff" />
      <stop offset="1" stop-color="#6ee7c8" />
    </linearGradient>
    <radialGradient id="lg-c" cx="0.35" cy="0.3" r="1">
      <stop stop-color="#fff4e4" />
      <stop offset="1" stop-color="#ffb987" />
    </radialGradient>
  </defs>
</svg>
