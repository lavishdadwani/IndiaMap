import React, { useState } from 'react';
import '../Styles/IndiaMap.css';
const SVGComponent = (props) => {
  const [state, setstate] = useState('');

  const toolTip = document.querySelector('.ToolTip');
  console.log(toolTip);
  const mouseOutEvent = (e) => {
    let clickid = '#' + e.target.id;
    toolTip.style.visibility = 'hidden';
    setstate('');
    console.log(clickid);
    document.querySelector(clickid).style.strokeWidth = '1.5';
    document.querySelector(clickid).style.stroke = '#1f1e1d';
  };

  const doubleclickEvent = (e) => {
    let clickid = '#' + e.target.id;
    document.querySelector(clickid).style.strokeWidth = '6';
    document.querySelector(clickid).style.stroke = '#ffffff';
  };

  const mouseEventHandle = (e) => {
    console.log(e.target.getAttribute('id'));
    setstate(e.target.getAttribute('id'));
    toolTip.style.visibility = 'visible';
    console.log(e.pageX);
    toolTip.style.left = `${e.pageX}px`;
    toolTip.style.top = `${e.pageY}px`;
    let clickid = '#' + e.target.id;
    console.log(clickid);
    document.querySelector(clickid).style.strokeWidth = '5';
    document.querySelector(clickid).style.stroke = '#15dceb';
  };

  return (
    <>
      <div className="ToolTip">{state}</div>
      <svg
        xmlnsDc="http://purl.org/dc/elements/1.1/"
        xmlnsCc="http://creativecommons.org/ns#"
        xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlnsSvg="http://www.w3.org/2000/svg"
        xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
        width="63.58609cm"
        height="65.990578cm"
        viewBox="0 0 5500 5500"
        id="svg2"
        xmlSpace="preserve"
        sodipodiVersion={0.32}
        inkscapeVersion="0.92.5 (0.92.5+68)"
        sodipodiDocname="UP COVID-19 map.svg"
        inkscapeDutput_extension="org.inkscape.output.svg.inkscape"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          blockSize: '2494.13px',
          height: '2494.13px',
          inlineSize: '2403.25px',
          perspectiveOrigin: '1201.63px 1247.04px',
          transformOrigin: '1201.63px 1247.06px',
          width: '2403.25px',
        }}
        {...props}
      >
        <metadata
          id="metadata107"
          style={{
            blockSize: 'auto',
            height: 'auto',
            inlineSize: 'auto',
            overflowX: 'visible',
            overflowY: 'visible',
            perspectiveOrigin: '50% 50%',
            transformOrigin: '0px 0px',
            verticalAlign: 'baseline',
            width: 'auto',
          }}
        >
          <rdfRdf
            style={{
              blockSize: 'auto',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '50% 50%',
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
          >
            <ccWork
              rdfAbout=""
              style={{
                blockSize: 'auto',
                height: 'auto',
                inlineSize: 'auto',
                overflowX: 'visible',
                overflowY: 'visible',
                perspectiveOrigin: '50% 50%',
                transformOrigin: '0px 0px',
                verticalAlign: 'baseline',
                width: 'auto',
              }}
            >
              <dcFormat
                style={{
                  blockSize: 'auto',
                  height: 'auto',
                  inlineSize: 'auto',
                  overflowX: 'visible',
                  overflowY: 'visible',
                  perspectiveOrigin: '50% 50%',
                  transformOrigin: '0px 0px',
                  verticalAlign: 'baseline',
                  width: 'auto',
                }}
              >
                {'image/svg+xml'}
              </dcFormat>
              <dcype
                rdfResource="http://purl.org/dc/dcmitype/StillImage"
                style={{
                  blockSize: 'auto',
                  height: 'auto',
                  inlineSize: 'auto',
                  overflowX: 'visible',
                  overflowY: 'visible',
                  perspectiveOrigin: '50% 50%',
                  transformOrigin: '0px 0px',
                  verticalAlign: 'baseline',
                  width: 'auto',
                }}
              />
              <dcitle
                style={{
                  blockSize: 'auto',
                  height: 'auto',
                  inlineSize: 'auto',
                  overflowX: 'visible',
                  overflowY: 'visible',
                  perspectiveOrigin: '50% 50%',
                  transformOrigin: '0px 0px',
                  verticalAlign: 'baseline',
                  width: 'auto',
                }}
              />
            </ccWork>
          </rdfRdf>
        </metadata>
        <sodipodiNamedview
          inkscapeWindow-height={713}
          inkscapeWindow-width={683}
          inkscapePageshadow={2}
          inkscapePageopacity={0}
          guidetolerance={10}
          gridtolerance={10}
          objecttolerance={10}
          borderopacity={1}
          bordercolor="#666666"
          pagecolor="#ffffff"
          id="base"
          showgrid="false"
          inkscapeZoom={0.2151813}
          inkscapeCx={1201.6269}
          inkscapeCy={1254.3358}
          inkscapeWindow-x={683}
          inkscapeWindow-y={27}
          inkscapeCurrent-layer="svg4211"
          inkscapeWindow-maximized={0}
          fit-margin-top={0}
          fit-margin-left={0}
          fit-margin-right={0}
          fit-margin-bottom={0}
          units="cm"
          inkscapePagecheckerboard="true"
          style={{
            blockSize: 'auto',
            height: 'auto',
            inlineSize: 'auto',
            overflowX: 'visible',
            overflowY: 'visible',
            perspectiveOrigin: '50% 50%',
            transformOrigin: '0px 0px',
            verticalAlign: 'baseline',
            width: 'auto',
          }}
        />
        <defs
          id="defs120"
          style={{
            blockSize: 'auto',
            height: 'auto',
            inlineSize: 'auto',
            overflowX: 'visible',
            overflowY: 'visible',
            perspectiveOrigin: '0px 0px',
            transformOrigin: '0px 0px',
            verticalAlign: 'baseline',
            width: 'auto',
          }}
        >
          <inkscapePerspective
            sodipodiype="inkscape:persp3d"
            inkscapeVp_x="0 : 1233.1639 : 1"
            inkscapeVp_y="0 : 1000 : 0"
            inkscapeVp_z="2379.3888 : 1233.1639 : 1"
            inkscapePersp3d-origin="1189.6945 : 822.10929 : 1"
            id="perspective109"
            style={{
              blockSize: 'auto',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '50% 50%',
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
          />
        </defs>
        <style
          type="text/css"
          id="style2919"
          style={{
            blockSize: 'auto',
            height: 'auto',
            inlineSize: 'auto',
            overflowX: 'visible',
            overflowY: 'visible',
            perspectiveOrigin: '50% 50%',
            transformOrigin: '0px 0px',
            verticalAlign: 'baseline',
            width: 'auto',
          }}
        >
          {
            '\n               .stZero{fill:#e6e6e6;}\n               .stOne{fill:#fee5d9;stroke:#FFFFFF;stroke-width:2.1333;stroke-miterlimit:4.2667;}\n               .stTwo{fill:#fcbba1;stroke:#FFFFFF;stroke-width:2.1333;stroke-miterlimit:4.2667;}\n               .stThree{fill:#fc9272;stroke:#FFFFFF;stroke-width:2.1333;stroke-miterlimit:4.2667;}\n               .stFour{fill:#fb6a4a;stroke:#FFFFFF;stroke-width:2.1333;stroke-miterlimit:4.2667;}\n               .stFive{fill:#de2d26;stroke:#FFFFFF;stroke-width:2.1333;stroke-miterlimit:4.2667;}\n               .stSix{fill:#a50f15;stroke:#FFFFFF;stroke-width:2.1333;stroke-miterlimit:4.2667;}\n               .stSeven{fill:#880000;stroke:#FFFFFF;stroke-width:2.1333;stroke-miterlimit:4.2667;}\n               .st7{fill:none;stroke:#646464;stroke-width:3.9685;}\n               .st8{fill:none;stroke:#0978AB;stroke-width:2;stroke-linejoinRound;}\n               .st9{fill:none;stroke:#0978AB;stroke-width:1.2;stroke-linejoinRound;}\n               .st10{fill:#FEFEE9;stroke:#646464;stroke-width:1.701;}\n               .st11{fill:#C6ECFF;}\n               .st12{fill:#C6ECFF;stroke:#0978AB;stroke-miterlimit:3.8637;}\n           '
          }
        </style>
        <g
          id="svg4211"
          transform="translate(10.344776,6.632)"
          style={{
            blockSize: 'auto',
            height: 'auto',
            inlineSize: 'auto',
            overflowX: 'visible',
            overflowY: 'visible',
            perspectiveOrigin: '0px 0px',
            transform: 'matrix(1, 0, 0, 1, 10.3448, 6.632)',
            transformOrigin: '0px 0px',
            verticalAlign: 'baseline',
            width: 'auto',
          }}
        >
          <defs
            id="defs7"
            style={{
              blockSize: 'auto',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
          />
          <path
            d="m 1523.92,1588.476 v 0 0 c 0,0 10.656,-14.652 10.656,-34.635 0,-19.981 -14.652,-9.325 -29.307,-11.989 -14.653,-2.664 -18.648,-21.312 -31.971,-27.974 -13.321,-6.661 -5.328,-14.653 -5.328,-18.649 0,-3.996 5.86,-10.324 4.783,-14.249 -0.589,-2.146 -13.012,-7.3 -13.012,-7.3 l -8.595,-6.273 -15.189,-8.629 -12.647,-15.891 c 0,0 30.392,-1.688 56.157,2.615 37.54,6.895 44.457,18.75 68.041,28.185 19.988,7.96 35.968,6.485 52.183,22.937 16.215,16.452 32.017,23.172 55.188,24.882 23.171,1.71 -24.784,-2.299 5.994,0 30.778,2.3 30.268,17.807 39.701,45.46 7.488,21.874 16.45,43.454 21.108,66.214 1.827,8.903 7.842,28.42 -3.479,29.187 -12.617,0.825 -25.766,3.832 -37.912,-1.475 -19.812,-8.607 -23.172,-34.257 -42.217,-44.044 -9.257,-4.718 -19.87,-4.895 -29.895,-6.368 -12.677,-1.828 -23.229,-7.135 -34.609,-12.677 -11.733,-5.72 -35.732,-8.375 -48.631,-8.744"
            id="Sultanpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 174.41,407.364 c 11.203,0.295 23.938,-4.953 33.55,2.653 1.533,1.238 17.395,13.031 16.922,14.208 6.25,-13.795 25.235,-9.434 37.087,-8.902 9.08,0.413 13.738,-12.559 17.808,-19.516 3.655,-6.191 9.729,-10.79 15.742,-15.389 -10.85,-5.837 -9.315,-23.467 -10.672,-33.785 -2.713,-19.988 -13.268,-29.186 3.125,-47.169 12.911,-14.092 24.469,-24.764 30.719,-43.514 6.485,-19.457 8.077,-48.113 37.146,-42.865 -34.434,-20.165 -73.938,-24.233 -99.82,-58.49 -5.896,28.479 -27.063,46.049 -44.812,67.393 -8.312,9.965 -15.564,21.108 -18.277,33.962 -3.008,14.269 -18.867,0 -25.942,12.972 -5.72,10.437 -6.78,22.169 -19.575,24.646 -12.972,2.536 -15.035,15.979 -15.39,27.004 -0.412,11.438 0.53,22.583 -6.072,32.605 -8.903,13.443 -14.092,26.297 -21.875,40.212 22.872,9.612 45.514,13.385 70.336,13.975"
            id="Saharanpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 363.028,457.895 c -2.063,31.132 -4.775,64.621 16.45,89.092 4.835,5.602 2.477,21.58 2.24,32.604 -0.295,12.265 -1.475,24.233 -5.012,36.025 37.677,1.003 70.872,12.5 108.843,4.362 12.795,-2.771 30.071,-2.005 35.79,-13.854 3.538,-7.312 4.481,-11.97 4.305,-19.988 8.667,-2.477 12.735,-9.257 14.917,-17.217 3.421,-12.559 7.665,-28.892 18.455,-37.264 4.895,-3.833 10.85,-6.191 17.04,-6.958 9.61,-1.238 6.25,-8.667 14.388,-10.082 13.502,-2.358 55.011,-7.547 27.651,-25.825 -21.285,-14.21 -42.511,-27.063 -63.441,-42.099 -14.21,-10.2 -28.773,-21.108 -38.385,-36.026 -8.668,-13.443 -13.267,-29.363 -25.412,-40.448 -11.497,-10.436 -21.108,-9.729 -34.61,-4.363 -12.854,5.071 -25.825,0.531 -33.372,14.033 -7.193,12.913 -21.64,11.969 -28.597,23.172 -4.895,7.901 -9.258,29.245 -22.938,22.465 -0.234,7.665 1.593,28.891 -8.312,32.371"
            id="Bijnor"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 624.878,619.626 c -18.515,0.06 -15.565,36.202 -8.962,45.932 16.391,24.115 20.519,38.325 8.019,66.272 -12.677,2.062 -35.26,-4.895 -35.554,10.2 -0.236,10.85 6.427,11.909 11.497,21.107 8.195,14.858 17.453,39.27 6.25,54.717 15.094,3.303 14.269,5.483 27.478,-1.945 8.901,-5.013 18.571,-8.138 27.594,-12.735 19.692,-10.142 41.979,-27.299 57.016,-43.514 10.495,-11.32 5.603,-29.127 16.568,-41.45 6.722,-7.547 14.682,-13.562 20.637,-21.815 6.78,-9.315 11.792,-21.227 21.993,-27.477 -4.423,-16.804 -25.295,-16.332 -38.148,-23.29 -8.784,-4.717 -16.805,-10.672 -25.767,-15.094 -13.443,-6.545 -19.812,-0.118 -20.695,-16.333 -0.825,-15.152 -5.425,-25.648 -21.757,-27.829 -29.012,-3.951 -33.729,10.907 -46.169,33.254"
            id="Rampur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 750.23,702.88 c -9.906,11.085 -21.521,18.573 -24.823,34.021 -3.479,16.038 -5.247,21.402 -18.69,32.312 -12.618,10.26 -24.587,21.403 -38.442,29.952 -14.74,9.021 -32.312,12.854 -45.638,24.233 15.743,7.253 25.473,19.517 29.481,36.262 2.889,12.028 0.354,45.99 14.682,44.811 19.517,-1.649 29.716,-0.294 44.044,13.562 10.908,10.613 29.009,-5.188 42.808,-0.473 19.811,6.78 -5.543,25.648 7.016,35.73 9.375,7.548 7.96,1.298 16.097,-4.127 8.491,-5.66 17.63,-5.602 27.478,-5.896 1.649,-18.337 1.002,-63.854 30.66,-41.391 1.179,-8.668 5.364,-25.177 -4.423,-30.837 -2.182,-15.035 6.133,-22.405 16.273,-31.84 6.072,-5.66 11.792,-11.615 9.847,-20.4 -1.121,-5.188 -2.652,-10.142 -3.243,-15.507 -5.247,-0.236 -11.852,-2.005 -13.503,-7.842 2.123,-6.311 -0.116,-8.55 -6.779,-6.781 -4.54,-0.884 -7.665,-3.36 -9.905,-7.311 -6.427,-11.146 -14.27,-13.325 -11.026,-27.712 2.653,-11.853 9.141,-22.348 11.616,-34.258 2.535,-12.382 0.06,-25.354 5.07,-37.265 -10.908,-2.417 -22.11,-2.358 -33.195,-2.417 -14.21,-0.177 -14.8,1.71 -18.042,-10.849 -12.624,7.667 -17.872,23.41 -27.363,34.023"
            id="Bareilly"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 811.314,768.15 c 7.782,3.597 8.784,10.612 13.914,16.449 3.655,4.129 9.375,4.776 14.563,4.658 -1.415,6.25 1.356,11.203 7.43,13.148 25.412,8.019 -1.18,36.38 -10.2,45.932 -8.313,8.785 -8.255,17.334 -2.83,26.65 6.722,11.557 -7.959,32.724 11.38,28.419 7.075,-1.592 14.444,-1.709 21.639,-1.415 10.142,0.413 6.781,2.182 10.201,10.201 4.009,9.492 12.087,20.399 23.879,17.924 -1.179,-28.773 -5.542,-85.671 34.788,-91.686 15.684,-2.358 25.294,9.315 38.737,-3.715 10.377,-10.022 22.404,-20.99 34.257,-4.953 4.774,-18.102 28.479,-0.059 30.542,-23.172 1.237,-13.737 0.06,-29.774 -17.157,-30.896 1.827,-10.789 4.422,-21.639 9.021,-31.662 2.182,-4.835 4.894,-9.434 8.137,-13.679 -3.538,-6.311 -7.37,-12.441 -11.733,-18.221 -10.849,-14.21 -9.905,-20.104 -28.007,-13.147 -11.38,4.422 -21.934,7.842 -27.83,19.28 -5.07,9.847 -5.542,16.98 -17.865,16.923 -5.602,0 -11.144,-0.295 -16.686,-0.768 0.472,-4.245 0.647,-9.847 -2.653,-13.267 -3.772,-3.893 -9.729,-2.891 -14.387,-4.776 -1.888,-0.707 -3.186,-2.004 -3.951,-3.832 -2.712,-6.84 -10.907,-4.835 -17.865,-3.185 -0.354,-9.492 0.473,-18.985 0.118,-28.479 -7.312,-1.649 -14.857,-1.354 -22.229,-0.354 -16.627,2.241 -31.015,5.366 -47.76,1.71 -5.07,11.91 -2.534,24.941 -5.07,37.264 -3.479,16.397 -14.918,31.197 -12.383,48.649"
            id="Pilibhit"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1038.494,817.324 c -7.665,6.015 -18.042,0.59 -25.59,5.955 -8.254,5.838 2.005,15.92 4.362,22.878 5.603,16.391 3.186,39.091 -2.594,55.069 -7.901,21.815 -32.725,15.742 -31.427,43.985 0.647,14.269 -1.828,13.089 -14.092,18.81 -6.368,3.007 -17.983,7.252 -21.108,14.326 -0.413,-3.891 1.002,-7.016 4.127,-9.314 -10.612,5.425 -22.582,11.792 -28.891,22.347 -8.903,14.799 2.24,27.24 7.899,40.565 2.535,5.955 3.066,12.382 3.303,18.75 9.788,-0.59 19.692,-0.708 29.304,1.354 18.338,3.833 31.191,16.745 46.757,26.12 1.238,-14.505 9.493,-24.527 22.229,-30.66 11.732,-5.66 25.767,-19.104 34.552,-6.897 6.604,9.197 15.095,15.979 26.474,8.667 4.423,-2.83 7.488,-7.605 7.193,-13.03 10.73,-0.943 21.403,0.885 31.957,2.595 12.382,2.005 29.48,6.191 40.507,-2.123 11.498,-8.667 19.93,-15.802 35.495,-13.854 13.915,1.71 27.005,8.019 39.562,13.854 5.896,2.771 11.792,5.603 17.865,7.96 10.142,3.95 9.08,16.273 10.908,26.002 20.694,-48.466 -5.012,-98.996 -31.25,-139.855 -12.618,-19.753 -28.892,-39.27 -32.783,-63.03 -4.422,-27.005 9.316,-53.479 24.233,-75.06 10.26,-14.799 9.61,-15.802 -1.475,-30.012 -6.604,-8.49 -14.092,-16.332 -22.522,-23.054 -19.635,-15.565 -42.924,-22.643 -67.157,-27.535 -26.71,-5.365 -55.719,-8.432 -82.016,0.531 -27.123,9.257 -37.382,37.087 -41.745,62.971 22.112,1.415 17.397,26.415 15.923,41.685"
            id="Lakhimpur_Kheri"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1242.029,924.694 c 22.995,34.964 48.23,77.829 42.394,121.4 -2.889,21.875 -11.438,30.188 5.896,49.058 12.795,13.915 12.382,27.651 13.267,45.637 0.707,14.622 11.32,25.53 11.792,37.027 0.531,11.97 7.901,11.557 5.366,23.524 -2.478,11.911 1.65,11.262 10.789,13.916 16.923,5.012 19.93,19.517 19.34,35.377 -0.295,7.664 -1.297,15.271 -1.592,22.877 -0.59,14.032 13.384,-7.017 17.924,-10.26 12.44,-8.903 39.444,-24.705 36.498,-43.337 -2.83,-17.688 -1.651,-29.775 -9.021,-47.346 -4.48,-10.674 -19.988,-37.56 -12.854,-49.058 9.197,-14.682 27.535,-28.064 -2.418,-29.245 -12.678,-0.529 -7.842,-13.266 -9.964,-24.115 -2.005,-10.259 -5.308,-20.224 -9.493,-29.774 -3.479,-7.842 -4.305,-17.217 -9.553,-24.175 -4.599,-6.133 -11.791,-10.023 -11.97,-18.396 -0.294,-11.615 12.618,-6.368 21.58,-6.781 3.361,-6.721 8.491,-12.616 13.681,-17.981 13.384,-13.915 27.889,-24.705 47.698,-25.826 -16.037,-48.82 -39.856,-94.751 -66.686,-138.501 -21.992,-35.849 -50.589,-69.456 -96.934,-54.421 2.123,0.825 3.716,3.125 5.837,4.067 -20.637,25.942 -44.279,53.242 -50.234,86.969 -5.423,30.661 12.797,55.248 28.657,79.364"
            id="Bahraich"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1360.01,991.144 c -10.672,0.473 -26.002,-4.894 -20.931,11.263 2.357,7.487 11.085,11.793 14.327,19.163 4.657,10.672 8.607,22.522 12.205,33.549 2.418,7.43 4.128,15.035 5.13,22.817 1.355,10.2 -3.538,15.86 8.727,16.332 36.379,1.476 3.773,16.334 1.356,31.957 -3.42,22.171 16.566,49.471 22.287,70.4 27.004,-25.234 37.204,18.396 59.491,15.566 18.515,-2.358 11.263,-42.1 12.146,-54.127 16.155,0 65.094,36.91 54.952,-5.778 -2.358,-10.083 -11.733,-16.272 -20.695,-19.988 -7.548,-3.125 -12.146,-0.707 -12.146,-10.259 0.059,-7.017 1.769,-14.033 4.304,-20.578 9.435,-24.527 32.135,-34.609 43.22,-57.016 11.497,-23.231 40.094,-17.453 61.909,-16.863 10.967,-7.075 8.313,-12.559 3.833,-25.59 -4.953,-14.387 -13.974,-26.945 -26.062,-36.202 -24.409,-18.632 -55.719,-18.514 -85.021,-17.335 -51.65,2.182 -110.669,-14.032 -139.032,42.689"
            id="Shravasti"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1603.465,1027.523 c -15.507,0 -39.622,-5.131 -52.299,6.545 -6.25,5.776 -8.255,14.799 -12.736,21.756 -5.66,8.845 -16.332,12.972 -22.994,21.05 -7.9,9.552 -30.602,47.464 -12.322,53.302 21.814,7.017 31.897,21.521 23.229,43.867 20.638,4.127 22.288,26.12 37.028,37.205 -34.729,21.814 10.26,34.551 22.877,46.814 9.08,8.845 19.87,11.853 31.073,3.598 9.375,-6.898 8.726,-26.887 17.335,-26.77 -2.771,-22.465 -1.946,-43.455 13.502,-61.91 15.802,-18.809 44.221,-8.076 65.033,-9.375 -4.186,-6.839 -3.714,-15.389 -2.357,-22.936 2.005,-11.026 8.727,-8.728 14.092,-17.571 6.723,-11.024 6.723,-25.707 16.156,-35.199 -0.061,1.298 -0.061,2.652 -0.118,3.95 6.368,-7.488 15.212,-11.97 24.94,-13.385 11.793,-1.71 8.784,-11.085 3.655,-20.99 -8.432,-16.272 -26.355,-26.827 -43.102,-32.842 -21.935,-7.9 -43.22,-2.83 -65.742,-1.887 -10.495,0.412 -20.872,-1.298 -31.367,-1.238 -9.375,0.12 -17.569,6.016 -25.883,6.016"
            id="Balrampur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1740.904,1091.851 c 0,-1.298 0.06,-2.595 0.118,-3.949 -9.435,9.491 -9.435,24.174 -16.155,35.198 -2.83,4.658 -6.958,8.196 -12.323,9.67 -2.535,9.671 -5.012,21.64 0.59,30.838 -31.84,1.945 -59.729,-9.905 -74.939,26.532 -6.604,15.803 -5.66,28.242 -3.598,44.752 14.623,0.235 27.358,6.663 34.14,19.87 3.772,7.312 1.355,13.797 10.73,12.382 8.785,-1.355 15.565,-4.187 23.525,-7.9 15.92,-7.429 28.42,5.248 41.037,13.385 13.385,8.608 29.775,10.26 42.982,19.517 6.485,-2.947 13.975,-3.655 21.051,-3.772 9.257,-0.177 12.439,-7.312 22.522,-8.196 -5.366,-16.686 2.476,-19.339 8.844,-32.016 7.665,-15.33 2.535,-32.135 20.048,-42.1 9.257,-5.307 23.644,-7.725 28.065,-18.75 4.952,-12.205 0.589,-30.542 -5.425,-41.567 -19.986,-36.206 -103.83,-97.763 -141.212,-53.894"
            id="Siddharthnagar"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1981.409,1128.229 c -34.787,1.356 -93.513,-16.272 -92.569,39.506 0.53,32.842 -20.578,24.939 -37.854,45.047 -9.965,11.556 -4.835,28.479 -14.445,39.444 -3.185,3.655 -15.92,28.36 -4.658,27.83 -5.307,-18.043 48.468,-7.487 56.249,-6.84 0.236,12.5 -2.534,25.884 11.145,31.898 13.916,6.071 28.538,9.491 41.687,17.512 10.79,6.544 9.375,5.069 20.577,-2.183 8.196,-5.365 17.571,-8.784 26.12,-13.503 17.04,-9.257 17.512,-22.109 25.177,-37.911 4.54,-9.375 11.793,-9.493 12.441,-20.4 0.59,-9.493 1.65,-19.045 6.722,-27.358 6.133,-9.965 20.577,-6.19 28.065,-16.097 -23.938,0.53 -25.943,-28.42 -27.476,-45.872 -0.531,-6.073 -2.536,-40.684 -8.256,-41.097 -15.155,-1.06 -28.007,9.436 -42.925,10.024"
            id="Maharajganj"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 2053.931,1211.307 c -14.269,7.018 -22.699,3.715 -27.005,22.818 -2.358,10.613 0.767,18.632 -7.429,25.884 -7.312,6.368 -9.198,15.979 -12.205,24.705 -7.312,21.285 -28.655,24.587 -45.755,35.672 -7.075,4.6 -17.57,8.078 -6.25,13.562 5.778,2.83 6.663,12.321 7.312,17.806 1.828,15.566 2.123,29.6 6.016,44.988 10.906,-0.885 21.814,0.234 32.664,1.002 5.365,0.472 10.672,0.708 16.038,0.708 12.322,0 5.837,-2.771 10.729,-10.967 15.861,-26.533 59.552,34.964 67.983,42.511 14.857,13.325 31.426,-0.235 49.821,0.648 13.621,0.648 56.545,11.732 63.562,-6.31 3.243,-8.372 -6.485,-15.094 -13.443,-15.92 -4.067,-0.294 -8.137,-0.294 -12.205,0 -9.846,0.354 -3.064,-3.302 -8.254,-9.08 -2.357,-2.417 -5.307,-3.479 -8.727,-3.125 -1.71,-5.424 -2.713,-10.967 -3.066,-16.627 -1.179,-16.155 5.896,-27.24 -13.679,-26.827 -18.868,0.354 -45.105,1.238 -48.525,-23.23 -2.062,-14.74 8.668,-39.622 -6.722,-49.704 -15.92,-10.438 -17.807,-6.134 -17.748,-26.651 0.061,-17.747 -18.926,-29.775 -16.567,-48.054 0.768,-10e-4 -6.72,6.249 -6.545,6.191"
            id="Kushinagar"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 2068.496,1398.451 c -8.137,-6.132 -27.005,-22.818 -37.854,-13.855 -2.24,2.063 -3.716,4.539 -4.423,7.547 -2.771,9.492 -7.135,6.723 -16.805,6.25 -13.562,-0.647 -27.182,-2.595 -40.801,-1.532 2.771,10.79 12.321,42.806 -3.243,48.879 -15.153,5.896 -36.203,2.3 -33.195,26.297 2.947,23.703 25.06,15.979 39.857,29.775 6.545,6.072 12.5,13.325 16.745,21.168 6.663,12.439 -1.238,12.911 -5.955,24.057 10.437,-1.533 15.802,-15.095 27.653,-17.396 12.559,-2.476 22.877,5.308 29.479,15.271 12.795,19.28 41.51,41.686 66.804,33.432 -6.604,-6.19 -12.205,-13.208 -15.271,-21.757 14.032,1.12 53.301,-4.48 53.478,-23.703 0.061,-7.724 -2.889,-21.402 -7.781,-27.652 -5.838,-7.488 -19.812,-4.54 -27.948,-6.78 -17.395,-4.835 -50.589,-12.5 -37.5,-37.323 5.188,-9.787 16.215,-7.959 25.235,-10.082 7.9,-1.887 9.553,-8.078 15.035,-12.972 -21.458,-4.424 -27.651,-27.655 -43.51,-39.624"
            id="Deoria"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 2077.871,1576.221 c -10.672,-6.368 -20.165,-15.094 -31.78,-19.752 1.65,3.832 3.065,7.725 4.188,11.733 -9.375,0.589 -17.276,0.767 -23.29,8.608 -8.313,10.907 -12.795,12.972 -24.823,18.396 -6.662,3.007 -9.787,18.278 -3.302,22.937 8.312,5.955 21.345,1.238 22.817,16.037 1.827,17.983 -20.4,20.813 -2.357,35.261 12.264,9.847 27.004,14.504 40.86,21.402 7.959,3.95 12.086,9.08 13.797,17.807 3.597,18.159 9.197,36.557 11.852,54.835 9.315,-3.833 20.755,-3.773 25.648,-14.093 4.01,-8.432 1.887,-20.105 10.672,-25.647 12.382,-7.842 34.257,0.234 31.604,16.804 16.393,1.945 20.461,-13.854 34.198,-18.455 17.688,-6.014 34.964,8.255 52.181,9.788 31.191,2.771 39.506,-31.368 10.908,-43.514 -35.377,-15.035 -68.632,-33.078 -101.648,-53.185 -16.805,-10.26 -13.268,-28.949 -26.771,-42.512 -6.25,-6.25 -12.559,-15.153 -21.344,-12.912 -8.139,2.122 -15.98,0.884 -23.41,-3.538"
            id="Ballia"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 2049.215,1685.948 c -14.622,-6.25 -29.009,-13.443 -39.386,-25.825 -7.783,12.736 -19.104,6.84 -32.37,3.066 -12.323,-3.479 -23.762,-3.243 -36.379,-2.24 -8.432,0.647 -17.571,1.592 -25.118,5.66 -12.735,6.839 -4.422,17.688 -22.995,13.561 2.063,11.145 -34.314,0.768 -42.982,12.618 23.112,14.563 -21.227,36.497 -35.377,35.2 1.415,7.37 3.951,32.959 -4.422,33.019 7.017,6.957 5.07,8.903 15.095,7.135 9.434,-1.65 19.104,-2.005 28.419,0.354 10.555,2.713 19.222,9.316 29.894,11.675 10.261,2.241 20.933,2.241 31.191,4.481 44.103,9.492 34.021,42.865 38.679,76.591 20.637,-10.73 37.322,-23.585 59.729,-31.014 26.119,-8.667 28.42,-28.242 43.927,-47.642 6.663,-8.312 16.155,-10.673 24.114,-16.51 9.258,-6.84 -1.414,-25.767 -3.832,-36.615 -5.486,-24.115 -3.894,-33.137 -28.187,-43.514"
            id="Ghazipur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1930.172,1790.311 c -16.805,-9.315 -36.615,-5.896 -54.245,-12.264 -21.285,-7.725 -34.669,-13.68 -57.841,-8.373 1.415,2.005 8.785,2.713 11.557,2.182 0.235,4.127 2.24,7.606 5.13,10.438 5.012,5.012 13.62,8.727 14.387,16.686 0.942,9.553 -6.545,16.924 -14.445,20.578 -10.495,4.835 -14.623,20.4 -22.877,20.99 12.265,9.375 45.52,64.622 18.632,66.922 -12.027,1.062 -8.55,6.662 -8.078,17.983 0.354,9.08 1.238,18.101 1.004,27.181 -0.179,6.781 -2.123,13.915 -0.59,20.696 1.769,8.019 9.139,13.914 9.021,22.464 -4.363,0.118 -8.491,1.062 -12.5,2.712 12.382,14.683 25.354,28.893 45.754,29.658 16.922,0.59 37.205,-5.13 52.89,3.302 -15.685,-14.269 -15.508,-43.75 -21.815,-62.912 -8.313,-25.472 -3.066,-54.009 9.257,-77.417 4.658,-8.784 11.32,-16.509 20.754,-20.342 6.781,-2.771 14.151,-3.715 20.933,-6.604 9.905,-4.188 5.07,-8.728 5.248,-18.16 0.582,-23.527 0.876,-42.926 -22.176,-55.72"
            id="Chandauli"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1843.555,2022.089 c -11.438,-7.782 -19.634,-28.242 -32.899,-18.809 -2.358,-15.271 -13.62,-21.108 -28.125,-19.045 -17.865,2.536 -30.542,6.25 -49.115,2.713 -14.092,-2.713 -12.617,-1.946 -18.689,8.489 -3.243,5.66 -8.551,9.729 -14.506,12.205 -13.502,5.66 -30.896,4.718 -43.866,-2.005 -1.12,10.554 1.12,21.875 -3.833,31.78 -4.305,8.55 -9.492,14.21 -9.848,24.41 13.856,0.885 37.5,3.597 46.935,-9.61 17.335,-3.065 27.771,5.129 29.01,21.697 5.66,7.075 30.481,6.958 21.049,24.705 -5.66,10.612 -22.522,9.61 -31.662,5.188 -1.002,9.729 -6.897,30.66 8.49,27.829 0.354,8.962 -0.412,17.983 -0.118,26.946 5.071,-0.118 11.203,0.766 14.21,5.424 10.437,16.156 -11.792,43.573 -16.214,58.844 -1.356,4.718 -2.182,9.493 -2.595,14.328 -6.663,-1.475 -13.855,-2.005 -14.093,5.837 -0.235,8.728 17.395,14.033 21.521,24.175 3.064,7.548 -1.711,21.05 10.967,20.282 -1.65,11.497 7.488,15.685 17.217,17.335 7.193,1.238 18.338,-0.295 20.4,7.135 2.24,8.077 10.023,12.854 17.395,15.565 17.864,6.663 40.625,6.84 58.902,1.592 25.884,-7.487 11.674,-31.073 19.929,-49.114 4.54,-10.022 15.625,-2.418 16.332,-13.442 0.708,-11.321 15.096,-8.373 22.583,-8.786 -1.887,-13.443 -18.338,-22.936 -4.718,-35.79 8.137,-7.664 24.941,-11.674 14.563,-25.647 -13.855,-18.69 5.896,-24.527 8.668,-40.684 1.769,-10.318 -22.405,-35.613 -0.06,-39.622 31.662,-5.72 40.152,-41.745 19.869,-65.212 -9.021,-10.438 -22.817,-22.17 -36.969,-23.23 -19.221,-1.415 -43.63,6.132 -60.73,-5.483"
            id="Sonbhadra"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1644.03,2052.926 c 1.888,-5.66 5.838,-10.259 8.491,-15.507 4.951,-9.905 2.712,-21.226 3.832,-31.78 11.675,6.016 26.532,7.193 39.149,3.656 13.915,-3.951 20.226,-24.527 30.248,-23.525 19.517,2.005 32.9,3.36 52.122,-0.709 15.684,-3.301 30.07,0.413 32.782,18.221 6.073,-4.305 13.62,-7.37 21.168,-7.488 0.116,-13.267 -10.438,-21.639 -8.963,-36.438 0.825,-8.313 0.472,-16.568 0,-24.94 -0.707,-11.853 -5.837,-25.825 7.605,-26.945 14.505,-1.237 9.021,-21.935 5.07,-33.607 -3.065,-8.962 -13.855,-32.252 -24.882,-33.255 0.059,7.665 5.66,13.503 6.958,20.873 -11.616,3.714 -22.761,-5.543 -34.316,-0.648 -9.198,3.893 -15.802,12.973 -25.707,15.447 -9.905,2.477 -15.212,-4.835 -19.693,-12.146 -5.954,-9.61 -14.327,-12.44 -25.294,-12.677 -4.835,0.235 -9.61,-0.472 -14.21,-1.946 -11.38,-4.186 -4.54,-2.771 -11.793,3.361 -5.601,4.775 -15.624,2.889 -22.286,2.83 -11.203,-0.059 -22.877,3.361 -33.963,1.002 -13.855,-2.947 -23.467,0 -36.91,-0.825 -9.434,-0.53 -46.107,-18.514 -37.559,6.663 4.895,14.387 22.818,21.226 31.427,33.136 13.502,18.632 -5.659,31.427 -19.045,41.863 -21.698,16.979 -22.817,49.115 -44.987,67.275 12.912,-1.003 9.08,5.659 9.14,16.979 11.615,1.003 23.349,0.473 34.905,1.475 0.412,10.968 -0.648,21.935 -0.235,32.9 6.367,0.354 12.735,0.707 19.104,1.12 0.059,6.368 0.059,12.735 0.117,19.104 12.56,-2.123 13.502,15.094 24.765,12.44 1.297,-9.729 -2.3,-19.281 -0.648,-28.951 4.895,-0.059 9.787,0.118 14.682,0.531 13.619,1.001 14.681,5.364 18.926,-7.489"
            id="Mirzapur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1546.389,1973.977 c 5.777,-12.972 10.082,-27.3 21.757,-36.438 9.553,-7.488 22.229,-13.502 23.584,-27.062 1.946,-19.104 -22.642,-28.893 -32.486,-41.687 -4.835,-6.25 -6.781,-15.33 1.354,-19.93 5.189,-2.948 10.261,-13.443 15.685,-19.339 6.072,-6.546 2.418,-19.341 11.085,-23.291 16.097,-7.369 -1.12,-18.809 -6.544,-29.48 -7.488,-14.74 3.241,-27.062 -10.968,-39.562 -10.317,-9.08 -20.52,1.062 -30.248,-4.895 -8.019,-4.895 -10.907,0.767 -17.688,-8.312 -7.193,-9.671 -13.325,-18.515 -24.174,-24.588 -11.733,-6.545 -25.177,-6.427 -38.208,-6.604 -10.789,-0.177 -25.06,-8.728 -34.846,-1.593 -9.316,6.84 -14.801,20.225 -19.341,30.482 -6.661,14.978 -19.339,7.018 -30.776,13.503 21.226,3.773 18.514,26.887 39.149,29.244 13.385,1.533 26.475,4.896 39.8,6.723 5.482,0.826 11.024,1.18 16.567,1.119 0.825,6.25 0.53,12.618 -3.065,18.043 -1.888,4.127 -5.013,6.31 -9.435,6.546 -7.783,0.472 -6.073,6.484 -9.787,11.319 -5.188,6.78 -3.951,9.905 -13.208,12.146 -11.91,2.889 -25,-1.533 -37.146,-0.473 -14.978,1.297 -31.132,4.01 -45.755,7.487 5.955,16.451 8.078,34.257 6.31,51.65 11.615,-1.297 29.009,-2.357 30.955,13.326 1.474,12.146 -7.665,22.877 -6.427,34.904 20.99,1.71 29.245,-6.663 40.329,14.093 8.607,16.037 32.487,8.607 46.815,9.847 10.023,0.884 -5.72,45.636 15.685,53.36 28.482,10.381 49.884,-5.48 61.027,-30.538"
            id="Prayagraj"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1351.875,1827.516 c -12.087,2.83 -20.4,7.725 -32.192,0.886 -9.315,-5.426 -17.217,-14.093 -28.243,-16.038 -20.164,-3.598 -34.139,-8.551 -46.226,-25.943 20.933,-9.493 -6.663,-23.467 -17.217,-25.647 -16.097,-3.36 -18.573,-11.38 -21.167,-26.532 -0.531,9.434 -2.182,19.044 -5.896,27.83 -4.244,9.904 -14.15,14.209 -18.337,22.817 -8.55,17.63 -32.075,21.64 -47.937,31.427 -17.217,10.672 -16.687,27.595 -15.803,46.227 0.473,9.729 2.123,17.688 8.433,25.589 9.08,11.32 19.397,-0.295 20.578,18.042 2.476,-4.599 3.064,-10.554 2.652,-15.684 7.075,-0.235 14.15,-0.118 21.227,0.59 -1.945,7.193 -8.667,7.783 -11.91,13.974 -3.007,5.778 -2.122,12.618 -2.478,18.811 -1.002,14.976 -3.772,30.069 -12.264,42.688 12.795,3.716 20.4,-7.604 30.837,-12.264 10.2,-4.6 11.438,3.302 21.108,5.307 21.285,4.363 43.867,1.062 65.329,0.178 -7.43,-16.45 6.958,-27.301 12.972,-41.037 3.302,-7.488 1.887,-14.918 -2.948,-21.462 3.186,-2.948 6.958,-4.306 11.321,-4.011 10.2,0.236 6.309,6.604 8.431,14.623 5.839,-10.437 14.21,-20.932 27.771,-16.98 0.472,12.854 11.438,25.118 25.117,23.702 -2.24,-12.499 9.375,-21.815 5.365,-34.729 17.455,-0.655 5.78,-40.336 1.477,-52.364"
            id="Chitrakoot"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1122.396,1826.984 c 13.029,-22.229 48.701,-18.572 60.141,-42.157 5.307,-10.967 16.627,-15.86 20.695,-29.304 1.945,-6.368 8.963,-34.08 -4.423,-34.729 -10.612,-0.531 -7.311,9.729 -14.799,-1.944 -3.185,-5.014 -7.192,-9.611 -12.146,-12.973 -10.438,-7.135 -23.408,-7.253 -35.613,-7.253 -25.059,0.06 -63.146,-2.594 -75.883,-28.95 -4.188,-8.607 4.479,-11.144 7.724,-17.569 7.134,-14.27 -36.319,-10.495 -45.047,-11.145 -12.5,-0.942 -22.818,10.672 -32.193,19.575 -8.372,7.9 1.828,18.277 6.368,25.647 7.193,11.676 7.312,25.178 -1.415,36.084 -4.187,5.189 -9.609,9.316 -15.448,12.561 -8.489,4.717 -6.897,6.839 -8.666,16.155 -3.066,15.92 -7.193,17.982 -19.398,27.712 -7.253,5.777 -10.908,36.262 -2.005,39.21 0.118,-7.018 11.732,-11.203 16.804,-13.148 9.611,-3.656 22.7,-10.437 23.408,2.182 1.12,18.455 23.88,44.458 41.627,51.062 3.302,19.575 -16.097,20.577 -24.646,33.254 -7.725,11.498 8.963,11.085 -0.53,22.583 -7.37,2.83 -20.165,8.727 -21.58,17.1 5.66,0.647 11.321,0.767 17.04,0.295 7.487,1.297 10.317,-1.476 8.432,-8.196 2.358,-8.549 11.97,-12.912 20.165,-10.259 15.271,4.894 0.885,29.599 12.265,30.365 12.854,0.885 12.912,-15.153 11.793,-23.938 -0.648,-5.188 -1.828,-10.495 -3.773,-15.389 6.189,-4.718 18.042,-7.253 21.814,1.944 7.961,-17.453 12.323,-12.027 20.048,1.592 5.777,10.143 23.23,4.718 32.37,5.603 -1.533,-11.203 -17.453,-19.87 5.837,-19.634 -12.327,-15.982 -20.286,-46.996 -8.966,-66.336"
            id="Banda"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 948.695,1783.235 c 3.597,-7.665 13.385,-8.373 18.219,-15.271 3.185,-4.54 3.773,-11.91 4.776,-17.099 1.769,-9.316 0.177,-11.38 8.667,-16.155 7.547,-4.187 14.682,-9.965 18.809,-17.688 9.67,-17.807 -4.009,-30.541 -10.907,-45.932 -5.366,-11.969 19.518,-23.525 25.768,-31.072 -16.393,-2.005 -27.948,-8.078 -37.678,-21.757 -4.362,12.205 -7.96,19.28 -18.396,7.134 -6.19,-7.252 -9.67,-16.744 -12.205,-25.824 -3.125,-11.262 0.413,-19.398 -11.969,-19.87 -12.854,-0.472 -25.06,-5.188 -33.49,-15.094 -2.771,5.542 -7.96,3.654 -13.68,3.772 2.83,16.45 9.197,36.379 0.235,52.063 -13.208,23.111 -30.955,12.264 -49.882,6.661 -10.26,-3.007 -21.167,-3.064 -31.78,-2.771 -5.364,0.176 -10.79,0.294 -16.154,0.412 -13.091,0.118 -7.136,5.896 -8.728,16.805 -1.944,13.502 -38.974,22.347 -52.182,20.343 -0.412,12.911 -2.358,25.646 -2.299,38.618 0.059,8.608 0.354,17.218 0.117,25.768 -0.295,12.382 1.827,8.255 12.205,11.732 27.417,9.08 52.771,21.935 82.547,14.622 29.127,-7.134 42.512,-17.982 70.459,0.943 17.807,12.088 42.274,35.613 34.729,59.67 7.312,0.294 14.682,1.71 21.698,3.832 -1.709,-10.611 -3.596,-23.7 1.121,-33.842"
            id="Hamirpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 923.93,1789.957 c -12.913,-29.304 -49.352,-57.134 -81.721,-45.047 -20.342,7.605 -38.03,12.027 -59.905,7.9 -19.692,-3.715 -37.027,-14.857 -56.722,-18.043 -1.238,17.1 -11.851,26.945 -16.804,42.395 -3.773,11.793 -22.523,8.727 -19.34,27.005 2.535,14.387 28.36,10.142 29.717,22.7 1.65,15.447 20.342,10.967 31.132,11.91 2.948,17.04 -66.98,64.209 -19.693,71.756 1.651,-8.608 -8.077,-19.693 2.891,-25.294 10.377,-5.308 22.522,1.002 33.312,0.589 -0.826,-7.193 1.062,-20.282 11.438,-14.445 3.949,2.24 6.957,6.073 8.962,10.083 3.832,7.665 8.785,5.896 17.274,6.25 16.451,0.648 32.901,-0.295 49.292,-1.003 11.558,-0.529 7.726,-5.365 8.078,-15.564 0.708,-18.811 1.828,-29.54 20.695,-23.998 15.92,4.658 45.4,-15.624 34.729,-33.49 13.27,-2.242 12.09,-11.322 6.665,-23.704"
            id="Mahoba"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 187, 161)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 707.483,1783.589 c 1.354,-13.089 11.497,-22.287 15.684,-34.257 6.19,-17.57 2.3,-38.974 2.771,-57.252 0.354,-14.27 9.729,-29.068 -7.074,-31.662 -18.81,-2.889 -38.737,-0.767 -57.135,-4.363 -23.879,-4.717 -17.629,-36.556 -36.557,-43.101 -13.147,-4.54 -29.009,2.417 -39.739,-8.255 -7.665,5.012 -18.455,33.902 -19.812,43.572 -5.13,-4.718 -10.908,-5.72 -13.207,1.828 -2.477,8.019 2.594,19.104 -6.486,19.869 -0.529,11.853 14.978,19.398 13.09,31.428 -2.652,17.394 -28.479,6.957 -38.855,15.33 -14.209,11.438 -27.181,11.438 -44.812,9.021 -13.915,-1.946 -34.314,-5.188 -36.851,13.443 -1.475,11.084 5.896,27.122 -10.26,23.938 -23.29,-4.599 -19.104,12.736 -20.165,30.13 -0.648,10.495 -2.005,21.935 1.533,32.075 1.887,5.425 5.72,9.847 11.675,10.79 7.781,1.238 10.259,11.203 12.087,19.517 18.573,1.355 35.082,2.005 52.947,-4.067 -0.235,-17.453 -4.423,-31.662 -23.585,-33.373 -8.313,-0.707 -28.42,-7.252 -10.26,-11.91 19.223,-4.895 18.75,-27.771 37.678,-32.192 12.382,-2.948 18.689,4.009 20.342,15.802 1.354,9.61 21.639,11.675 26.061,0.825 1.828,-4.54 2.24,-9.847 2.713,-14.622 15.095,1.77 15.39,-0.473 15.919,-14.27 0.413,-10.908 8.668,-6.957 16.863,-13.148 6.84,-5.13 12.735,-11.438 20.872,-14.682 7.312,11.91 -7.488,18.75 -8.254,29.835 -0.826,12.028 10.436,20.932 10.79,32.724 -9.847,0.413 -22.288,0.473 -30.071,7.547 -13.207,11.971 -3.419,22.111 7.371,29.306 2.476,-10.201 -0.885,-19.752 11.615,-20.99 12.439,-1.298 10.022,7.547 7.724,16.687 -1.769,7.017 -6.604,11.852 -13.03,14.918 -2.652,7.842 -0.708,19.104 9.258,11.024 7.017,-5.72 4.717,-8.373 14.269,-12.323 5.248,-2.182 14.8,-5.837 17.925,1.651 2.122,5.13 -1.475,10.495 0.06,15.685 2.062,7.017 8.668,3.949 7.017,14.149 8.432,0.354 15.095,-5.483 23.349,-6.072 9.553,-0.767 18.516,5.66 27.771,7.075 14.504,2.3 17.452,-2.652 16.509,-16.333 6.427,-0.647 6.073,-8.137 5.366,-12.794 -3.189,-19.225 -28.189,-59.201 6.894,-62.503"
            id="Jhansi"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 433.31,1855.699 c 0.117,2.595 0.178,5.13 0.295,7.724 -9.729,-2.062 -13.267,4.188 -17.63,11.38 -1.77,2.89 -4.067,5.603 -7.605,6.25 -7.37,1.297 -4.658,6.485 -5.07,13.797 -1.18,20.225 -24.41,58.254 -50.234,51.77 -1.946,18.927 16.804,44.811 22.994,62.146 3.832,10.673 7.843,22.761 6.428,34.257 -1.415,11.615 -15.33,13.385 -14.8,22.405 0.885,14.683 18.22,12.028 28.007,16.863 12.677,6.25 12.322,21.285 10.79,33.313 -0.886,6.722 -2.24,13.324 -2.948,20.047 -1.179,11.32 4.48,9.788 14.977,11.201 12.735,1.651 8.02,-10.259 11.085,-19.457 2.712,-8.137 8.255,-14.269 15.271,-19.045 3.656,19.518 30.66,8.196 38.974,24.41 7.312,14.271 3.715,37.266 24.705,39.801 -4.127,-24.058 31.545,-16.273 30.13,2.771 15.507,-4.479 26.415,-17.688 40.919,-24.115 13.208,-5.837 4.776,-27.062 21.346,-35.082 -5.426,-6.545 -9.729,-14.209 -16.273,-19.811 -4.896,-4.188 -19.045,-7.37 -9.906,-16.038 2.713,-2.182 5.838,-2.948 9.316,-2.301 0.825,-5.246 1.533,-10.493 2.062,-15.741 0.295,-9.198 -4.422,-12.265 -9.67,-18.516 -6.309,-7.547 -2.239,-10.849 -15.151,-7.842 -8.668,2.063 -16.981,5.66 -26.003,5.778 -12.5,0.235 -6.31,-14.622 -4.6,-23.35 2.535,-12.972 6.191,-25.942 6.604,-39.21 0.708,-21.934 -7.605,-20.636 -23.407,-27.889 -11.91,-5.483 -9.198,-22.169 -8.728,-32.604 0.53,-11.32 2.063,-24.058 -1.592,-35.023 -1.237,-3.832 -3.538,-7.488 -7.605,-8.785 -2.24,-0.647 -4.54,-0.647 -6.78,-0.177 -3.185,-7.135 -2.89,-15.39 -3.007,-22.995 -17.812,6.073 -34.32,5.425 -52.894,4.068"
            id="Lalitpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 619.63,1611.362 c 19.518,5.012 16.45,25.646 29.54,38.441 9.198,8.964 22.643,6.723 34.257,6.958 14.683,0.295 30.308,1.827 44.634,5.07 13.562,2.062 24.41,-3.832 36.615,-8.55 8.903,-3.419 13.975,-0.354 15.625,-11.792 1.592,-10.908 -4.363,-16.688 8.728,-16.805 15.859,-0.117 32.429,-2.182 47.936,2.358 11.144,3.302 22.052,12.146 34.08,7.075 20.46,-8.667 31.309,-64.917 7.783,-65.86 -33.138,-1.355 -38.976,-28.597 -63.915,-43.042 -19.162,-11.144 -39.563,-25.412 -40.212,-48.467 -19.339,-1.592 -38.384,-5.602 -57.252,-9.847 -8.845,-2.005 -17.688,-4.187 -26.65,-5.542 -6.19,-0.886 -18.455,2.889 -16.332,-5.188 -12.028,0.177 -25.708,-5.307 -26.415,8.49 -0.59,10.79 -2.89,21.345 -3.597,32.134 -0.885,13.738 -5.425,4.246 -13.208,12.441 -4.245,4.48 -4.48,10.729 -7.134,15.979 -3.656,7.135 -7.783,1.651 -9.67,11.615 -1.828,9.552 1.769,18.22 -5.248,25 -11.97,11.557 -9.315,33.432 -23.82,42.865 10.081,10.028 22.168,3.542 34.255,6.667"
            id="Jalaun"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 709.252,1407.473 c 3.42,-28.007 18.455,-52.594 23.82,-80.069 1.355,-6.957 1.475,-13.915 2.3,-20.872 0.884,-7.548 -4.776,-4.481 -10.79,-6.958 -5.012,-2.063 -8.962,-5.66 -12.323,-9.847 -6.84,2.418 -12.439,2.24 -18.927,-1.12 -10.142,-5.247 -17.512,-9.729 -28.537,-3.303 -10.79,6.311 -19.28,15.153 -32.9,12.028 -11.202,-2.595 -23.112,-10.318 -34.729,-4.953 -14.918,6.898 -20.165,-4.422 -34.257,-2.594 4.599,1.533 6.484,0.177 5.601,-4.188 -11.851,2.653 -27.534,4.54 -21.401,18.338 2.83,6.427 25.116,30.602 25.059,30.777 5.13,3.655 9.965,7.725 15.035,11.497 -1.356,8.196 4.835,12.677 11.675,15.035 10.259,3.538 23.525,4.128 25.589,17.217 2.3,14.564 -0.825,26.297 7.193,39.918 3.243,5.542 7.017,10.789 10.142,16.45 6.19,11.38 0.943,21.697 14.978,21.344 8.312,-0.177 16.979,4.068 19.044,-5.542 1.415,-6.545 2.182,-13.267 3.833,-19.812 3.828,-14.738 14.853,-21.224 29.595,-23.346"
            id="Etawah"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 782.836,1464.488 c 10.143,-20.283 10.908,-46.344 21.816,-65.801 1.649,-3.186 4.186,-5.248 7.604,-6.311 1.77,-5.778 2.358,-11.615 3.302,-17.512 2.006,-13.148 11.91,-18.928 23.468,-23.525 -1.356,-6.25 -18.81,-20.283 -24.352,-25.059 -7.076,-6.073 -15.153,-6.958 -24.057,-8.078 -14.74,-1.945 -26.297,-9.729 -40.33,-13.62 -20.4,-5.603 -14.15,6.781 -17.275,22.877 -2.89,14.858 -8.668,28.832 -13.915,42.983 -4.422,11.97 -5.366,35.494 -16.922,38.442 -25.53,6.485 -22.405,30.954 -28.833,51.296 34.08,-0.354 67.395,13.738 101.355,16.568 -0.116,-6.246 0.769,-11.611 8.139,-12.26"
            id="Auraiya"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 544.218,1296.979 c -24.114,0.943 -43.926,0.59 -64.504,-13.207 -6.897,-4.657 -16.037,-9.965 -18.278,-18.69 -2.534,-9.788 -0.411,-19.457 -10.729,-25.295 -17.04,-9.61 -37.205,3.243 -48.585,-17.983 -6.78,-12.617 -15.447,-51.236 1.003,-57.134 -12.736,-12.854 -17.688,-23.229 -38.09,-17.629 -13.62,3.772 -30.719,13.561 -35.023,28.064 -5.188,0.235 -13.029,1.71 -17.452,-2.182 -5.307,-4.717 -15.211,3.125 -22.286,5.188 -19.752,5.777 -38.148,-0.591 -57.96,-0.178 20.105,6.073 -5.483,24.587 -3.302,36.145 -23.055,-5.721 -26.475,28.832 -15.565,29.304 17.57,0.825 45.754,-1.12 49.882,21.698 -10.378,-0.531 -29.953,-3.479 -34.965,8.962 -3.715,9.198 -19.398,4.776 -29.245,4.717 -9.905,-0.059 -10.495,3.361 -19.162,7.253 -14.8,6.604 -37.027,52.477 -7.43,50.589 -2.24,-33.845 30.72,-30.542 54.835,-28.479 6.604,0.59 13.266,1.12 19.929,0.884 -0.647,-9.787 -2.123,-22.522 8.373,-22.994 6.957,-0.295 14.327,-0.708 20.99,2.004 6.839,2.83 10.377,10.79 16.804,13.208 11.438,4.305 25,-11.557 36.202,-12.913 10.317,-1.237 0.942,28.125 21.285,23.351 0.295,-8.904 3.125,-17.748 7.547,-25.413 12.795,0.53 7.665,-2.889 14.387,-10.2 8.963,-9.847 10.143,1.593 13.975,8.195 4.068,7.076 10.26,13.147 18.633,14.505 -10.674,4.245 -10.261,20.52 1.354,23.113 11.085,2.476 21.875,-2.063 32.783,-2.891 10.495,-0.824 20.4,3.243 29.894,7.075 19.812,7.96 38.148,8.137 59.257,6.84 14.563,-0.885 7.075,-9.965 23.88,-6.957 7.253,1.297 13.62,4.48 19.517,8.727 1.179,-4.363 -10.672,-8.433 -14.445,-12.854 -6.139,-7.076 -10.091,-16.038 -13.509,-24.823"
            id="Agra"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 243.572,1178.524 c 24.528,3.419 43.985,2.357 66.627,-8.373 -8.137,-12.146 -10.495,-28.065 -11.793,-42.275 -1.061,-12.205 8.963,-26.062 4.246,-37.559 -3.186,-7.665 -1.594,-17.926 -10.731,-25.235 -12.321,-9.847 -19.397,-18.22 -14.976,-34.257 4.657,-16.805 0.589,-24.882 -9.788,-37.5 -8.608,-10.438 -0.825,-27.063 -17.04,-31.014 -12.205,-2.948 -25.707,-1.828 -38.03,-0.53 -9.375,0.942 -18.75,1.827 -28.184,2.651 -11.085,1.003 -20.105,-1.769 -17.099,9.729 3.064,11.732 -16.568,22.936 -20.343,33.726 -4.54,12.913 -2.182,27.123 1.355,39.917 3.892,14.151 9.67,27.653 14.387,41.51 3.715,10.968 2.831,25.942 8.078,35.85 9.788,18.277 55.777,10.672 59.669,30.188 1.771,8.903 -16.332,5.721 -16.509,8.964 -0.941,14.974 20.639,12.852 30.131,14.208"
            id="Mathura"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 257.369,965.555 c 8.903,7.665 3.833,22.287 13.621,31.839 9.669,9.435 9.374,21.108 5.955,33.433 -7.018,25.117 19.691,30.129 24.646,51.886 17.335,-18.277 37.794,-13.679 41.392,-41.627 2.829,-21.992 14.092,-44.221 40.095,-28.832 9.492,5.602 10.022,17.04 14.269,26.12 7.135,15.33 22.464,21.167 38.325,23.349 6.78,-13.915 22.464,-14.444 23.467,-32.487 0.354,-6.485 -0.354,-12.972 0.294,-19.457 8.433,-3.773 17.926,-5.602 27.183,-4.423 0.177,-12.734 -1.888,-28.832 12.087,-34.491 12.854,-5.248 2.536,-25.531 12.913,-24.766 -4.306,-6.189 -9.493,-11.969 -16.215,-15.507 -3.537,-1.887 -7.312,-3.007 -11.32,-3.479 -10.554,-1.297 -6.427,-3.892 -7.37,-13.502 -17.453,6.957 -23.467,9.14 -41.45,2.771 -16.392,-5.778 -31.78,2.713 -47.817,5.13 -15.979,2.418 -28.537,-9.315 -43.69,-12.972 -17.217,-4.187 -35.436,-8.549 -53.301,-6.957 -14.858,1.297 -21.757,11.497 -36.91,10.2 -9.257,-0.768 -17.982,-3.773 -26.944,-5.896 -5.778,-1.415 -12.028,-3.242 -17.983,-3.42 -9.552,-0.294 -6.958,9.316 -6.663,15.625 0.236,5.543 -2.535,10.495 -1.12,16.097 1.356,5.543 5.483,9.67 4.776,15.686 -0.59,5.012 -4.01,11.851 3.597,12.264 9.021,0.412 17.452,-2.477 26.297,-3.243 7.126,-0.535 16.442,1.942 21.866,6.659"
            id="Aligarh"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 232.665,909.305 c 6.427,-1.887 17.924,3.303 26.886,2.596 19.931,-1.651 12.736,-15.448 4.129,-26.533 -16.981,-21.757 -28.655,-54.657 -31.841,-82.369 -1.415,-12.266 -0.354,-25.825 0.591,-38.09 -7.43,-3.185 -8.551,1.237 -9.493,-7.487 -0.473,-4.423 -2.653,-8.255 -6.25,-10.908 -7.252,-5.482 -17.334,-6.309 -26.062,-7.37 -19.812,-2.477 -35.377,-25.472 -57.192,-14.562 -13.68,6.839 17.688,20.99 1.003,30.012 12.795,7.725 9.08,23.879 12.264,36.497 3.42,13.502 14.918,22.641 22.583,33.726 2.771,4.011 5.424,8.138 8.019,12.323 6.19,9.965 12.028,20.4 16.393,31.25 2.122,5.308 4.009,10.79 5.188,16.332 0.53,2.478 0.825,5.013 0.825,7.547 0.06,2.83 -0.825,6.191 -0.413,8.964 0.236,1.649 1.003,2.889 0.768,4.717 9.194,-5.489 24.347,-2.187 32.602,3.355"
            id="Gautam_Buddha_Nagar"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 156.604,676.701 c 7.604,1.002 13.561,6.84 20.047,10.259 1.532,-12.854 -2.241,-28.772 11.969,-35.672 10.083,-4.952 2.653,-18.337 1.946,-29.952 -1.003,-15.33 -5.955,-57.547 13.737,-63.974 -8.963,-10.555 -16.862,-15.742 -30.896,-12.794 -17.865,3.772 -25.767,-10.674 -40.33,-17.04 -13.62,-5.955 -29.479,-6.368 -43.337,-1.062 4.068,19.87 5.071,40.152 5.778,60.317 0.59,17.158 0.885,33.667 5.66,50.295 0.295,1.061 3.833,15.035 4.718,14.857 3.064,-0.648 8.137,8.785 8.077,11.025 -0.118,5.425 -13.268,4.127 1.827,10.438 1.241,13.622 32.254,2.183 40.804,3.303"
            id="Baghpat"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 370.753,615.558 c 11.438,-0.234 10.142,-18.809 10.672,-28.597 0.768,-14.504 5.13,-25.412 -8.667,-29.952 -15.565,-5.069 -24.057,-6.368 -38.915,1.71 -12.323,6.662 -24.232,7.312 -37.971,7.605 -26.533,0.59 -34.14,-25.06 -62.912,-17.039 -25.942,7.252 -39.8,8.254 -42.217,37.912 -1.71,20.872 -4.658,54.894 11.202,71.696 8.02,8.49 20.105,10.318 31.19,11.438 12.322,1.298 25.235,-1.887 25.648,12.5 0.707,22.523 15.979,41.568 33.844,15.86 18.926,-27.122 51.473,-15.035 80.482,-17.982 -8.253,-21.696 -7.309,-42.688 -2.356,-65.151"
            id="Meerut"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 403.3,774.577 c 5.07,12.913 11.085,25.177 19.987,35.908 2.241,2.712 33.196,-2.536 42.217,0.707 1.592,-14.8 7.842,-28.185 9.436,-42.63 1.769,-16.037 -2.714,-31.897 -2.596,-47.937 0.118,-17.629 43.867,-3.242 57.017,-15.152 9.14,-8.255 1.65,-22.642 11.025,-31.604 6.662,-6.368 20.047,-8.728 20.813,-19.93 0.647,-9.729 -9.493,-18.042 -12.146,-27.063 -3.359,-11.438 0.236,-24.056 -6.25,-34.905 -2.477,-4.186 -6.427,-6.722 -11.38,-6.661 -9.197,0 -5.601,6.189 -6.427,13.266 -1.532,12.323 -5.602,13.915 -16.391,16.215 -37.913,8.195 -67.983,9.434 -106.427,3.42 -8.432,-1.297 -16.923,-2.417 -25.472,-2.653 -9.965,-0.295 -7.96,8.551 -9.14,16.863 -2.358,16.509 -0.354,32.724 5.543,48.289 5.424,14.446 12.616,28.007 16.036,43.103 2.006,8.784 3.125,17.807 3.656,26.826 0.709,11.438 6.371,13.384 10.499,23.938"
            id="Amroha"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 460.137,887.312 c -12.5,-10.968 -26.062,-17.926 -42.452,-20.99 -0.885,-18.516 1.062,-33.078 6.19,-49.587 2.477,-8.078 -16.509,-31.841 -20.519,-42.158 -6.25,-15.919 -18.69,-17.452 -31.662,-26.297 -10.495,-7.134 -42.57,-36.852 -52.89,-15.802 -5.07,10.317 2.122,16.687 -11.909,17.217 -12.265,0.472 -12.441,4.717 -21.875,10.317 -16.214,9.611 -35.437,3.42 -52.122,-0.412 -3.479,29.423 3.007,50.942 9.434,78.892 2.83,12.264 4.601,24.351 12.088,34.904 7.135,10.023 18.22,19.753 20.047,32.548 18.102,-10.023 44.104,-3.186 62.912,1.12 19.339,4.422 35.672,18.102 55.719,13.385 9.787,-2.3 19.398,-6.016 29.6,-6.073 10.495,-0.06 19.104,6.014 29.245,7.252 8.784,1.12 17.039,-4.894 24.764,-7.96 -1.18,-11.792 -8.02,-18.867 -16.57,-26.356"
            id="Bulandshahr"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 752.942,964.198 c -0.707,5.66 -0.825,11.319 -0.473,17.04 3.598,1.769 8.373,5.069 6.841,9.847 -2.478,7.782 -12.383,10.729 -17.865,15.802 -8.963,8.195 -9.493,22.348 -21.936,27.358 -0.942,8.372 -2.122,16.804 -1.531,25.235 6.957,3.007 14.799,5.188 20.871,9.965 16.628,13.029 32.488,24.056 55.483,22.699 11.202,-0.647 18.102,-11.793 29.834,-5.777 11.97,6.132 14.092,21.757 14.563,33.667 3.42,-12.5 0.177,-25.707 -1.827,-38.148 -1.298,-8.255 -2.3,-16.687 -1.533,-25.059 6.78,-0.295 13.915,-1.062 20.519,1.12 8.962,2.947 9.375,9.61 14.388,16.154 11.024,14.563 13.561,-9.491 15.859,-15.859 3.716,-10.26 28.95,-6.191 39.622,-7.018 16.922,-1.355 5.603,-19.161 -0.117,-29.656 -14.093,-25.943 4.187,-41.273 26.475,-52.594 -3.186,2.299 -4.54,5.424 -4.128,9.314 4.775,-10.73 25.647,-16.45 35.555,-20.637 1.355,-19.752 -3.774,-31.604 17.039,-41.155 25.708,-11.733 23.231,-60.436 11.911,-81.367 -8.491,-15.684 -21.875,-17.334 -33.845,-4.479 -13.325,14.327 -18.985,8.607 -35.555,7.429 -46.167,-3.42 -42.982,63.089 -41.804,91.921 -22.229,4.658 -19.104,-27.476 -34.08,-28.124 -9.964,-0.413 -25.177,5.542 -32.429,0 -5.013,-3.833 -13.386,-9.435 -19.87,-5.307 -11.262,7.192 -9.552,30.66 -10.377,41.979 -0.531,7.547 -20.106,5.425 -27.83,10.613 -8.548,5.721 -14.621,9.789 -23.76,15.037"
            id="Shahjahanpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 888.908,1052.405 c -3.95,6.78 -3.479,26.237 -12.323,25.472 -8.727,-0.767 -8.785,-12.323 -14.74,-16.805 -5.602,-4.187 -12.618,-4.6 -19.34,-4.422 -11.497,0.295 -7.842,7.547 -6.722,17.157 1.71,15.152 7.135,31.132 2.948,46.284 0.472,12.382 5.72,90.39 -3.715,92.1 9.492,14.269 17.57,25.295 35.73,28.359 17.63,3.007 29.363,7.018 39.682,22.877 3.36,5.188 5.66,10.908 6.662,16.981 2.063,12.559 -1.649,12.854 11.615,14.857 9.906,-4.305 20.755,-5.07 31.427,-4.952 11.262,0.117 21.993,4.717 25.118,-5.896 8.254,-28.124 45.872,19.635 61.851,15.686 7.37,-1.828 4.895,-7.312 9.315,-12.441 5.012,-5.778 12.913,-7.9 20.225,-8.432 9.61,-0.707 13.502,-8.256 23.584,-9.258 9.611,-0.942 17.748,-1.062 24.353,-8.962 3.479,-4.187 6.484,-9.198 11.792,-11.438 6.19,-2.595 20.46,1.061 21.167,-6.368 1.475,-14.505 -20.164,-20.165 -29.657,-25.59 -13.679,-7.9 -27.771,-13.207 -43.455,-15.33 -10.436,-1.414 -20.872,2.359 -21.874,-9.139 -0.767,-8.903 -3.773,-17.453 -7.843,-25.354 -7.37,-14.387 -17.924,-26.828 -26.945,-40.153 -5.424,-7.96 -10.259,-16.332 -13.562,-25.472 -3.892,-10.729 -0.412,-21.756 -9.905,-27.947 -15.742,-10.26 -28.36,-21.285 -47.877,-23.407 -22.347,-2.476 -44.929,3.244 -67.511,1.593"
            id="Hardoi"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1017.621,1110.069 c 7.842,16.687 20.342,30.659 30.365,46.049 4.895,7.487 9.315,15.448 12.027,23.998 3.42,10.79 -1.887,19.517 10.79,20.694 16.863,1.593 97.7,18.928 85.73,46.345 5.66,0.06 11.262,0.295 16.922,0.708 11.321,0.766 7.192,-2.064 9.375,-11.498 1.651,-7.075 4.835,-14.15 11.793,-17.275 7.016,-3.125 15.447,-2.771 22.936,-2.89 11.676,-0.235 12.973,-11.675 27.89,-7.665 19.812,5.307 33.55,6.958 36.498,-16.332 3.184,-25.06 31.25,9.139 37.617,17.453 0.295,-5.603 1.532,-11.026 3.715,-16.216 -5.131,-3.654 -7.665,-9.493 -7.901,-15.565 -0.354,-8.785 -7.429,-11.732 -9.787,-20.99 -4.128,-16.332 1.71,-36.792 -7.192,-51.709 -5.778,-9.729 -15.979,-15.92 -19.398,-27.182 -3.302,-10.908 -0.885,-28.715 -12.618,-33.313 -21.58,-8.431 -45.519,-26.002 -69.869,-21.697 -9.847,1.77 -15.507,8.02 -22.995,13.68 -9.021,6.78 -22.052,4.775 -32.429,3.36 -13.267,-1.828 -26.533,-5.012 -39.977,-3.772 0.472,9.314 -8.608,15.919 -17.218,16.096 -10.672,0.236 -13.679,-9.61 -19.987,-16.037 -5.602,-5.66 -18.455,5.603 -25.53,8.667 -28.482,12.379 -33.611,37.793 -20.757,65.091"
            id="Sitapur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1390.2,1294.619 c 3.833,9.375 11.144,14.977 21.402,18.455 9.257,3.125 8.373,6.428 16.155,12.383 10.731,8.195 28.655,13.325 34.198,26.709 14.149,-1.355 25,11.026 39.149,6.25 18.455,-6.25 37.205,-25.472 55.543,-7.252 2.595,-15.153 -0.061,-30.012 16.862,-33.903 13.443,-3.125 27.417,-1.769 41.097,-2.182 15.979,-0.472 28.242,-9.315 41.567,-16.979 3.892,-8.491 1.592,-17.218 -1.355,-25.473 6.132,-2.24 12.56,-3.479 18.927,-4.54 -4.895,-16.687 -14.563,-30.425 -33.077,-32.724 -13.915,-1.71 -10.022,0.707 -13.502,11.792 -2.418,7.665 -7.665,14.505 -15.33,17.512 -19.104,7.604 -24.47,-10.731 -39.562,-16.863 -17.158,-6.957 -32.548,-21.698 -9.08,-36.438 -13.562,-10.259 -15.507,-29.657 -32.783,-36.084 -7.312,-2.713 -15.389,-1.416 -22.7,-4.068 -11.202,-4.128 -20.577,-13.031 -33.194,-13.031 -1.12,15.035 2.712,31.25 -3.007,45.695 -8.196,20.695 -26.12,-1.179 -34.375,-8.728 -15.271,-14.031 -42.807,-1.119 -35.082,19.693 11.144,29.953 -39.15,42.04 -48.584,63.915 15.564,0.649 29.833,-0.884 36.731,15.861"
            id="Gonda"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1654.88,1272.568 c 6.25,17.569 3.302,24.587 -12.087,33.489 -11.085,6.428 -21.816,9.021 -34.611,9.08 -11.496,0 -23.289,-0.53 -34.609,2.122 -15.153,3.538 -12.912,11.675 -15.39,25.354 -2.89,15.92 21.698,45.342 37.499,51.237 16.511,6.19 36.733,10.082 46.346,27.357 11.144,-11.438 31.071,-3.714 41.566,6.073 11.146,10.377 31.898,6.31 45.933,8.489 7.782,1.238 15.271,3.598 22.347,7.076 7.665,3.773 6.014,-0.412 11.792,-5.425 8.195,-7.192 20.283,-12.854 24.587,-23.524 6.132,-15.508 -9.375,-21.228 -19.222,-28.36 -10.082,-7.253 -16.155,-26.887 -15.742,-39.033 0.412,-12.323 12.677,-14.149 22.759,-13.797 3.655,-13.267 -4.774,-33.372 11.085,-40.625 -9.257,-6.485 -20.224,-10.318 -30.955,-13.502 -13.384,-4.01 -22.642,-15.802 -35.612,-20.578 -11.025,-4.067 -18.81,2.83 -28.597,6.486 -11.972,4.425 -25.122,3.777 -37.089,8.081"
            id="Basti"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1814.489,1288.37 c -27.3,-1.003 -37.441,6.367 -37.56,32.959 -0.06,15.685 -5.248,8.373 -16.51,13.503 -8.55,3.891 -7.96,13.62 -6.132,21.344 2.3,9.848 5.955,23.113 14.563,29.363 9.079,6.544 21.814,10.259 20.342,23.997 -1.887,17.217 -24.646,21.875 -32.193,35.612 20.99,8.727 43.337,10.968 61.438,26.062 -1.12,-22.052 5.188,-43.632 1.649,-65.624 -1.236,-7.842 0.236,-11.203 7.312,-15.271 10.73,-6.132 7.135,-17.394 3.597,-26.944 -3.537,-9.611 -7.488,-17.865 2.24,-22.995 9.258,-4.835 9.021,-24.057 8.785,-35.023 -0.232,-11.794 -15.562,-42.218 -27.531,-16.983"
            id="Sant_Kabir_Nagar"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1840.668,1289.962 c 3.537,9.435 1.355,22.229 -0.059,31.839 -0.943,5.426 -1.533,10.908 -1.711,16.393 -7.664,1.18 -12.44,3.242 -11.615,11.496 1.062,11.026 9.906,21.759 6.897,33.078 -2.182,8.433 -15.212,8.195 -14.681,17.747 1.297,23.645 -2.241,47.052 -1.003,70.638 7.312,6.072 0.767,16.392 10.26,17.864 10.022,1.593 20.047,3.479 30.012,5.365 16.98,3.185 34.256,5.603 49.114,15.212 11.026,7.135 14.858,20.813 27.241,19.753 10.2,-0.885 26.944,0.177 33.901,9.14 12.854,16.509 27.948,-0.473 19.812,-15.685 -8.845,-16.392 -21.875,-27.595 -39.858,-32.429 -9.609,-2.595 -12.323,-2.005 -15.507,-12.736 -2.535,-8.667 -2.3,-19.634 5.778,-25.412 12.323,-8.784 30.837,0.178 33.549,-19.162 3.007,-21.403 -7.9,-40.86 -8.962,-61.909 -0.354,-7.726 1.533,-38.268 -11.497,-37.913 -5.013,-13.737 -31.25,-20.813 -43.515,-24.94 -20.695,-6.957 -20.282,-15.094 -20.695,-35.259 -13.502,-1.12 -26.827,-4.128 -40.507,-3.597 -4.835,0.177 -13.443,0.59 -15.625,6.071 -2.886,7.193 6.723,9.257 8.671,14.446"
            id="Gorakhpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1964.959,1535.124 c -11.615,-6.249 -25.059,-7.134 -37.794,-4.599 4.717,9.965 4.479,21.167 0.235,31.309 -5.778,13.797 -17.158,2.3 -16.568,18.337 0.472,14.21 -8.785,8.785 -17.747,14.683 -8.727,5.72 -11.203,16.51 -11.733,26.237 -0.767,14.15 7.783,10.438 7.017,23.468 -0.767,13.561 2.3,22.759 4.6,35.611 17.04,3.715 9.965,-3.125 19.28,-11.084 7.605,-6.485 19.34,-7.371 28.832,-8.137 9.67,-0.767 19.34,-1.77 28.95,0.354 11.793,2.595 23.88,8.49 36.203,6.25 5.307,-16.037 30.306,-42.039 -1.238,-47.404 -19.281,-3.303 -6.015,-25.825 7.016,-29.188 7.431,-1.944 10.613,-8.137 15.095,-14.092 5.955,-7.842 13.916,-8.02 23.291,-8.608 -5.071,-17.452 -17.453,-43.159 -39.858,-38.736 -11.497,2.239 -14.563,9.729 -23.054,15.564 -11.325,7.665 -14.922,-5.896 -22.527,-9.965"
            id="Mau"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1888.486,1635.595 c -17.396,-2.946 -4.601,-40.683 10.729,-42.747 12.265,-1.649 11.853,-7.074 11.38,-17.864 -0.295,-6.132 7.9,-6.428 13.207,-6.073 3.715,-6.19 6.428,-13.148 6.898,-20.46 3.243,-49.527 -72.229,-55.188 -106.721,-60.081 0.707,10.318 -0.117,20.636 -1.062,30.896 -1.238,14.15 -17.335,5.483 -27.063,1.181 -8.255,-3.656 -16.155,-8.137 -24.822,-10.791 -17.04,-5.247 -19.635,-1.12 -19.162,15.508 0.354,11.145 1.415,22.229 0.412,33.372 -8.785,0.354 -17.688,-0.825 -23.997,-7.547 -11.32,-12.146 -24.587,-34.552 -43.75,-20.46 13.738,16.979 18.81,43.927 25.942,64.268 3.893,11.085 24.115,66.45 7.726,67.57 7.664,12.146 4.127,17.453 20.224,21.934 20.105,5.661 42.747,14.623 61.438,23.762 15.625,7.606 12.854,29.718 35.26,17.396 10.967,-6.015 30.601,-22.701 14.799,-32.726 9.198,-12.5 30.308,-6.014 43.16,-6.484 0.885,-6.132 -1.887,-11.792 -3.655,-17.453 -3.301,-10.913 -0.353,-22.058 -0.943,-33.201"
            id="Azamgarh"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1724.042,1755.347 c -0.59,5.542 2.712,14.74 -1.12,19.518 -6.958,8.667 -17.158,-3.186 -19.517,14.032 -0.708,4.894 0.825,18.515 -5.896,18.396 4.068,13.854 0.768,26.474 -6.014,38.797 10.967,7.017 22.347,2.948 33.784,6.957 11.438,4.068 12.088,16.688 21.815,21.993 11.438,6.25 22.348,-5.838 31.015,-11.38 13.68,-8.785 25.59,2.3 39.505,-2.183 -1.238,-7.369 -6.899,-13.207 -6.958,-20.871 10.672,1.002 6.897,-4.953 11.203,-11.734 3.832,-6.072 10.436,-7.724 16.332,-11.084 16.567,-9.316 11.024,-23.526 -0.53,-32.901 -4.128,-3.359 -7.724,-7.429 -8.019,-13.089 -10.731,1.887 -12.854,-4.187 -19.518,-10.79 -28.773,0.411 -57.192,-6.723 -86.082,-5.661"
            id="Varanasi"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1697.509,1807.292 c -8.845,-0.177 -14.327,-4.896 -19.692,-11.262 -8.433,-9.906 -17.335,-14.505 -29.895,-17.63 -20.99,-5.248 -55.542,-11.676 -68.809,-29.775 -1.297,14.504 -1.414,25.589 8.078,37.146 3.184,3.892 6.897,8.255 7.312,13.502 0.767,9.079 -6.25,4.305 -10.613,9.61 -5.837,7.075 -2.005,16.862 -10.554,23.407 -14.033,10.672 -7.371,16.687 6.014,20.812 14.506,4.424 27.006,-2.417 40.921,0.943 13.029,3.125 23.229,2.713 36.556,1.888 8.312,-0.53 22.642,2.947 29.658,-3.008 12.025,-10.256 15.15,-31.423 11.024,-45.633"
            id="Bhadohi"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1793.911,1705.818 c -20.872,-6.25 -40.86,-16.098 -61.497,-23.29 -13.855,-4.835 -7.488,-20.872 -21.875,-19.398 -22.052,2.241 -36.969,-1.944 -49.527,-20.872 -10.85,-16.332 -20.46,-27.477 -40.859,-30.188 0.354,12.913 -20.637,-5.721 -21.346,11.262 -0.766,19.28 -5.482,11.085 -20.224,16.745 -13.562,5.248 -15.448,38.442 -23.172,50.177 -5.778,8.844 -10.377,17.629 -10.849,28.36 -17.101,8.844 -3.773,16.155 8.432,14.149 15.507,-2.594 21.402,11.203 30.012,20.933 10.142,11.438 28.419,12.205 42.039,16.979 12.087,4.246 25.707,7.018 37.265,12.383 11.438,5.308 16.392,19.517 28.42,23.289 16.45,5.131 10.142,-13.147 13.974,-23.467 4.776,-12.794 20.165,0.354 19.575,-17.275 -0.53,-16.036 11.498,-10.554 25.295,-9.375 17.275,1.476 34.434,4.188 51.769,4.776 11.675,0.354 12.56,3.302 13.502,-8.845 0.591,-7.96 1.18,-16.214 -0.354,-24.115 -2.065,-11.379 -9.495,-18.984 -20.58,-22.228"
            id="Jaunpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1544.621,1718.555 c 0.59,-13.09 7.37,-22.583 13.974,-33.312 7.193,-11.675 7.901,-24.41 12.441,-36.97 3.243,-9.08 12.087,-9.905 20.637,-10.612 10.2,-0.826 6.78,-5.483 7.193,-14.505 0.472,-11.91 11.851,-6.723 21.696,-7.018 -1.297,-6.722 -31.721,-10.79 -40.271,-15.094 -18.219,-9.198 -34.492,-11.557 -54.894,-11.085 -21.403,0.473 -42.747,3.007 -64.15,2.478 -17.924,-0.473 -38.737,5.364 -54.657,-5.543 -4.835,-3.303 -26.827,-21.462 -29.835,-12.087 -0.234,0.767 -11.32,7.959 -12.439,8.962 -5.66,5.307 -11.085,12.854 -12.5,20.577 -1.12,6.19 0.708,12.56 1.944,18.515 -8.549,2.477 -15.151,9.729 -21.285,15.684 -9.786,9.552 -21.991,15.979 -34.139,20.165 13.915,2.478 11.97,13.738 14.387,24.176 1.181,4.951 4.601,7.782 9.552,8.902 1.711,9.434 -4.067,17.57 -4.067,26.827 14.092,-1.238 25.885,9.847 38.797,13.443 12.265,3.42 29.304,4.422 41.272,-1.298 17.688,-8.489 12.618,-46.107 39.858,-41.567 24.822,4.127 51.474,1.18 71.461,18.868 5.896,5.188 10.261,13.089 14.918,19.339 7.548,10.2 13.621,-5.485 20.107,-8.845"
            id="Pratapgarh"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1318.09,1718.613 c 0,-6.898 3.303,-13.03 4.188,-19.752 1.475,-11.203 -7.43,-6.486 -9.669,-15.979 -3.243,-13.975 -1.889,-22.465 -19.223,-23.938 1.297,8.019 3.065,15.919 5.307,23.761 -25.885,2.359 -47.877,10.142 -33.019,40.095 5.602,11.263 10.612,21.108 8.195,33.902 -2.005,10.73 -5.896,29.658 -20.99,18.278 0.707,6.485 -1.828,10.26 -7.665,11.38 8.844,12.734 19.044,20.399 34.257,23.702 8.433,1.827 16.51,2.534 23.997,7.192 8.903,5.543 17.099,14.21 28.125,15.271 16.45,1.592 40.979,-8.962 57.487,-11.438 10.555,-1.592 49.882,6.25 55.012,-5.66 2.062,-4.835 5.188,-13.267 8.785,-16.98 5.896,-6.132 13.325,-1.77 16.804,-13.268 4.658,-15.507 -4.187,-12.205 -16.037,-13.854 -13.325,-1.828 -26.415,-5.13 -39.8,-6.722 -19.575,-2.301 -15.979,-23.35 -33.077,-27.948 -9.965,-2.712 -20.401,-2.595 -30.012,-6.78 -10.259,-4.422 -20.932,-12.264 -32.665,-11.262"
            id="Kaushambi"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1266.261,1777.28 c 20.165,-11.733 1.356,-48.054 -3.42,-60.85 -10.141,-27.182 14.741,-31.84 35.85,-33.727 -2.182,-7.842 -3.95,-15.742 -5.307,-23.761 -5.661,-0.59 -10.79,-3.186 -15.095,-6.84 -9.67,-8.195 -16.037,-22.053 -15.507,-34.787 -35.73,4.244 -49.41,-29.188 -82.192,-31.015 -17.925,-1.003 -35.377,3.479 -52.417,-4.423 -7.075,-3.302 -13.443,-8.195 -17.512,-14.917 -6.958,2.122 -11.97,-3.185 -15.212,-8.608 -5.484,-9.14 -8.433,-29.244 -21.108,-26.002 -18.573,4.775 -32.665,19.635 -50.118,27.122 -24.704,10.613 -67.511,49.765 -33.726,73.173 13.974,9.668 34.847,8.371 51.002,9.079 18.277,0.768 35.495,-0.472 19.811,17.807 -20.576,24.116 57.193,38.915 68.985,38.915 12.323,0 25.647,-0.885 37.087,4.658 7.018,3.42 12.441,9.079 16.568,15.564 8.55,13.385 8.55,-4.363 18.102,3.186 9.965,7.899 1.71,26.886 13.325,34.668 7.724,5.189 18.16,3.538 26.062,8.608 6.84,4.544 15.035,17.87 24.822,12.15"
            id="Fatehpur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1010.9,1565.431 c 21.521,-10.082 46.639,-32.192 70.459,-34.139 -13.738,-22.7 -11.263,-44.575 -33.373,-61.851 -22.287,-17.396 -23.762,-47.761 -48.349,-62.618 -23.29,-14.032 -44.87,-20.4 -43.985,-52.004 0.412,-13.975 -1.237,-24.94 -12.912,-33.727 -5.896,-4.423 -28.125,-19.752 -14.033,-25.885 -3.655,-0.53 -7.312,-1.002 -10.967,-1.354 -0.295,6.484 -5.247,6.604 -11.558,5.129 -1.179,8.078 -3.537,16.037 -6.604,23.585 -2.478,6.19 -5.542,12.204 -9.435,17.688 -1.062,1.476 -12.972,12.088 -12.972,12.5 19.752,-0.354 31.31,14.74 38.148,31.427 4.894,11.91 3.832,13.856 14.739,18.868 7.725,3.537 13.856,10.907 18.985,17.395 23.113,29.127 36.733,85.612 -12.44,92.511 -15.447,2.182 -42.394,46.697 -32.252,55.777 8.138,7.253 18.69,10.494 29.422,10.907 12.44,0.473 8.845,8.667 11.97,19.87 2.535,9.08 6.015,18.573 12.205,25.825 10.377,12.146 13.974,5.07 18.396,-7.135 7.55,-20.871 12.503,-42.391 34.556,-52.769"
            id="Kanpur_Nagar"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 919.095,1525.455 c 5.955,-11.793 15.86,-11.97 27.417,-13.503 15.39,-2.063 22.11,-17.688 23.525,-31.604 2.713,-27.122 -12.205,-54.716 -32.429,-72.228 -10.082,-8.668 -15.035,-4.718 -19.988,-18.278 -4.54,-12.382 -10.73,-25.943 -22.759,-32.842 -14.858,-8.432 -25.59,1.533 -40.86,-1.475 -14.21,-2.771 -26.415,-6.25 -35.613,10.495 -5.659,10.26 -1.414,20.933 -10.494,28.773 -8.313,7.134 -10.613,28.184 -14.445,38.384 -2.891,7.783 -4.6,15.92 -7.312,23.703 -2.83,8.077 -10.612,7.605 -11.262,15.447 -1.002,12.088 0.708,17.275 7.783,26.238 8.903,11.202 20.047,19.574 32.37,26.709 14.033,8.138 18.927,19.517 30.069,30.365 12.854,12.5 30.72,13.207 47.582,12.617 13.092,-0.584 20.816,-31.599 26.416,-42.801"
            id="Kanpur_Dehat"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 784.427,1317.32 c 8.845,1.415 18.927,1.179 26.651,6.25 10.554,6.897 16.862,18.571 27.535,25.647 30.364,19.929 53.891,-5.071 63.266,-32.842 1.887,-5.66 3.42,-11.439 4.304,-17.335 6.25,1.533 11.263,1.415 11.558,-5.13 0.767,-16.688 -4.895,-29.658 -16.45,-41.687 -10.377,-10.85 -23.82,-9.315 -37.146,-13.09 -8.02,-2.3 -28.538,-27.005 -30.72,-26.65 3.833,19.812 -24.939,16.98 -36.497,14.445 -22.17,-4.835 -39.799,-25.472 -63.797,-14.74 8.609,3.537 3.833,13.738 3.893,22.229 0.06,8.312 4.423,14.327 5.777,22.169 2.83,16.392 -17.629,28.538 -30.601,33.137 8.019,9.905 18.277,12.266 30.542,13.443 15.035,1.418 27.004,11.855 41.685,14.154"
            id="Kannauj"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 557.011,1258.477 c -8.194,-1.888 4.188,-36.084 -1.12,-45.459 -1.65,-2.83 -3.949,-4.953 -6.897,-6.428 -8.137,-4.363 -6.25,-7.43 -6.016,-16.745 0.236,-10.022 2.006,-20.637 12.266,-25.059 -3.656,-6.604 -8.078,-10.79 -14.151,-15.035 -10.967,-7.665 -12.087,-16.097 -16.097,-28.007 -16.332,-1.475 -35.554,0.472 -46.227,14.504 -4.952,6.604 -7.252,14.741 -8.019,22.878 -13.148,0.53 -24.292,-2.948 -36.085,4.54 -6.485,4.127 -18.042,6.132 -25.294,4.835 -4.068,-4.835 -8.491,-5.13 -13.267,-0.825 -0.886,6.662 -1.356,13.443 -1.238,20.225 0.234,17.924 4.54,45.047 26.474,47.936 9.729,1.297 20.4,-1.062 29.422,4.011 10.318,5.837 8.255,15.507 10.731,25.294 4.599,17.864 35.316,30.188 51.532,31.84 11.024,1.12 22.17,0.354 33.194,0 2.183,-10.083 14.563,-9.553 22.405,-11.321 -0.646,-10.381 -11.613,-16.571 -11.613,-27.184"
            id="Firozabad"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 416.92,1166.613 c -8.078,-5.07 -3.185,-18.16 -10.318,-24.352 -8.019,-7.017 -11.852,2.596 -14.444,-9.492 -1.593,-7.488 -6.016,-15.095 -1.062,-22.348 19.398,-28.596 82.369,-17.865 86.319,-56.484 1.062,-10.26 -5.188,-38.68 8.903,-42.157 1.062,-11.438 -12.028,-6.958 -20.048,-4.54 -12.264,3.655 -5.659,17.63 -7.899,28.359 -1.771,8.491 -8.373,12.561 -14.8,17.336 -9.553,7.074 -8.138,9.965 -21.345,5.896 -21.992,-6.722 -22.287,-22.642 -32.135,-39.623 -6.309,-10.907 -26.769,-16.332 -36.792,-7.547 -9.08,7.96 -9.552,23.172 -10.907,34.198 -1.532,12.264 -10.022,20.754 -22.405,26.297 -6.31,2.83 -13.502,5.307 -18.396,10.437 -2.595,2.712 2.24,17.1 0.177,23.938 -4.834,15.979 -3.359,30.482 1.062,46.639 2.771,9.965 18.75,36.203 29.009,17.335 7.312,-13.442 24.115,-22.522 38.915,-24.821 6.898,-1.062 14.799,-0.826 20.165,4.244 6.838,6.485 13.854,24.41 26.001,16.685"
            id="Hathras"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 838.496,1138.312 c 0.53,-14.151 1.887,-31.015 -5.72,-43.691 -9.435,-15.624 -20.225,-8.077 -32.843,-3.596 -29.361,10.377 -51.061,-18.75 -73.996,-28.243 -12.617,-5.188 -26.65,-16.273 -40.86,-13.62 -16.097,3.066 -29.187,5.955 -18.16,23.29 8.021,12.559 21.168,21.462 27.948,34.787 5.07,9.905 10.554,38.384 -4.01,40.564 5.659,3.951 9.315,9.552 9.67,16.511 0.413,9.197 6.485,13.147 10.612,21.757 6.723,14.092 12.44,27.417 29.718,23.524 25.647,-5.719 48.172,20.578 75.176,19.045 9.67,-0.529 19.635,-4.835 17.453,-16.215 5.896,-1.002 5.069,-5.542 5.424,-11.024 1.121,-20.99 -1.238,-42.04 -0.412,-63.089"
            id="Farrukhabad"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 742.919,1262.78 c 1.18,-8.195 -3.892,-14.15 -5.307,-21.815 -1.71,-9.375 4.953,-24.883 -4.422,-28.772 -21.167,-8.728 -19.457,-35.495 -39.27,-45.638 -9.08,-4.657 -19.397,-6.19 -28.479,-10.729 -7.725,-3.833 -13.386,-10.967 -21.816,-13.443 -9.197,-2.652 -17.334,-3.185 -24.587,-10.022 -6.367,-6.016 -13.03,-9.436 -21.108,-4.481 -13.324,8.195 -18.809,32.9 -31.779,34.315 -23.997,2.652 -23.762,22.347 -22.937,42.099 21.285,6.132 13.68,26.888 11.202,42.925 -1.354,8.963 1.533,14.682 6.428,22.642 3.537,5.778 14.445,19.575 2.063,19.87 8.785,-1.12 14.622,6.19 23.054,6.604 8.49,0.354 14.27,-6.604 23.525,-5.483 16.862,2.123 28.479,12.44 44.812,1.475 20.577,-13.797 23.645,-7.017 44.93,-1.356 14.446,3.884 41.449,-13.214 43.691,-28.191"
            id="Mainpuri"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1306.946,1192.262 c -6.485,-5.012 -16.037,-8.962 -24.41,-7.604 0.649,10.672 -4.952,13.561 -6.367,21.521 -2.713,15.391 -26.415,2.653 -35.73,1.181 -7.548,-1.238 -13.562,1.355 -16.687,8.607 -7.076,0.235 -14.269,0 -21.345,1.002 -16.627,2.358 -19.752,16.863 -21.462,31.427 9.552,0.709 31.072,4.129 32.96,16.334 1.887,12.382 -11.145,2.416 -3.066,18.219 6.958,13.679 12.972,27.83 18.81,41.979 6.722,16.215 12.44,32.725 24.293,45.99 9.139,10.2 21.462,38.562 7.252,48.113 11.024,3.125 22.994,7.899 30.954,16.509 7.018,7.605 15.095,4.305 25.354,3.361 9.729,-0.943 20.342,-1.889 29.835,1.119 11.91,3.832 9.846,3.893 21.462,-4.244 8.785,-6.133 -2.653,-28.833 -4.068,-38.797 -1.945,-13.443 0.178,-24.941 5.542,-37.205 5.013,-11.615 4.953,-22.229 5.365,-34.61 0.413,-12.736 0.354,-33.372 16.745,-23.467 -4.068,-18.396 -15.624,-22.582 -32.724,-22.818 -10.613,-0.177 -10.79,0 -10.023,-10.554 0.59,-7.843 1.476,-15.686 1.297,-23.526 -0.354,-15.979 -6.897,-27.356 -23.466,-30.364 -10.969,-2.067 -12.561,-15.982 -20.521,-22.173"
            id="Barabanki"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1385.955,1407.768 c 16.627,0.648 20.521,13.117 16.333,25.53 -4.238,12.558 46.344,8.608 58.136,9.729 20.873,2.005 40.153,6.25 58.962,15.742 12.735,6.427 37.617,26.532 50.53,14.74 4.658,-4.246 9.492,-8.785 11.497,-14.977 1.651,-5.188 -1.827,-12.973 1.946,-17.335 8.194,-9.493 26.179,4.775 38.502,-3.36 5.602,-3.715 10.849,-7.9 15.802,-12.383 8.431,-7.664 -3.479,-11.792 -9.729,-17.039 -11.851,-9.906 -25.177,-9.965 -38.384,-17.276 -31.367,-17.394 -29.187,-65.034 -75.294,-39.269 -14.033,7.842 -21.875,9.257 -36.32,3.008 -7.43,-3.185 -13.68,-0.648 -18.338,-6.84 -4.361,-5.838 -11.084,-9.729 -17.274,-13.385 -11.085,-6.545 -20.165,-17.983 -30.72,-21.521 -9.021,-3.065 -15.684,-10.437 -24.409,-14.092 -10.083,-4.245 -10.495,11.733 -11.146,19.044 -1.65,17.63 -1.769,31.073 -8.312,47.76 -8.608,21.815 -0.354,44.752 5.543,66.214 9.489,-12.027 -13.445,-25.352 12.675,-24.29"
            id="Ayodhya"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1698.452,1433.238 c -15.153,-1.415 -21.992,-15.919 -37.677,-16.863 -19.93,-1.237 -27.122,15.39 -43.867,24.41 -10.79,5.838 -25.059,-9.492 -33.608,0.413 -3.772,4.362 -0.234,12.146 -1.944,17.335 -2.713,8.373 -10.318,13.502 -16.215,19.457 23.289,3.892 31.484,19.397 49.291,32.192 19.636,14.093 47.287,3.479 65.508,16.098 8.902,6.132 16.037,-3.95 27.771,3.359 7.665,4.776 12.56,11.321 17.925,18.278 5.013,6.486 11.145,9.847 19.398,10.554 13.679,1.121 7.134,-22.877 6.78,-33.254 -0.413,-12.854 -2.123,-19.575 12.911,-17.04 11.026,1.887 20.933,7.783 31.016,12.323 9.729,4.363 25.825,13.03 27.062,-1.181 1.002,-10.967 1.827,-21.991 1.002,-32.959 -2.123,-23.998 -32.429,-30.543 -51.944,-36.084 -25.827,-7.426 -46.227,-14.443 -73.409,-17.038"
            id="Ambedkar_Nagar"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1127.526,1544.499 c 8.784,-9.08 21.991,-9.729 29.127,-21.403 6.779,-11.024 2.534,-23.879 -2.535,-34.609 10.259,-0.473 67.806,8.312 63.501,-8.137 -5.66,-21.697 -23.055,-24.352 -37.086,-38.385 -12.5,-12.5 -20.165,-27.889 -31.958,-40.271 -7.312,-7.726 -15.507,-11.793 -23.82,-17.925 -8.194,-6.073 -9.375,-21.758 4.363,-18.572 -3.42,-18.043 -18.81,-40.861 -31.19,-54.481 -2.24,-2.594 -5.012,-4.304 -8.312,-5.247 -8.432,-2.182 -4.068,-3.125 -11.675,-7.369 -8.02,-4.481 1.237,-15.271 4.952,-19.046 -9.197,-0.295 -20.048,1.12 -26.414,8.551 -7.312,8.489 -8.138,17.569 -22.405,10.554 -10.438,-5.13 -41.273,-39.386 -48.763,-13.855 -2.83,9.729 -6.367,6.428 -16.98,6.073 -8.02,-0.235 -16.096,-0.473 -24.057,0.589 -13.975,1.887 -27.3,6.898 -13.737,20.52 7.37,7.371 18.16,11.262 22.642,21.227 6.31,13.975 -1.415,30.188 5.602,44.045 10.85,21.463 39.505,23.938 54.835,41.097 9.375,10.437 11.969,24.882 19.634,36.438 7.135,10.731 18.455,16.273 27.123,25.354 9.314,9.787 8.077,22.582 12.264,34.552 3.655,10.495 10.968,19.162 15.625,29.186 3.598,7.666 7.725,22.406 17.747,23.938 14.442,2.353 14.501,-15.63 21.517,-22.824"
            id="Unnao"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1083.423,1299.631 c 0.59,4.835 17.865,15.448 22.877,24.116 8.255,14.21 19.693,24.587 22.877,41.45 -10.967,-2.536 -13.62,7.959 -7.547,15.564 6.78,8.49 19.222,12.677 27.005,20.872 14.209,14.978 22.877,35.26 40.742,47.642 33.962,23.645 33.312,-13.855 58.549,-23.054 31.427,-11.438 17.395,-40.625 1.77,-60.317 -16.805,-21.168 -23.289,-50.648 -34.847,-74.765 -4.245,-8.844 -10.73,-12.677 -3.715,-19.752 2.771,-2.83 3.715,-6.367 1.474,-9.847 -4.599,-7.193 -15.507,-10.79 -23.467,-12.382 -12.794,-2.478 -27.476,-2.653 -40.389,-1.888 -15.39,0.886 -17.452,9.021 -28.065,17.631 -11.38,9.257 -26.532,2.534 -37.854,14.092 -6.014,6.311 -13.679,19.046 0.59,20.638"
            id="Lucknow"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 138.031,721.688 c -1.18,2.123 -4.363,1.711 -5.602,3.598 1.887,-1.887 6.309,-1.238 6.897,-4.245 0.413,-2.063 -0.472,-3.597 -1.592,-5.07 0.651,2.004 1.24,4.008 0.297,5.717 z"
            id="path5460"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(255, 255, 208)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 134.258,710.486 c 0.06,0.177 0.178,0.354 0.296,0.529 -0.118,-0.472 -0.118,-1.002 -0.061,-1.532 0.295,-1.827 1.356,-3.655 1.003,-5.308 -0.531,0.943 -1.062,1.771 -1.415,2.653 -0.118,1.24 -0.178,2.537 0.177,3.658 z"
            id="path5464"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(255, 255, 208)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 131.899,734.365 -0.59,-1.71 c 0,0.59 0.236,1.18 0.59,1.71 z"
            id="path5468"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(255, 255, 208)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 137.146,713.611 c 0.06,0.472 0.235,1.002 0.413,1.474 0.117,0.177 0.234,0.354 0.295,0.53 z"
            id="path5480"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(255, 255, 208)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 158.314,961.252 c 14.622,16.392 8.962,20.047 -3.008,32.312 -31.485,32.191 11.675,88.266 12.383,121.343 0.472,22.995 24.822,21.402 40.565,28.064 6.309,2.653 14.976,2.948 19.634,8.786 8.963,11.145 -14.504,11.32 -14.563,12.617 -1.297,21.227 35.082,2.062 24.941,32.193 -8.668,1.944 -11.026,8.489 -9.375,17.512 -22.406,-5.603 -21.875,12.382 -20.578,29.009 19.222,1.71 50.412,-2.535 54.894,22.052 -13.502,-0.707 -35.022,-2.889 -35.967,13.915 -12.382,0.473 -25.234,-0.59 -37.559,0 -0.413,1.651 -0.768,3.243 -1.12,4.895 -29.304,1.946 -43.219,54.479 -16.097,52.771 -2.83,-43.396 43.866,-26.475 74.764,-27.595 -0.472,-7.193 1.945,-15.565 1.474,-22.7 19.575,-0.767 28.479,-2.771 41.627,12.736 9.021,10.672 30.603,-13.68 43.278,-10.496 2.181,11.852 1.12,26.946 17.217,23.172 0.294,-8.726 3.242,-17.924 7.547,-25.412 3.302,0.118 7.547,-0.942 10.908,-0.647 1.12,-9.08 4.127,-11.91 12.087,-13.62 4.363,13.03 11.497,24.823 24.057,26.827 -11.085,4.423 -10.317,20.52 1.355,23.112 13.797,3.066 27.3,-4.774 41.037,-2.652 15.152,2.3 28.243,11.321 43.337,13.62 15.565,2.3 31.427,0.177 46.993,-0.412 -0.178,-2.123 0.942,-5.13 0.766,-7.253 23.998,-0.885 30.955,8.078 48.231,21.05 -2.183,12.912 12.734,15.447 21.934,17.865 16.863,4.422 16.214,13.62 15.448,29.599 -0.885,19.812 12.971,30.365 20.104,47.229 8.373,19.812 -1.12,43.042 -0.411,63.62 -23.939,0.234 -13.148,24.939 -27.653,25.529 -4.306,8.433 -2.478,19.339 -3.42,28.773 -15.86,8.372 -13.268,39.444 -30.188,47.109 -3.42,14.388 -15.625,28.185 -17.569,42.275 -15.214,-13.915 -15.271,11.792 -14.328,21.285 -1.828,0.177 -3.537,0.295 -5.308,0.412 -0.529,11.793 19.34,24.232 11.32,35.79 -5.719,8.194 -13.855,6.84 -22.346,6.015 -11.38,-1.121 -14.858,6.427 -23.29,11.438 -16.511,9.847 -40.33,-0.826 -58.254,1.179 -20.813,2.357 -13.856,24.175 -15.096,38.679 -8.844,3.479 -22.759,-7.547 -28.359,3.715 -3.833,7.725 -1.356,18.16 -1.888,26.415 -0.885,14.15 -4.305,45.282 18.396,42.983 1.946,9.492 8.963,17.157 7.253,27.181 -19.104,-4.009 -13.325,20.226 -29.481,17.571 -1.769,19.457 0.943,34.728 -15.979,48.229 -8.137,6.485 -23.467,20.343 -35.141,17.395 -1.946,18.632 56.014,103.242 14.857,112.676 -2.241,18.81 8.608,17.395 22.582,21.108 28.95,7.665 11.262,44.457 12.735,63.854 7.842,0.413 15.095,3.95 23.055,2.596 1.65,-17.808 3.655,-28.303 18.632,-38.443 3.36,17.807 22.877,9.847 33.727,18.042 14.682,11.025 4.187,43.102 29.953,46.227 -0.648,-3.892 1.531,-9.257 0.942,-13.208 12.028,-3.597 30.424,-0.647 29.245,15.979 16.804,-4.835 29.362,-21.58 47.522,-26.414 0.767,-12.736 1.945,-26.533 14.739,-32.726 -8.844,-10.729 -13.324,-21.402 -28.419,-26.649 -1.71,-8.02 3.715,-12.56 11.497,-11.497 0.648,-7.253 3.598,-16.215 1.062,-23.408 -2.83,-7.9 -12.265,-10.023 -11.792,-19.575 -13.738,-2.005 -28.538,9.493 -44.988,6.132 -0.884,-23.879 13.503,-53.596 7.606,-76.296 -4.481,-17.275 -21.64,-5.896 -29.068,-20.519 -7.37,-14.446 10.318,-75 -17.63,-69.693 -7.312,-16.332 3.715,-42.216 -14.563,-53.832 -7.959,-5.012 -33.372,0.768 -29.186,-13.62 17.335,0 25.177,-14.269 32.37,-28.655 22.995,-10.317 31.957,-5.602 33.077,17.926 23.112,2.062 25.942,2.062 28.184,-20.342 4.776,0.589 10.438,-0.768 15.212,-0.236 0.649,-6.898 0.531,-14.092 1.062,-21.049 15.565,0.354 22.288,-14.74 37.382,-20.813 6.309,10.259 -2.712,15.919 -6.78,24.292 -6.31,13.03 8.962,25.412 9.315,38.325 -19.162,0.767 -38.975,2.653 -35.673,28.537 4.306,2.653 9.611,6.073 12.973,8.312 1.533,-6.309 3.007,-12.264 3.125,-19.044 5.543,-2.005 11.38,-2.771 17.217,-1.593 0.413,14.446 -0.177,24.588 -13.974,31.191 -1.12,3.302 -1.298,9.729 -0.413,13.147 7.665,1.533 13.267,-3.597 14.092,-10.85 6.545,-1.062 18.573,-9.846 25.118,-5.129 9.08,6.484 -5.308,20.754 9.375,23.819 -0.531,2.653 0.767,6.546 0.354,9.198 11.32,0.473 18.042,-8.785 29.895,-5.425 13.562,3.832 21.58,9.729 36.675,5.188 -0.354,-4.774 1.297,-10.377 1.002,-15.094 15.389,-1.533 -4.717,-39.977 -6.191,-49.882 12.561,0.707 17.217,13.03 30.308,11.085 -1.71,22.995 13.147,16.922 31.189,18.514 2.241,13.148 -66.271,64.327 -19.691,71.757 1.709,-9.021 -8.433,-19.517 2.889,-25.295 9.552,-4.894 23.229,1.002 33.312,0.59 -2.89,-25.117 17.218,-17.039 22.348,0.591 21.934,2.889 49.408,0.766 72.464,-0.118 0.589,-6.898 -2.653,-54.305 17.157,-40.979 15.095,10.143 49.469,-13.385 38.502,-31.722 9.847,-1.65 23.82,1.12 33.019,4.187 0.118,-9.965 31.427,-19.104 39.978,-18.159 0.472,12.204 0.412,23.289 10.789,31.309 9.08,7.017 20.813,23.054 31.133,26.887 4.479,26.415 -31.19,22.877 -26.238,43.927 2.123,0.648 3.597,1.593 5.425,2.3 -0.354,2.182 -2.948,7.842 -4.363,9.61 -6.132,2.358 -3.949,1.297 -8.019,5.719 -6.84,0.354 -12.441,4.953 -13.562,11.38 8.728,0.768 17.158,1.12 25.178,-1.237 -2.005,-11.792 9.434,-20.4 20.46,-16.922 12.5,4.01 7.134,20.047 7.37,29.422 23.229,7.135 17.629,-26.356 12.854,-38.384 6.898,-5.248 18.16,-6.898 21.815,1.944 1.532,-3.302 4.187,-5.188 4.187,-11.203 12.618,-3.241 11.32,4.718 15.92,12.795 5.247,9.257 23.762,4.776 32.37,5.603 -0.118,-1.002 0,-4.188 0.117,-5.307 -4.952,-2.006 -7.782,-6.368 -8.433,-12.028 8.373,-3.655 19.341,-2.063 28.598,-1.297 -0.589,4.127 1.828,9.609 1.946,11.852 2.062,-3.715 3.125,-10.142 2.652,-15.685 6.957,-0.235 14.27,-0.117 21.227,0.59 -1.12,4.187 -3.655,7.252 -7.605,9.14 -7.842,5.424 -6.25,15.447 -6.781,23.645 -1.002,15.212 -3.597,29.774 -12.264,42.688 17.335,5.013 23.82,-15.446 40.802,-14.149 0.53,13.502 61.969,7.9 76.414,7.312 -11.732,-26.12 28.36,-37.618 10.023,-62.439 4.363,-4.658 11.38,-4.54 17.807,-3.186 -1.003,4.896 1.062,10.556 1.945,13.798 5.188,-9.258 12.795,-21.345 27.771,-16.98 0.177,3.892 2.771,7.252 2.358,11.262 6.722,6.958 10.79,13.679 22.759,12.439 -2.417,-13.324 10.083,-19.634 5.366,-34.728 9.197,-0.354 25.589,-4.423 33.372,2.417 13.915,12.205 -2.358,30.837 -0.886,45.105 12.618,1.003 34.14,-7.843 38.325,8.784 6.073,24.176 36.733,11.91 53.242,15.861 0.59,14.327 -6.485,33.549 2.653,46.344 10.437,14.683 40.389,5.013 55.307,6.31 0.059,5.602 0.118,11.557 0.118,17.157 11.497,1.002 23.407,0.473 34.904,1.475 0.413,10.85 -0.648,22.052 -0.235,32.901 6.25,0.647 12.854,0.471 19.104,1.119 0.296,6.25 -0.177,12.854 0.118,19.104 15.448,-2.653 12.323,15.389 24.765,12.44 1.355,-10.318 -2.301,-19.162 -0.648,-28.95 21.403,-0.768 66.805,9.729 79.244,-7.782 8.903,-1.593 21.05,1.002 27.123,8.195 0.943,4.48 1.533,8.962 1.887,13.502 3.893,4.835 11.438,1.238 15.39,5.543 19.692,21.58 -7.075,33.49 -26.002,24.352 -0.886,8.785 -1.062,18.219 -0.768,27.062 2.653,-0.471 6.663,1.238 9.257,0.768 0.354,8.844 -0.411,18.102 -0.116,26.945 20.224,-0.472 17.629,15.507 12.794,29.6 -6.839,19.812 -15.39,26.649 -17.395,49.056 -3.892,-0.884 -9.375,1.121 -13.207,0.235 -1.003,2.83 -1.12,8.373 -0.295,11.203 9.61,3.303 17.1,8.962 20.99,18.572 3.184,7.783 -2.3,21.05 10.967,20.283 -2.889,20.283 23.231,16.332 36.969,20.695 1.299,28.007 64.445,28.184 83.433,18.455 20.636,-10.555 3.537,-36.732 16.391,-51.355 5.66,-6.427 12.5,4.245 13.267,-8.727 0.709,-11.263 14.506,-8.313 22.582,-8.785 -2.005,-14.21 -19.397,-21.935 -4.717,-35.79 8.255,-7.782 25.648,-10.73 14.563,-25.648 -10.554,-14.21 -2.83,-24.469 6.25,-35.849 7.192,-9.021 -3.185,-12.205 -5.013,-20.164 -1.769,-7.605 0.296,-15.803 1.002,-23.408 19.576,-1.887 35.613,-10.082 36.853,-31.779 1.474,-25.648 -10.613,-37.028 -29.894,-50.53 -21.228,-14.917 -14.27,-37.44 -22.877,-58.254 -9.966,-23.998 -8.903,-43.69 -0.709,-68.102 6.016,-17.864 14.033,-34.965 34.021,-39.444 25.471,-5.661 35.671,-18.691 57.605,-30.188 15.623,-8.196 37.734,-8.785 48.406,-24.47 11.32,-16.509 15.979,-39.977 38.915,-44.104 5.482,-8.727 18.337,-8.137 26.532,-12.56 9.314,-4.952 9.788,-15.33 11.732,-24.351 4.188,-19.931 41.687,-14.683 38.207,7.369 15.743,1.888 17.218,-7.9 28.125,-15.39 17.808,-12.322 39.563,5.071 58.254,6.722 38.916,3.479 37.5,-36.792 5.603,-45.341 -31.84,-8.55 -52.004,-28.892 -81.367,-43.396 -7.547,-3.714 -15.271,-7.605 -21.934,-12.735 -9.435,-7.252 -5.308,-17.04 -10.556,-26.12 -11.144,-19.045 -32.369,-25.295 -40.564,-47.936 15.389,1.238 37.323,-4.896 49.646,-14.505 8.254,-6.368 0.767,-23.408 -1.355,-31.132 -3.243,-12.146 -12.618,-9.966 -23.408,-11.086 -14.74,-1.532 -27.122,-11.496 -42.747,-13.267 -7.487,-17.157 -5.543,-33.726 16.393,-34.669 21.991,-0.943 12.676,-13.325 31.662,-18.75 23.762,-6.84 49.351,3.479 73.524,-0.177 10.79,-1.651 20.342,-8.49 10.967,-19.517 -6.367,-7.488 -19.457,-4.068 -27.83,-4.775 0.295,-7.37 -3.892,-12.677 -11.498,-12.146 -4.479,-13.855 -3.241,-27.476 -3.359,-42.746 -17.1,-2.891 -38.148,4.422 -52.947,-7.606 -17.1,-13.854 -4.953,-36.733 -8.312,-54.716 -4.011,-21.108 -31.723,-9.788 -25.886,-32.075 5.308,-20.519 -18.396,-33.667 -15.802,-53.95 -22.347,0.768 -25.825,-23.29 -27.417,-41.037"
            id="uttar_pradesh_2_"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="M 105.426,652.763 C 102.479,640.086 97.231,627.35 96.524,613.789"
            id="haryana_1_"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            id="path5922"
            style={{
              blockSize: 'auto',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            d=""
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            id="path5924"
            style={{
              blockSize: 'auto',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            d=""
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1012.374,108.546 c -4.01,-10.731 0.177,-14.328 -6.368,-22.229 -3.715,-4.54 -16.45,-13.03 -22.405,-13.915 -4.774,-0.767 13.62,-41.037 21.051,-44.221 14.444,14.741 24.939,13.915 28.301,35.908 1.533,10.083 2.241,23.585 0.118,33.549 -0.707,3.42 -0.06,10.554 -3.36,12.972 -0.592,0.412 -17.809,-3.243 -17.337,-2.064 z"
            id="path6053"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="M -5.895,-5.132 H 2390.898 V 2486 H -8.843 Z"
            id="path4410"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 673.931,1021.742 c -12.914,-10.023 -32.075,-12.44 -47.817,-14.27 -46.345,-5.482 -68.515,-61.614 -118.75,-60.378 -1.297,14.563 2.357,19.281 -11.792,26.651 -11.793,6.014 -7.253,28.419 -8.255,39.032 -7.487,1.825 -8.798,9.037 -8.767,16.319 3.176,0.25 16.381,1.277 19.309,1.277 3.333,0 10,4 12.667,8.667 2.667,4.667 10.667,1.333 14.667,-0.667 4,-2 8,-0.667 12,2 4,2.667 12,4.667 18.667,4.667 6.666,0 13.334,2 16.666,2.667 3.334,0.667 8.668,4 12,10 3.334,6 14,11.333 19.334,4.667 5.333,-6.667 8.666,-10.666 13.333,-5.333 4.667,5.333 18.667,10 24,9.333 5.333,-0.667 20.667,-4.667 20.667,-4.667 0,0 0.397,0.162 1.134,0.461 0.19,-3.909 4.15,-5.896 11.883,-8.531 -8.433,-1.647 12.142,-21.754 -0.946,-31.895 z"
            id="Kasganj"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 687.905,1097.154 c -6.84,-7.726 -14.504,-14.799 -20.104,-23.584 -3.335,-5.217 -4.937,-8.749 -4.807,-11.397 -0.734,-0.299 -1.134,-0.461 -1.134,-0.461 0,0 -15.334,4 -20.667,4.667 -5.333,0.667 -19.333,-4 -24,-9.333 -4.667,-5.333 -8,-1.333 -13.333,5.333 -5.334,6.667 -16,1.333 -19.334,-4.667 -3.332,-6 -8.666,-9.333 -12,-10 -3.332,-0.667 -10,-2.667 -16.666,-2.667 -6.667,0 -14.667,-2 -18.667,-4.667 -4,-2.667 -8,-4 -12,-2 -4,2 -12,5.333 -14.667,0.667 -2.667,-4.666 -9.333,-8.667 -12.667,-8.667 -2.928,0 -16.132,-1.026 -19.309,-1.276 0.02,4.475 0.542,8.978 0.453,12.274 -0.354,12.854 -1.12,23.407 -9.14,33.962 -15.213,3.479 -29.717,9.849 -43.69,16.627 -9.314,4.481 -28.064,10.495 -34.14,19.458 -6.014,8.845 -0.354,28.065 7.843,28.893 11.025,1.12 11.557,10.495 13.385,19.222 1.828,8.372 9.435,12.265 17.452,8.078 5.188,-2.713 9.729,-6.958 15.743,-7.843 11.319,-1.65 23.524,6.189 26.237,-6.485 3.772,-17.63 48.702,-49.41 55.129,-23.702 3.598,14.445 12.146,17.452 21.814,27.062 5.542,5.543 3.125,9.609 11.438,7.604 10.968,-2.595 11.438,0.295 16.392,-9.609 4.836,-9.67 12.029,-19.931 21.404,-25.707 12.676,-7.782 18.571,5.481 28.772,10.142 9.375,4.245 18.75,3.597 27.239,9.965 14.092,10.495 32.781,11.733 46.106,22.582 1.354,-9.198 -1.416,-17.275 -9.258,-22.7 20.174,-3.01 4.49,-42.396 -3.824,-51.771 z"
            id="Etah"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(252, 146, 114)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1312.961,1652.518 c 7.68,-0.045 22.551,-18.001 21.801,-18.751 0,0 -1.332,-5.327 -6.66,-9.323 -5.328,-3.997 -21.313,-1.332 -21.313,-1.332 0,0 2.665,-10.657 6.661,-10.657 3.996,0 -1.332,0 -13.321,0 -11.988,0 -6.66,-9.324 -6.66,-9.324 0,0 10.656,-19.981 13.32,-26.643 2.665,-6.66 1.333,-19.981 1.333,-19.981 l -3.997,-6.66 13.321,-23.978 c 0,0 -2.664,-29.308 -2.664,-42.627 0,-13.321 1.332,-43.96 1.332,-43.96 0,0 -8.163,0.798 -15.71,1.093 -7.548,0.295 -17.276,-12.677 -25.354,-16.332 -12.972,-5.896 -18.69,-3.065 -30.72,3.714 -18.396,10.318 -20.224,40.035 -47.582,26.003 -0.413,5.955 9.436,5.013 13.856,10.789 4.599,6.016 6.839,13.738 8.254,21.05 -21.402,8.785 -42.57,1.828 -64.682,2.891 7.725,16.332 9.08,32.486 -6.779,44.279 -6.191,4.657 -14.388,6.015 -19.87,11.675 -7.018,7.252 -5.483,19.163 -16.806,22.582 17.158,28.36 51.18,15.153 77.417,20.165 30.013,5.72 40.448,34.198 74.704,30.13 -0.707,17.275 12.028,40.035 30.896,41.627 5.897,0.527 12.56,-5.37 19.223,-6.43 z"
            id="Raebareli"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 1342.853,1628.991 c -3.242,2.771 -8.093,5.718 -8.093,5.718 0,0 -1.332,-6.271 -6.66,-10.267 -5.329,-3.997 -21.313,-1.332 -21.313,-1.332 0,0 2.665,-10.657 6.661,-10.657 3.996,0 -1.332,0 -13.321,0 -11.988,0 -6.66,-9.324 -6.66,-9.324 0,0 10.656,-19.982 13.32,-26.643 2.665,-6.66 1.333,-19.981 1.333,-19.981 l -3.997,-6.66 13.321,-23.978 c 0,0 -2.664,-29.307 -2.664,-42.627 0,-13.321 1.332,-43.96 1.332,-43.96 13.78,-1.572 29.358,-4.26 42.544,3.333 5.719,-5.07 16.272,-7.488 16.272,-16.627 0,-4.127 -5.012,-11.91 -2.535,-15.625 3.832,-5.778 20.225,-2.771 24.765,0.472 5.248,3.773 6.602,10.438 6.66,16.157 -5.945,16.099 7.203,13.561 20.003,15.327 6.257,9.019 5.108,8.019 11.733,16.582 l 15.946,8.354 8.479,6.66 c 0,0 13.092,5.585 13.012,6.594 -0.543,6.771 -5.021,10.725 -5.021,14.721 0,3.996 -7.991,11.988 5.328,18.648 13.321,6.661 17.317,25.311 31.971,27.975 14.653,2.665 29.307,-7.992 29.307,11.988 0,19.981 -10.656,34.636 -10.656,34.636 v 0 0 c -14.142,2.153 -21.53,3.159 -26.291,2.897 -23.762,1.415 -49.822,4.01 -73.584,1.71 -18.514,-1.828 -26.389,-16.582 -44.396,-21.019 -0.894,-0.221 -1.059,2.128 -3.399,3.469 -11.409,6.532 -22.485,18.257 -24.432,28.812 -1.12,6.132 0.708,12.559 1.945,18.514 -4.01,1.358 -7.667,3.363 -10.91,6.133 z"
            id="Amethi"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 374.88,541.62 c -16.097,-19.281 -11.024,-42.983 -11.91,-66.568 -0.413,-11.614 1.77,-14.149 5.248,-23.172 3.773,-9.787 5.719,-23.467 -2.357,-29.717 -6.311,-4.894 -11.439,-12.677 -18.573,-16.332 8.49,-9.08 1.355,-20.342 3.479,-30.778 -14.149,2.477 -27.652,8.844 -42.217,8.491 -7.192,-0.177 -11.674,-5.896 -16.861,0.413 -5.365,6.486 -7.018,3.42 -12.028,11.852 -8.962,15.212 -11.026,19.929 -28.36,18.809 -9.61,-0.59 -21.875,-0.648 -26.532,9.67 2.303,-5.855 -12.034,-12.019 -23.308,-15.397 -3.217,6.474 4.974,12.01 8.737,15.775 4,4 4,9 4,13 0,4 -4,12 -8,16 -4,4 -4,9 -4,12 0,3 -1,14 -4,23 -3,9 -13,12 -20,17 -7,5 -16,18 -16,18 0,0 0,0 0,5 0,5 -5.421,13.913 -5.421,13.913 0,0 -0.177,0.165 -0.501,0.457 1.047,0.499 2.132,0.926 3.278,1.239 11.086,3.064 21.464,-4.719 31.898,1.297 6.781,3.892 9.257,12.382 17.217,10.495 10.438,-2.419 20.578,-6.191 31.073,-8.433 22.347,-4.775 25.884,14.74 44.516,18.219 19.752,3.716 38.207,-1.71 55.542,-10.259 9.021,-4.422 16.922,-4.6 26.297,-1.062 17.686,6.722 19.926,0.354 8.783,-12.912 z"
            id="Muzaffarnagar"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 210.194,424.664 c -3.765,-3.765 -11.954,-9.301 -8.737,-15.775 -5.754,-1.725 -10.713,-2.726 -12.247,-2.586 -27.005,2.417 -54.245,-0.177 -79.479,-10.495 -19.162,-7.842 -23.113,36.674 -25.648,51.237 -5.069,28.655 -0.177,51.533 5.543,79.422 16.392,-6.31 35.377,-4.54 50.294,4.6 5.682,3.52 10.295,9.086 16.354,11.969 0.324,-0.292 0.501,-0.457 0.501,-0.457 0,0 5.421,-8.913 5.421,-13.913 0,-5 0,-5 0,-5 0,0 9,-13 16,-18 7,-5 17,-8 20,-17 3,-9 4,-20 4,-23 0,-3 0,-8 4,-12 4,-4 8,-12 8,-16 0,-4 -0.002,-9.002 -4.002,-13.002 z"
            id="Shamli"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 315.329,749.4 c 0.235,-5.66 0.884,-11.792 3.419,-16.922 4.363,-8.963 13.443,-8.195 21.403,-4.658 17.748,7.843 36.732,21.521 53.064,32.017 -0.589,-20.342 -3.714,-39.976 -11.615,-58.785 -2.829,-6.722 -5.896,-13.384 -8.489,-20.224 -8.785,0.885 -17.688,0.118 -26.475,0.885 -15.86,1.415 -34.847,-6.073 -47.17,7.725 -8.137,9.14 -14.269,25.354 -29.716,21.345 -2.298,-0.599 -4.098,-1.704 -5.52,-3.154 v 0 c 0,0 -4.038,4.037 -6.038,5.37 -2,1.333 -4,5.333 -6.667,9.333 -2.667,4 -12.667,5.333 -18.667,4 -6,-1.333 -8.667,8 -10,11.333 -1.333,3.333 -4.712,10.047 -4.712,10.047 0,0 0.002,0.011 0.003,0.013 2.684,2.572 4.382,5.865 4.784,9.638 0.942,8.727 2.063,4.305 9.493,7.487 0.767,-9.847 18.632,0.53 27.417,0.236 5.482,-0.178 11.025,-0.648 16.272,-2.241 3.951,-1.237 7.548,-3.242 10.908,-5.602 2.595,-1.77 5.07,-3.655 7.488,-5.602 2.062,-1.65 5.246,-1.593 7.899,-1.77 4.309,-0.352 8.614,-0.294 12.919,-0.471 z"
            id="Hapur"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 218.148,747.711 c 0,0 3.379,-6.714 4.712,-10.047 1.333,-3.333 4,-12.666 10,-11.333 6,1.333 16,0 18.667,-4 2.667,-4 4.667,-8 6.667,-9.333 2,-1.333 6.038,-5.37 6.038,-5.37 v 0 c -5.727,-5.842 -5.212,-17.367 -5.447,-24.736 -0.473,-15.564 -18.633,-11.379 -31.663,-13.207 -13.974,-1.944 -26.179,-7.429 -31.722,-21.284 -19.869,7.252 -16.567,20.694 -18.749,38.502 -8.963,-4.658 -15.979,-11.792 -26.887,-9.965 -13.268,2.182 -22.523,5.247 -35.023,-2.063 0,0 12.441,17.217 13.325,20.106 2.062,0.529 5.837,-2.418 8.607,-2.183 0.236,3.185 -0.234,31.604 3.066,29.54 7.9,-0.118 15.271,-0.473 22.464,3.302 2.064,1.062 4.128,1.888 6.073,3.065 7.901,4.717 17.335,9.67 26.769,10.908 7.37,1.002 15.566,2.24 21.641,6.84 0.52,0.398 1.002,0.827 1.465,1.271 0,-0.002 -0.003,-0.013 -0.003,-0.013 z"
            id="Ghaziabad"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 547.579,611.961 c 1.12,15.507 9.139,23.703 13.147,37.795 4.305,15.33 -17.569,17.865 -23.349,28.065 -4.613,8.174 -3.653,16.383 -6.006,22.604 0.531,0.365 0.821,0.573 0.821,0.573 0,0 11.333,10.667 8,18.667 -3.333,8 -9.333,20 -2.667,26 6.666,6 12,14 8,22 -4,8 -11.333,11.333 -5.333,17.333 6,6 8.667,12 14.667,7.333 6,-4.667 10.667,-10 16.667,-7.333 6,2.667 9.333,2 15.333,-2 6,-4 17.333,-9.333 17.333,-9.333 0,0 0.326,-0.086 0.926,-0.236 -3,-8.318 -7.271,-16.335 -13.557,-21.196 -4.422,-1.475 -5.425,-4.834 -3.125,-10.26 -2.239,-8.607 0.943,-11.498 9.553,-8.727 12.264,-0.118 24.292,3.361 29.304,-9.257 8.49,-21.285 5.66,-36.379 -8.137,-54.187 -9.375,-12.088 -10.495,-27.182 -5.13,-41.51 3.302,-8.785 10.494,-7.547 14.8,-16.214 4.187,-8.433 8.019,-17.748 15.212,-24.175 -5.542,0.826 -12.146,1.77 -17.395,-0.943 -9.904,-5.188 -3.537,-15.271 -13.267,-19.457 -8.667,-3.772 -13.384,-12.44 -19.104,-19.397 -7.724,-9.375 -17.512,-9.14 -12.027,-23.702 -14.977,-0.59 -29.422,8.194 -34.139,22.699 -4.952,15.035 -10.495,25.648 -16.687,38.207 13.387,-0.059 15.452,16.686 16.16,26.651 z"
            id="Moradabad"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(222, 45, 38)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 96.522,613.729 c -1.946,-37.321 -0.236,-68.983 -11.321,-105.541 -10.495,-34.434 1.592,-80.364 13.148,-113.56 1.77,-0.177 3.479,-0.295 5.307,-0.472 6.191,-10.438 5.778,-22.052 14.446,-31.368 7.604,-8.255 12.854,-15.153 13.62,-26.828 1.061,-17.335 -3.361,-43.573 21.934,-42.924 3.007,-8.608 10.495,-9.198 11.851,-19.222 1.889,-13.855 16.568,-10.908 26.476,-11.32 3.302,-36.615 40.742,-56.25 56.603,-86.615 3.008,-5.778 5.189,-11.674 6.723,-17.629"
            id="haryana"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 250.294,138.086 c -1.592,17.983 23.35,31.898 34.905,42.334 20.047,18.16 47.995,19.398 70.694,32.665 -10.022,-1.828 -18.454,4.658 -27.357,7.96 -6.25,19.87 -9.257,43.75 -22.938,60.318 -11.731,14.21 -37.853,30.306 -24.998,50.825 7.842,12.5 2.3,40.565 13.797,47.641 15.92,9.788 40.094,-1.828 56.484,-4.717 -1.887,9.257 5.13,21.521 -3.479,30.778 7.37,3.774 23.879,27.3 33.077,19.635 16.272,-13.502 5.777,-25.414 28.184,-31.368 15.625,-4.187 12.618,-25.413 28.42,-24.292 19.516,1.356 30.365,-16.097 47.641,-4.304 20.283,13.856 21.698,33.373 35.85,51.297 16.687,21.108 44.397,35.2 64.562,52.948 7.605,6.662 41.98,19.87 42.747,29.775 1.062,13.502 -32.075,13.385 -40.212,15.802 -4.953,6.368 -8.255,14.15 -6.484,22.759 17.038,6.073 19.161,28.303 38.029,31.133 0.354,30.837 25.472,15.86 45.341,16.628 29.188,1.179 27.948,15.151 28.893,39.799 20.99,-1.238 39.21,20.224 59.079,25.354 19.458,5.013 25.531,9.14 26.475,28.065 17.57,1.593 35.73,-0.825 52.889,3.772 23.407,6.25 44.34,-7.134 66.98,-2.062 0.354,9.375 -0.531,19.163 -0.118,28.479 5.66,-1.297 11.438,-1.354 17.217,-0.472 0.473,16.393 24.47,-0.354 21.64,25.59 8.195,0.707 16.805,0.943 25,0.648 9.197,-10.672 8.667,-23.997 23.054,-30.188 2.535,-1.062 5.071,-2.123 7.665,-3.184"
            id="uttaranchal_2_"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'none',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 752.823,964.257 c 4.6,-2.653 10.555,-2.889 14.918,-6.072 -12.5,-10.673 -9.436,-12.617 -6.133,-27.83 3.715,-17.335 -22.229,-14.622 -31.072,-11.085 -13.915,5.542 -21.58,-1.828 -31.485,-10.79 -7.074,-6.367 -15.742,-6.25 -24.705,-5.012 -14.387,1.945 -15.684,1.945 -17.688,-12.205 -4.835,-35.317 -10.613,-64.681 -50.707,-73.407 -9.552,-2.123 -28.361,-5.543 -36.32,2.478 -6.897,6.957 -4.6,11.084 -15.095,13.854 -8.667,2.301 -16.804,6.016 -25.766,7.136 -0.081,0.01 -0.16,0.015 -0.241,0.024 -0.858,2.676 -3.131,10.013 -3.669,14.316 -0.667,5.333 3.333,8.667 4.667,12 1.334,3.333 -4.667,7.333 -14,10 -9.333,2.667 -4.667,4 -2,7.333 2.667,3.333 0,5.333 -4,7.333 -4,2 -1.333,4 -1.333,7.333 0,3.333 0,5.333 -4.667,8 -4.667,2.667 -1.333,6.667 -2,12 -0.667,5.333 -4.667,11.333 -4.667,11.333 0,0 -0.055,0.176 -0.164,0.489 4.413,2.61 8.171,6.171 11.436,10.132 5.955,7.312 16.155,6.427 24.999,10.082 19.104,7.781 35.614,21.048 50.826,34.668 12.972,11.557 20.224,17.747 38.09,19.634 14.681,1.592 30.129,3.833 43.572,10.26 5.602,2.653 11.97,6.662 13.738,13.03 2.889,10.142 -8.785,7.134 -8.608,17.335 0.177,11.557 11.969,2.062 19.457,2.122 10.26,0.06 18.691,6.897 27.771,10.79 -0.296,-5.483 -0.061,-10.908 0.529,-16.332 1.238,-12.618 4.245,-7.783 10.613,-16.627 6.309,-8.728 8.667,-17.453 17.982,-23.703 5.07,-3.36 17.513,-11.202 10.143,-18.337 -6.543,-6.367 -5.718,-10.612 -4.421,-20.282 z"
            id="Budaun"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
          <path
            d="m 609.783,790.32 c -1.09,-5.138 -2.57,-11.088 -4.663,-16.894 -0.601,0.15 -0.926,0.236 -0.926,0.236 0,0 -11.333,5.333 -17.333,9.333 -6,4 -9.333,4.667 -15.333,2 -6,-2.667 -10.667,2.667 -16.667,7.333 -6,4.666 -8.667,-1.333 -14.667,-7.333 -6,-6 1.333,-9.333 5.333,-17.333 4,-8 -1.333,-16 -8,-22 -6.667,-6 -0.667,-18 2.667,-26 3.334,-8 -8,-18.667 -8,-18.667 0,0 -0.291,-0.208 -0.821,-0.573 -1.737,4.593 -5.278,8.104 -14.219,9.707 -13.325,2.418 -26.887,1.593 -40.329,2.3 -9.375,0.473 -0.708,46.64 -1.771,56.072 -1.12,9.906 -6.25,18.455 -7.781,28.302 -0.61,3.915 -0.985,6.615 -0.999,8.634 -1.888,3.235 -0.179,5.797 -0.894,5.714 -7.845,-0.913 -20.956,-0.419 -30.434,-0.089 -14.062,0.489 -12.712,11.299 -15.773,25.294 -1.406,5.72 -1.9,16.347 -1.842,22.361 0.06,12.264 10.496,9.198 20.46,13.679 12.736,5.661 27.24,16.273 34.788,28.186 3.655,5.719 4.127,12.499 4.422,19.104 0.53,12.205 8.728,5.955 18.337,11.025 0.462,0.245 0.911,0.511 1.359,0.776 0.108,-0.313 0.164,-0.489 0.164,-0.489 0,0 4,-6 4.667,-11.333 0.667,-5.333 -2.667,-9.333 2,-12 4.667,-2.667 4.667,-4.667 4.667,-8 0,-3.333 -2.667,-5.333 1.333,-7.333 4,-2 6.667,-4 4,-7.333 -2.667,-3.333 -7.333,-4.667 2,-7.333 9.333,-2.666 15.333,-6.667 14,-10 -1.333,-3.333 -5.334,-6.667 -4.667,-12 0.538,-4.303 2.811,-11.641 3.669,-14.316 -0.176,-0.194 -0.369,-0.405 -0.566,-0.62 11.517,-1.777 22.051,-6.382 34.179,-8.192 8.02,-14.446 14.15,-17.453 31.19,-16.51 10.142,0.59 14.269,4.187 17.335,-7.605 1.533,-5.779 0.295,-12.443 -0.885,-18.103 z"
            id="Sambhal"
            style={{
              blockSize: 'auto',
              d: 'path(&quot',
              fill: 'rgb(251, 106, 74)',
              height: 'auto',
              inlineSize: 'auto',
              overflowX: 'visible',
              overflowY: 'visible',
              perspectiveOrigin: '0px 0px',
              stroke: 'rgb(255, 255, 255)',
              strokeWidth: 2,
              transformOrigin: '0px 0px',
              verticalAlign: 'baseline',
              width: 'auto',
            }}
            inkscapeConnector-curvature={0}
            onMouseOut={mouseOutEvent}
            onMouseOver={mouseEventHandle}
            onDoubleClick={doubleclickEvent}
          />
        </g>
        <g
          id="Ebene_2"
          transform="translate(10.344776,6.632)"
          style={{
            blockSize: 'auto',
            height: 'auto',
            inlineSize: 'auto',
            overflowX: 'visible',
            overflowY: 'visible',
            perspectiveOrigin: '0px 0px',
            transform: 'matrix(1, 0, 0, 1, 10.3448, 6.632)',
            transformOrigin: '0px 0px',
            verticalAlign: 'baseline',
            width: 'auto',
          }}
        />
      </svg>
    </>
  );
};

export default SVGComponent;
