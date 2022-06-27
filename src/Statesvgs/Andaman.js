import * as React from "react";

const Andaman = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    baseProfile="full"
    width={800}
    height={533}
    style={{
      backgroundColor: "#e0f2f1",
    }}
    {...props}
  >
    <rect width="100%" height="100%" fill="#e0f2f1" />
    <path
      d="M 0 0 L 800 0 L 800 533 L 0 533 L 0 0 Z"
      fill="rgba(255, 255, 255, 0.8)"
      fillOpacity={1}
      stroke="none"
      clipPath="none"
    />
    <path
      d="M 399.9984 256.5 A 10 10 0 0 1 406.4072 258.8222"
      fill="none"
      stroke="#c23531"
      strokeWidth={5}
      paintOrder="fill"
      strokeOpacity={1}
      strokeDasharray=""
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      clipPath="none"
    />
    <path
      d="M 390 256.5 L 410 256.5 L 410 276.5 L 390 276.5 L 390 256.5 Z"
      fill="none"
      stroke="none"
      clipPath="none"
    />
    <text
      transform="matrix(1,0,0,1,0,0)"
      fill="#000"
      fillOpacity={1}
      stroke="none"
      clipPath="none"
      style={{
        font: "12px sans-serif",
      }}
    >
      <tspan dominantBaseline="middle" textAnchor="start" x={420} y={266.5}>
        {"loading"}
      </tspan>
    </text>
    <text
      transform="matrix(1 0 0 1 437.8187 430.8289)"
      style={{
        fontFamily: "'Tahoma'",
        fontSize: 13,
      }}
      className="maplabels1"
    >
      {"Nicobar Islands"}
    </text>
    <text
      transform="matrix(1 0 0 1 413.7142 137.2467)"
      style={{
        fontFamily: "'Tahoma'",
        fontSize: 13,
      }}
      className="maplabels1"
    >
      {"North and Middle Andaman"}
    </text>
    <text
      transform="matrix(1 0 0 1 411.218 246.7261)"
      style={{
        fontFamily: "'Tahoma'",
        fontSize: 13,
      }}
      className="maplabels1"
    >
      {"South Andaman"}
    </text>
    <text x={643} y={519.33333333333} fontSize={11}>
      {"Created with paintmaps.com"}
    </text>
  </svg>
);

export default Andaman;
