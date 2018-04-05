import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fireNewShotEvent} from '../../actions/actionCreators';

class HsCourt extends Component {

  constructor() {
    super();
    document.oncontextmenu = function () {
      return false;
    }
  }

  componentDidMount() {
    this.pt = this.svg.createSVGPoint();
  }

  markMadeBasket = (x, y) => {
    var svgNS = "http://www.w3.org/2000/svg";
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttributeNS(null, "id", "mycircle");
    myCircle.setAttributeNS(null, "cx", x);
    myCircle.setAttributeNS(null, "cy", y);
    myCircle.setAttributeNS(null, "r", 5);
    myCircle.setAttributeNS(null, "fill", "orange");
    myCircle.setAttributeNS(null, "stroke", "black");

    document.getElementById("mySVG").appendChild(myCircle);
  }

  markMissedBasket = (x, y) => {
    var svgNS = "http://www.w3.org/2000/svg";
    var path = document.createElementNS(svgNS, "path");
    path.setAttributeNS(null, "id", "path");
    path.setAttributeNS(null, "stroke", "black");
    path.setAttributeNS(null, "d", `M ${x-5}, ${y-5} L ${x+5}, ${y+5} M ${x+5}, ${y-5} L ${x-5}, ${y+5}`);

    document.getElementById("mySVG").appendChild(path);
  }

  getClickPosition = (e, click) => {
    // see stack overflow for link on how to get relative SVG points even when scaling svg
    //https://stackoverflow.com/questions/29261304/how-to-get-the-click-coordinates-relative-to-svg-element-holding-the-onclick-lis
    this.pt.x = Math.round(e.clientX);
    this.pt.y = Math.round(e.clientY);
    let cursor = this.pt.matrixTransform(this.svg.getScreenCTM().inverse());
    return { x: cursor.x, y: cursor.y };
  }


  alertTester = (e, floorLocation) => {
    let isMissed = true;
    let coord = this.getClickPosition(e, e.target);
    if (e.type === 'click') {
      console.log(`MISSED SHOT: ${floorLocation}`);
      this.markMissedBasket(coord.x, coord.y);
      isMissed = true;
    } else if (e.type === 'contextmenu') {
      console.log(`MADE SHOT: ${floorLocation}`);
      this.markMadeBasket(coord.x, coord.y);
      isMissed = false;
    }

    this.props.fireNewShotEvent(this.props.game, coord, floorLocation, isMissed);
    console.log(`(${coord.x}, ${coord.y})`);
  }

  render() {

    return (
      <svg id="mySVG" ref={(ref) => this.svg = ref} width={804} height={454} viewBox="0 0 800 450">
        <path
          fill="transparent"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M22 0 h756 v450 H22 z"
        />
        <ellipse
          fill="transparent"
          stroke="#000"
          strokeMiterlimit={10}
          cx={400.5}
          cy={225}
          rx={24.523}
          ry={23.151}
        />
        <path
          fill="transparent"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M-100.416 270.358"
        />
        <circle
          fill="transparent"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          cx={400.434}
          cy={225.066}
          r={54.551}
        // onClick={(e) => this.alertTester(e, "center court")}
        // onContextMenu={(e) => this.alertTester(e, "center court")}
        />
        <path
          fill="transparent"
          d="M 22 0 L 22 450 L 400 450 L 400 0 Z"
          onClick={(e) => this.alertTester(e, "left side outside shot")}
          onContextMenu={(e) => this.alertTester(e, "left side outside shot")}
        />
        <path
          fill="transparent"
          d="M 400 0 L 400 450 L 778 450 L 778 0 Z"
          onClick={(e) => this.alertTester(e, "right side outside shot")}
          onContextMenu={(e) => this.alertTester(e, "right side outside shot")}
        />
        <path
          fill="#FF9100"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M1 0h22v450H1zM777 0h22v450h-22z"
          onClick={(e) => this.alertTester(e, "right side layups")}
          onContextMenu={(e) => this.alertTester(e, "right side layups")}
        />
        <path
          fill="#FF9100"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M1  0h22v450h-22z"
          onClick={(e) => this.alertTester(e, "left side layups")}
          onContextMenu={(e) => this.alertTester(e, "left side layups")}
        />
        <path
          fill="transparent"
          stroke="#000"
          strokeWidth={2}
          strokeMiterlimit={10}
          d="M400 0v450"
        />
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
          onClick={(e) => this.alertTester(e, "left side dunk")}
          onContextMenu={(e) => this.alertTester(e, "left side dunk")}
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
          onClick={(e) => this.alertTester(e, "right side dunk")}
          onContextMenu={(e) => this.alertTester(e, "right side dunk")}
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
          <g fill="transparent" stroke="#000" strokeMiterlimit={10}>
            <path d="M188.503 171.228A55.52 55.52 0 0 1 193.5 171v5" />
            <path strokeDasharray="10.8889,10.8889" d="M193.5 187v82" />
            <path d="M193.5 274v5a68.493 68.493 0 0 1-4.968-.58" />
            <path
              strokeDasharray="9.4743,9.4743"
              d="M179.292 276.337c-23.439-7.044-41.362-26.397-41.362-51.266 0-26.445 20.265-48.658 45.879-53.216"
            />
          </g>
          <path fill="transparent" stroke="#000" strokeMiterlimit={10} d="M58.5 198v54" />
          <path d="M58 223h6v5h-6z" />
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M71.48 47.081c98.148 0 177.711 79.676 177.711 177.96C249.192 323.327 169.629 403 71.48 403H73 23V47h50"
            onClick={(e) => this.alertTester(e, "left side inside shot")}
            onContextMenu={(e) => this.alertTester(e, "left side inside shot")}
          />
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M23 171h170v108H23zM248.57 224.929C248.57 254.634 223 279 193 279v-54.071V171c30 2.39 55.57 24.225 55.57 53.929z"
            onClick={(e) => this.alertTester(e, "left side paint")}
            onContextMenu={(e) => this.alertTester(e, "left side paint")}
          />
          <circle
            fill="transparent"
            stroke="#000"
            strokeMiterlimit={10}
            cx={71.337}
            cy={225.279}
            r={7.232}
            onClick={(e) => this.alertTester(e, "left side basket")}
            onContextMenu={(e) => this.alertTester(e, "left side basket")}
          />
        </g>
        <g>
          <g fill="transparent" stroke="#000" strokeMiterlimit={10}>
            <path d="M611.496 278.773a50.478 50.478 0 0 1-4.996.227v-5" />
            <path strokeDasharray="10.8889,10.8889" d="M606.5 263v-38.071V181" />
            <path d="M606.5 176v-5c2 .133 3.328.328 4.968.579" />
            <path
              strokeDasharray="9.4743,9.4743"
              d="M620.899 173.663c23.439 7.044 41.362 26.397 41.362 51.266 0 26.444-20.266 48.658-45.88 53.216"
            />
          </g>
          <path
            fill="transparent"
            stroke="#000"
            strokeMiterlimit={10}
            d="M741.5 252v-54"
          />
          <path d="M736 222h6v5h-6z" />
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M728.615 402.92c-98.148 0-177.663-79.676-177.663-177.961C550.952 126.673 630.562 47 728.711 47h-1.52H777v356h-50"
            onClick={(e) => this.alertTester(e, "ride side inside shot")}
            onContextMenu={(e) => this.alertTester(e, "ride side inside shot")}
          />
          <path
            fill="transparent"
            stroke="#000"
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M607 171h170v108H607zM551.43 225.071C551.43 195.366 577 171 607 171v108c-30-2.39-55.57-24.225-55.57-53.929z"
            onClick={(e) => this.alertTester(e, "right side paint")}
            onContextMenu={(e) => this.alertTester(e, "right side paint")}
          />
          <circle
            fill="transparent"
            stroke="#000"
            strokeMiterlimit={10}
            cx={728.854}
            cy={224.721}
            r={7.232}
            onClick={(e) => this.alertTester(e, "right side basket")}
            onContextMenu={(e) => this.alertTester(e, "right side basket")}
          />
        </g>
      </svg>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { fireNewShotEvent })(HsCourt);