export function ProjectConstellationGraphic() {
  return (
    <svg className="product-constellation" viewBox="0 0 720 720" focusable="false">
      <defs>
        <radialGradient id="project-constellation-hub" cx="50%" cy="42%" r="65%">
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
        <g className="product-constellation__icon" transform="translate(35 48)">
          <path d="M8 74h51l14-32H27z" />
          <path d="M73 42l12 16" />
          <circle cx="26" cy="83" r="9" />
          <circle cx="51" cy="83" r="9" />
          <path d="M122 74H71L58 42h45z" />
          <path d="M58 42L46 58" />
          <circle cx="104" cy="83" r="9" />
          <circle cx="79" cy="83" r="9" />
          <path d="M58 29l7-15 7 15M52 33h26" />
        </g>
        <text x="100" y="177">COMBAT</text>
      </g>

      <g className="product-constellation__node" transform="translate(65 405)">
        <circle cx="100" cy="100" r="96" />
        <g className="product-constellation__icon" transform="translate(38 42)">
          <rect x="42" y="39" width="42" height="42" rx="8" />
          <circle cx="63" cy="60" r="6" />
          <circle cx="14" cy="22" r="8" />
          <circle cx="112" cy="22" r="8" />
          <circle cx="14" cy="103" r="8" />
          <circle cx="112" cy="103" r="8" />
          <path d="M22 28l22 17M104 28L82 45M22 97l22-19M104 97L82 78" />
          <path d="M50 28c7-7 19-7 26 0M42 18c12-13 30-13 42 0" />
        </g>
        <text x="100" y="177">CONNECT</text>
      </g>

      <g className="product-constellation__node" transform="translate(455 435)">
        <circle cx="100" cy="100" r="96" />
        <g className="product-constellation__icon" transform="translate(42 35)">
          <path d="M58 16l49 27-49 28L9 43z" />
          <path d="M9 43v54l49 28 49-28V43M58 71v54" />
          <path d="M20 18h76M20 9v18M96 9v18" />
          <path d="M30 14h8m11 0h8m11 0h8m11 0h9" />
          <path d="M112 77l12 7M108 90l13 13M101 100l7 15" />
        </g>
        <text x="100" y="177">MAKE</text>
      </g>

      <g className="product-constellation__hub">
        <circle cx="360" cy="360" r="94" fill="url(#project-constellation-hub)" />
        <rect x="318" y="318" width="84" height="84" rx="15" />
        <path d="M334 375l20-28 16 17 17-25" />
        <circle cx="334" cy="375" r="3" />
        <circle cx="354" cy="347" r="3" />
        <circle cx="370" cy="364" r="3" />
        <circle cx="387" cy="339" r="3" />
        <path d="M331 318v-17m29 17v-17m29 17v-17M331 402v17m29-17v17m29-17v17M318 331h-17m17 29h-17m17 29h-17M402 331h17m-17 29h17m-17 29h17" />
        <text x="360" y="470">RESEARCH + BUILD</text>
      </g>
    </svg>
  );
}
