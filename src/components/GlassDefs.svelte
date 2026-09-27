<!--
  Global SVG filter defs — the "liquid" in liquid glass.
  #liquid-wobble distorts the hero wordmark; #liquid-glass refracts the
  frosted nav on browsers that support filter in backdrop-filter.
-->
<svg class="svg-defs" aria-hidden="true" focusable="false" width="0" height="0">
  <defs>
    <filter id="liquid-wobble" x="-20%" y="-30%" width="140%" height="160%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.004 0.009"
        numOctaves="2"
        seed="3"
        result="noise"
      >
        <animate
          attributeName="baseFrequency"
          dur="16s"
          values="0.004 0.009;0.007 0.006;0.004 0.009"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" />
    </filter>
    <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.008 0.012"
        numOctaves="2"
        seed="7"
        result="noise"
      >
        <animate
          attributeName="baseFrequency"
          dur="22s"
          values="0.008 0.012;0.011 0.009;0.008 0.012"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feGaussianBlur in="noise" stdDeviation="1.4" result="soft" />
      <feDisplacementMap in="SourceGraphic" in2="soft" scale="46" />
    </filter>
  </defs>
</svg>
