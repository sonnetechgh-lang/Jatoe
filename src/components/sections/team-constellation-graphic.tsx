export function TeamConstellationGraphic() {
  return (
    <svg className="product-constellation" viewBox="0 0 720 720" focusable="false">
      <defs>
        <radialGradient id="team-constellation-hub" cx="50%" cy="42%" r="65%">
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
        <g className="product-constellation__icon" transform="translate(38 38)">
          <rect x="9" y="16" width="70" height="70" rx="12" />
          <path d="M27 36h21l12 13v20M27 69h15M44 16V3M67 16V3M44 86v13M67 86v13M9 38H0M9 64H0M79 38h11M79 64h11" />
          <circle cx="98" cy="86" r="22" />
          <circle cx="98" cy="86" r="8" />
          <path d="M98 57v7M98 108v7M69 86h7M120 86h7M78 66l5 5M113 101l5 5M78 106l5-5M113 71l5-5" />
        </g>
        <text x="100" y="177">ENGINEER</text>
      </g>

      <g className="product-constellation__node" transform="translate(65 405)">
        <circle cx="100" cy="100" r="96" />
        <g className="product-constellation__icon" transform="translate(41 36)">
          <path d="M55 18l47 26-47 27L8 44z" />
          <path d="M8 44v52l47 27 47-27V44M55 71v52" />
          <path d="M82 22l21-13 15 15-20 21" />
          <path d="M103 9l15 15M20 110l-7 18 18-7" />
          <path d="M14 127l32-31" />
        </g>
        <text x="100" y="177">CREATE</text>
      </g>

      <g className="product-constellation__node" transform="translate(455 435)">
        <circle cx="100" cy="100" r="96" />
        <g className="product-constellation__icon" transform="translate(35 42)">
          <path d="M65 43C49 31 28 30 9 38v70c19-8 40-7 56 5z" />
          <path d="M65 43c16-12 37-13 56-5v70c-19-8-40-7-56 5z" />
          <path d="M65 43v70" />
          <path d="M48 24c8-8 26-8 34 0M56 13c4-4 14-4 18 0M65 0v7" />
          <path d="M25 61h22M25 76h27M79 61h22M79 76h27" />
        </g>
        <text x="100" y="177">TEACH</text>
      </g>

      <g className="product-constellation__hub">
        <circle cx="360" cy="360" r="94" fill="url(#team-constellation-hub)" />
        <rect x="318" y="318" width="84" height="84" rx="15" />
        <circle cx="360" cy="360" r="10" />
        <path d="M360 350v-20M351 365l-20 15M369 365l20 15" />
        <circle cx="360" cy="328" r="5" />
        <circle cx="329" cy="382" r="5" />
        <circle cx="391" cy="382" r="5" />
        <path d="M331 318v-17m29 17v-17m29 17v-17M331 402v17m29-17v17m29-17v17M318 331h-17m17 29h-17m17 29h-17M402 331h17m-17 29h17m-17 29h17" />
        <text x="360" y="470">SHARED PURPOSE</text>
      </g>
    </svg>
  );
}
