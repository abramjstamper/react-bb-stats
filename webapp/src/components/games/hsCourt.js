import React, { Component } from 'react';

class HsCourt extends Component {

  alertTester = (location) => {
    console.log(`ALERT: ${location}`);
    alert(location);
  }

  render() {


    return (
      <svg viewBox="0 0 800 450" height="100%" width={800} {...this.props}>
        <g stroke="#000" strokeWidth={2} strokeMiterlimit={10}>
          <path fill="transparent" d="M22 0h756v450H22z" onClick={() => this.alertTester("outside shot")} />
          <path fill="#FF9100" d="M1 0h22v450h-22z" onClick={() => this.alertTester("left side layups")} />
          <path fill="#FF9100" d="M1 0h22v450H1zM777 0h22v450h-22z" onClick={() => this.alertTester("right side layups")} />
          <path fill="transparent" d="M400 0v450" />
        </g>
        <g fill="transparent" stroke="#000" strokeMiterlimit={10}>
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M64 41v-.006l.766-.005c101.627 0 184.137 82.385 184.137 184.013 0 101.625-82.323 184.01-183.95 184.01-.139 0-.734-.215-.734-.215M65.5 41h-42 42zm0 368h-42 42z"
            onClick={() => this.alertTester("left side inside shot")}
          />
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M23 171h170v108H23zM248.57 224.929C248.57 254.634 223 279 193 279v-54.071V171c30 2.39 55.57 24.225 55.57 53.929z"
            onClick={() => this.alertTester("left side paint")}
          />
          <path d="M188.503 171.228A55.52 55.52 0 0 1 193.5 171v5" />
          <path strokeDasharray="10.8889,10.8889" d="M193.5 187v82" />
          <path d="M193.5 274v5a68.493 68.493 0 0 1-4.968-.58" />
          <path
            strokeDasharray="9.4743,9.4743"
            d="M179.292 276.337c-23.439-7.044-41.362-26.397-41.362-51.266 0-26.445 20.265-48.658 45.879-53.216"
          />
        </g>
        <path fill="transparent" stroke="#000" strokeMiterlimit={10} d="M58.5 198v54" />
        <circle
          fill="transparent"
          stroke="#000"
          strokeMiterlimit={10}
          cx={71.337}
          cy={225.279}
          r={7.232}
          onClick={() => this.alertTester("left side basket")}
        />
        <path d="M58 223h6v5h-6z" />
        <text
          transform="translate(12.5 61.023)"
          fontFamily="'ArialMT'"
          fontSize={14}
          glyphOrientationVertical={0}
          writingMode="tb"
        >
          Layups
    </text>
        <path
          fill="#FF730B"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M1 198h22v54H1z"
          onClick={() => this.alertTester("left side dunk")}
        />
        <text
          transform="translate(12.5 298.697)"
          fontFamily="'ArialMT'"
          fontSize={14}
          glyphOrientationVertical={0}
          writingMode="tb"
        >
          Layups
    </text>
        <text
          transform="translate(788.5 64.163)"
          fontFamily="'ArialMT'"
          fontSize={14}
          glyphOrientationVertical={0}
          writingMode="tb"
        >
          Layups
    </text>
        <path
          fill="#FF730B"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M777 197h22v54h-22z"
          onClick={() => this.alertTester("right side dunk")}
        />
        <text
          transform="translate(788.5 301.838)"
          fontFamily="'ArialMT'"
          fontSize={14}
          glyphOrientationVertical={0}
          writingMode="tb"
        >
          Layups
    </text>
        <g>
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M736 409v.006s-.342.006-.48.006c-101.627 0-183.994-82.385-183.994-184.014 0-101.625 82.394-184.01 184.021-184.01.139 0 .485.215.485.215M735.07 409h42-42zm0-368h42-42z"
            onClick={() => this.alertTester("right side inside shot")}
          />
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M607 171h170v108H607z"
            onClick={() => this.alertTester("right side paint")}
          />
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M551.43 225.071C551.43 195.366 577 171 607 171v108c-30-2.39-55.57-24.225-55.57-53.929z"
            onClick={() => this.alertTester("right side freethrow")}
          />
          <g fill="transparent" stroke="#000" strokeMiterlimit={10} >
            <path d="M612.496 278.773a69.157 69.157 0 0 1-4.996.227v-5" />
            <path strokeDasharray="10.8889,10.8889" d="M607.5 263v-38.071V181" />
            <path d="M607.5 176v-5c1 .133 3.328.328 4.968.579" />
            <path
              strokeDasharray="9.4743,9.4743"
              d="M621.278 173.663c23.439 7.044 41.362 26.397 41.362 51.266 0 26.444-20.266 48.658-45.88 53.216"
            />
          </g>
        </g>
        <g>
          <path
            fill="transparent"
            stroke="#000"
            strokeMiterlimit={10}
            d="M741.5 252v-54"
          />
          <circle
            fill="transparent"
            stroke="#000"
            strokeMiterlimit={10}
            cx={729.232}
            cy={224.721}
            r={7.232}
            onClick={() => this.alertTester("right basket")}
          />
          <path d="M736 222h6v5h-6z" />
        </g>
        <circle
          fill="transparent"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          cx={400.434}
          cy={225.066}
          r={54.551}
          onClick={() => this.alertTester("Center Court")}
        />
        <ellipse
          fill="transparent"
          stroke="#000"
          strokeMiterlimit={10}
          cx={400.5}
          cy={225}
          rx={24.523}
          ry={23.151}
          onClick={() => this.alertTester("Center Court")}
        />
      </svg>
    );
  }
}

export default HsCourt;