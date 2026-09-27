<script lang="ts">
  let { compact = false }: { compact?: boolean } = $props();
  const s = compact ? 0.72 : 1;
</script>

<!-- cupboard: the box at home, everything orbits it -->
<svg
  class="art"
  width={180 * s}
  height={150 * s}
  viewBox="0 0 180 150"
  fill="none"
  aria-hidden="true"
>
  <!-- sync links -->
  <path d="M90 78 40 34" stroke="#6ee7c8" stroke-opacity="0.4" stroke-width="1.3" stroke-dasharray="3 5" stroke-linecap="round" />
  <path d="M90 78V24" stroke="#6ee7c8" stroke-opacity="0.4" stroke-width="1.3" stroke-dasharray="3 5" stroke-linecap="round" />
  <path d="M90 78l50-44" stroke="#6ee7c8" stroke-opacity="0.4" stroke-width="1.3" stroke-dasharray="3 5" stroke-linecap="round" />

  <!-- orbiting devices -->
  <rect x="28" y="22" width="24" height="16" rx="4" stroke="#8ea2ff" stroke-width="1.5" fill="rgba(142,162,255,0.10)" />
  <rect x="78" y="8" width="24" height="15" rx="4" stroke="#8ea2ff" stroke-width="1.5" fill="rgba(142,162,255,0.10)" />
  <circle cx="146" cy="28" r="8" stroke="#ffb987" stroke-width="1.5" fill="rgba(255,185,135,0.10)" />

  <!-- the box -->
  <g transform="translate(52 74)">
    <rect x="0" y="0" width="76" height="50" rx="12" fill="rgba(110,231,200,0.08)" stroke="#6ee7c8" stroke-width="1.7" />
    <circle cx="38" cy="20" r="10" stroke="#a7f3e0" stroke-width="1.5" />
    <path d="M31 18c4-4 10-4 14 0M34 22c2.5-2.5 7.5-2.5 10 0" stroke="#a7f3e0" stroke-width="1.4" stroke-linecap="round" />
    <circle cx="14" cy="41" r="2" fill="#6ee7c8" />
    <path d="M58 41h8" stroke="#6ee7c8" stroke-width="1.5" stroke-linecap="round" />
  </g>
</svg>
