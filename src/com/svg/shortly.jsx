import * as React from "react";

function SvgShortly(props) {
  return (
    <svg width={88} height={88} {...props}>
      <defs>
        <filter
          id="shortly_svg__b"
          width="139.8%"
          height="139.8%"
          x="-19.9%"
          y="-19.9%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation={17.5}
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0452633304 0"
          />
        </filter>
        <circle id="shortly_svg__a" cx={44} cy={44} r={44} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#19ACDE" xlinkHref="#shortly_svg__a" />
        <use
          fill="#000"
          filter="url(#shortly_svg__b)"
          xlinkHref="#shortly_svg__a"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M22.395 47.919c0-2.74-4.532-2.424-4.532-3.39 0-.27.29-.412.643-.412.578 0 .884.285.884.76h3.166c.064-1.758-1.366-3.2-4.034-3.2-2.395 0-3.938 1.252-3.938 2.852 0 2.946 4.468 2.44 4.468 3.453 0 .238-.305.428-.675.428-.546 0-.932-.238-.916-.776h-3.423c-.322 1.9 1.446 3.2 4.05 3.2 2.475 0 4.307-1.03 4.307-2.915zm.651 2.804h3.568l.852-4.753v.016c.16-.855.723-1.378 1.51-1.378.772 0 1.19.523 1.03 1.378l-.852 4.737h3.552l.932-5.18c.418-2.313-.547-3.818-2.636-3.818a3.92 3.92 0 00-3.022 1.41L28.72 39h-3.568l-2.106 11.723zm20.999-5.291c0-2.282-1.656-3.755-4.067-3.755-3.262 0-5.705 2.281-5.705 5.418 0 2.281 1.655 3.739 4.066 3.739 3.263 0 5.706-2.234 5.706-5.402zm-6.108 1.283c0-.903.515-1.996 1.495-1.996.53 0 .948.332.948 1.077 0 .903-.514 1.996-1.495 1.996-.546 0-.948-.333-.948-1.077zm10.359.348c.225-1.22.964-1.584 2.25-1.584h1.013l.658-3.754c-1.173 0-2.378.713-3.262 1.71l.29-1.647h-3.569l-1.607 8.935h3.568l.659-3.66zm4.3 0c-.5 2.773.947 3.66 3.069 3.66h1.35l.547-2.994h-.852c-.466 0-.627-.19-.563-.602l.434-2.408h1.479l.53-2.93h-1.478l.385-2.155H53.93l-.386 2.154h-1.125l-.53 2.93h1.125l-.418 2.345zm5.584 3.66h3.568L63.854 39h-3.568L58.18 50.723zm7.868-.444l-2.25-8.49h3.97l.883 4.53 2.411-4.53H75L66.835 55H62.93l3.118-4.72z"
        />
      </g>
    </svg>
  );
}

export default SvgShortly;
