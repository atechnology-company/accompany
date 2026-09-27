<script lang="ts">
  let { compact = false }: { compact?: boolean } = $props();
  const s = compact ? 0.72 : 1;
</script>

<!-- cissa: sensing core + snap-on power cell, held by magnetic field arcs -->
<svg
  class="art"
  width={180 * s}
  height={150 * s}
  viewBox="0 0 180 150"
  fill="none"
  aria-hidden="true"
>
  <!-- field arcs between core and cell -->
  <path d="M62 78c8-10 22-10 30 0" stroke="#ffb987" stroke-opacity="0.5" stroke-width="1.4" stroke-linecap="round" />
  <path d="M58 88c11-13 32-13 43 0" stroke="#ffb987" stroke-opacity="0.32" stroke-width="1.4" stroke-linecap="round" />
  <path d="M54 98c14-17 43-17 57 0" stroke="#ffb987" stroke-opacity="0.18" stroke-width="1.4" stroke-linecap="round" />

  <!-- sensing core -->
  <g transform="translate(28 30)">
    <rect x="0" y="0" width="46" height="46" rx="13" fill="rgba(255,154,98,0.10)" stroke="#ff9a62" stroke-width="1.6" />
    <circle cx="23" cy="20" r="8.5" stroke="#ffd9a0" stroke-width="1.6" />
    <circle cx="23" cy="20" r="2.6" fill="#ffd9a0" />
    <circle cx="13" cy="37" r="1.8" fill="#6ee7c8" opacity="0.9" />
    <circle cx="23" cy="37" r="1.8" fill="#6ee7c8" opacity="0.6" />
    <circle cx="33" cy="37" r="1.8" fill="#6ee7c8" opacity="0.9" />
  </g>

  <!-- power cell -->
  <g transform="translate(108 66)">
    <rect x="0" y="0" width="46" height="30" rx="10" fill="rgba(110,231,200,0.10)" stroke="#6ee7c8" stroke-width="1.6" />
    <rect x="8" y="9" width="20" height="12" rx="3" stroke="#a7f3e0" stroke-width="1.3" />
    <path d="M34 15h6" stroke="#a7f3e0" stroke-width="1.6" stroke-linecap="round" />
  </g>

  <!-- clip wings -->
  <path d="M40 24c4-9 14-13 22-10" stroke="#8ea2ff" stroke-width="1.6" stroke-linecap="round" />
  <path d="M62 22c8-4 17 0 20 8" stroke="#8ea2ff" stroke-width="1.6" stroke-linecap="round" opacity="0.6" />
</svg>
