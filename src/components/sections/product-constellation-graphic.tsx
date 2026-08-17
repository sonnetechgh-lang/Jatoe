export function ProductConstellationGraphic() {
  return (
    <svg className="product-constellation" viewBox="0 0 720 720" focusable="false">
      <defs>
        <radialGradient id="constellation-hub" cx="50%" cy="42%" r="65%">
          <stop offset="0" stopColor="#1489c9" stopOpacity="0.95" />
          <stop offset="1" stopColor="#0875b0" stopOpacity="0.38" />
        </radialGradient>
      </defs>

      <circle className="product-constellation__orbit product-constellation__orbit--outer" cx="360" cy="360" r="286" />
      <circle className="product-constellation__orbit" cx="360" cy="360" r="214" />

      <g className="product-constellation__connections">
        <path d="M386 304L482 226" />
        <path d="M307 398L225 453" />
        <path d="M409 407L491 472" />
        <path d="M360 276V228" />
        <path d="M281 360H245" />
        <path d="M439 360H475" />
      </g>

      <g className="product-constellation__junctions">
        <circle cx="482" cy="226" r="7" />
        <circle cx="225" cy="453" r="7" />
        <circle cx="491" cy="472" r="7" />
        <circle cx="360" cy="228" r="5" />
        <circle cx="245" cy="360" r="5" />
        <circle cx="475" cy="360" r="5" />
      </g>

      <g className="product-constellation__node" transform="translate(430 70)">
        <circle cx="100" cy="100" r="96" />
        <g className="product-constellation__icon" transform="translate(65 31)">
          <rect x="0" y="12" width="70" height="116" rx="12" />
          <path d="M0 49h70M0 89h70" />
          <path d="M18 29h11m12 0h11M18 69h11m12 0h11M18 109h11m12 0h11" />
          <path d="M35 128v15" />
          <path d="M22 143h26" />
        </g>
        <text x="100" y="177">POWER</text>
      </g>

      <g className="product-constellation__node" transform="translate(65 405)">
        <circle cx="100" cy="100" r="96" />
        <g className="product-constellation__icon" transform="translate(43 52)">
          <rect x="0" y="0" width="114" height="80" rx="10" />
          <rect x="17" y="18" width="36" height="28" rx="4" />
          <path d="M69 19h27M69 33h18M19 62h77" />
          <circle cx="24" cy="97" r="12" />
          <circle cx="90" cy="97" r="12" />
          <path d="M36 97h42M114 24h14m-14 26h14" />
        </g>
        <text x="100" y="177">STEM</text>
      </g>

      <g className="product-constellation__node" transform="translate(455 435)">
        <circle cx="100" cy="100" r="96" />
        <g className="product-constellation__icon" transform="translate(47 42)">
          <path d="M15 112h78" />
          <path d="M32 110L57 71 79 35" />
          <path d="M56 72l35 11" />
          <path d="M72 28l34 11-15 44-35-11z" />
          <circle cx="57" cy="72" r="7" />
          <circle cx="31" cy="110" r="7" />
          <path d="M106 50l12 7M101 64l13 12" />
        </g>
        <text x="100" y="177">LIGHT</text>
      </g>

      <g className="product-constellation__hub">
        <circle cx="360" cy="360" r="94" fill="url(#constellation-hub)" />
        <rect x="318" y="318" width="84" height="84" rx="15" />
        <path d="M338 360h44M360 338v44" />
        <path d="M331 318v-17m29 17v-17m29 17v-17M331 402v17m29-17v17m29-17v17M318 331h-17m17 29h-17m17 29h-17M402 331h17m-17 29h17m-17 29h17" />
        <text x="360" y="470">JATOE SYSTEMS</text>
      </g>
    </svg>
  );
}
