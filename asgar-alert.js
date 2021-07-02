function formatString(str, ...params) {
  for (let i = 0; i < params.length; i++) {
    var reg = new RegExp("\\{" + i + "\\}", "gm");
    str = str.replace(reg, params[i]);
  }
  return str;
}
// simple comment
const mainHtml = `<div id='asgar-alert' ></div>`;
const mainStyle = `
<style>
#asgar-alert {
  z-index: 99999;
  position: fixed;
  padding: 0;
  list-style: none;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  /* aditional */
}

#asgar-alert * {
  font-family: Roboto, "Ubuntu", Arial, sans-serif;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
  list-style: none;
  margin: 0;
}

#asgar-alert.mini-asgar {
  height: 150px;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  padding: 1em !important;
}

#asgar-alert.mini-asgar .sgr-mini {
  -webkit-box-shadow: 0 0 10px black;
          box-shadow: 0 0 10px black;
  height: 100%;
  width: 100%;
  background: gray;
  border-radius: 0.3em;
  max-width: 500px;
  -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  padding: 1em !important;
}

#asgar-alert.mini-asgar .sgr-mini .sgr-head {
  width: 100%;
  height: 50%;
  margin-bottom: 0.3em !important;
}

#asgar-alert.mini-asgar .sgr-mini .sgr-head .sgr-mini-heading {
  font-size: 20px;
}

#asgar-alert.mini-asgar .sgr-mini .sgr-head svg {
  height: 100%;
  color: gray;
  fill: gray;
  stroke: gray;
}

#asgar-alert.mini-asgar .sgr-mini .sgr-head > * {
  height: 100%;
  text-align: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 0.3em !important;
  float: left;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-error {
  background: #f6d7da;
  -webkit-box-shadow: 0 0 10px #49151d !important;
          box-shadow: 0 0 10px #49151d !important;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-error,
#asgar-alert.mini-asgar .sgr-mini.sgr-error * {
  color: #49151d;
  fill: #49151d;
  stroke: #49151d;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-success {
  -webkit-box-shadow: 0 0 10px #162e13 !important;
          box-shadow: 0 0 10px #162e13 !important;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-success,
#asgar-alert.mini-asgar .sgr-mini.sgr-success * {
  background: #d4edda;
  color: #162e13;
  fill: #162e13;
  stroke: #162e13;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-warning {
  -webkit-box-shadow: 0 0 10px #533f03 !important;
          box-shadow: 0 0 10px #533f03 !important;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-warning,
#asgar-alert.mini-asgar .sgr-mini.sgr-warning * {
  background: #fff3cd;
  color: #533f03;
  fill: #533f03;
  stroke: #533f03;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-info {
  -webkit-box-shadow: 0 0 10px #002752 !important;
          box-shadow: 0 0 10px #002752 !important;
}

#asgar-alert.mini-asgar .sgr-mini.sgr-info,
#asgar-alert.mini-asgar .sgr-mini.sgr-info * {
  background: #cbe4ff;
  color: #002752;
  fill: #002752;
  stroke: #002752;
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}

@keyframes slide-right {
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}

#asgar-alert.mega-asgar {
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.596);
  z-index: 9999;
  position: fixed;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  left: 0;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-item-align: center;
      align-self: center;
  text-align: center;
}

#asgar-alert.mega-asgar.sgr-fade-out {
  -webkit-animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
          animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
}

#asgar-alert.mega-asgar .sgr-mega {
  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
          animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  background: white;
  min-width: 30vw;
  border-radius: 0.3em;
  -webkit-box-shadow: 0 0 10px gray;
          box-shadow: 0 0 10px gray;
  overflow: hidden;
  color: black;
}

#asgar-alert.mega-asgar .sgr-mega header {
  border-bottom: 1px solid gray;
  padding: 1em;
}

#asgar-alert.mega-asgar .sgr-mega header .sgr-heading {
  font-size: 20px;
  color: #8868df;
}

#asgar-alert.mega-asgar .sgr-mega .sgr-body {
  padding: 1em;
}

#asgar-alert.mega-asgar .sgr-mega .sgr-body .sgr-details {
  font-size: 30px;
  font-weight: 300;
  color: #8868df;
}

#asgar-alert.mega-asgar .sgr-mega .sgr-body .sgr-more-details {
  font-weight: bold;
  font-size: 13px;
}

#asgar-alert.mega-asgar .sgr-mega footer {
  border-top: 1px solid gray;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%;
  background-color: #8868df;
  padding: 1em;
}

#asgar-alert.mega-asgar .sgr-mega footer button {
  padding: 0 1em;
  outline: none;
  border: none;
  border-radius: 0.3em;
  color: #8868df;
  font-weight: bold;
  cursor: pointer;
  -webkit-box-shadow: 0px 3px 3px white;
          box-shadow: 0px 3px 3px white;
  font-size: medium;
}

#asgar-alert.mega-asgar .sgr-mega footer button:hover {
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
  -webkit-transform: translate(0, -2px);
          transform: translate(0, -2px);
}

@-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-blurred-top {
  0% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
}

@keyframes slide-out-blurred-top {
  0% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
}
/*# sourceMappingURL=main.css.map */
</style>
`;

const errorSvg = `<svg class="sgr-error-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve">
<g>
	<path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0   C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778   c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828   c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828   l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/>
</g>
</svg>`;
const warningSvg = `<svg class="sgr-warning-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 486.463 486.463" style="enable-background:new 0 0 486.463 486.463;" xml:space="preserve">
<g>
	<g>
		<path d="M243.225,333.382c-13.6,0-25,11.4-25,25s11.4,25,25,25c13.1,0,25-11.4,24.4-24.4    C268.225,344.682,256.925,333.382,243.225,333.382z"/>
		<path d="M474.625,421.982c15.7-27.1,15.8-59.4,0.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4,16.3-74.9,43.4    l-156.8,271.5c-15.6,27.3-15.5,59.8,0.3,86.9c15.6,26.8,43.5,42.9,74.7,42.9h312.8    C430.725,465.582,458.825,449.282,474.625,421.982z M440.625,402.382c-8.7,15-24.1,23.9-41.3,23.9h-312.8    c-17,0-32.3-8.7-40.8-23.4c-8.6-14.9-8.7-32.7-0.1-47.7l156.8-271.4c8.5-14.9,23.7-23.7,40.9-23.7c17.1,0,32.4,8.9,40.9,23.8    l156.7,271.4C449.325,369.882,449.225,387.482,440.625,402.382z"/>
		<path d="M237.025,157.882c-11.9,3.4-19.3,14.2-19.3,27.3c0.6,7.9,1.1,15.9,1.7,23.8c1.7,30.1,3.4,59.6,5.1,89.7    c0.6,10.2,8.5,17.6,18.7,17.6c10.2,0,18.2-7.9,18.7-18.2c0-6.2,0-11.9,0.6-18.2c1.1-19.3,2.3-38.6,3.4-57.9    c0.6-12.5,1.7-25,2.3-37.5c0-4.5-0.6-8.5-2.3-12.5C260.825,160.782,248.925,155.082,237.025,157.882z"/>
	</g>
</g>
</svg>`;

const informationSvg = `<svg class="sgr-info-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 23.625 23.625" style="enable-background:new 0 0 23.625 23.625;" xml:space="preserve">
<g>
	<path style="fill:#030104;" d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813   S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189   c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759   l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717   c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828   c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53   c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68   c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728   c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z    M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193   c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497   c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"/>
</g>
</svg>`;

const successSvg = `<svg class="sgr-info-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve">
<g>
	<g>
		<path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933    C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8    s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"/>
	</g>
</g>
<g>
	<g>
		<path d="M370.046,141.534c-6.614-6.388-17.099-6.388-23.712,0v0L187.733,300.134l-56.201-56.201    c-6.548-6.78-17.353-6.967-24.132-0.419c-6.78,6.548-6.967,17.353-0.419,24.132c0.137,0.142,0.277,0.282,0.419,0.419    l68.267,68.267c6.664,6.663,17.468,6.663,24.132,0l170.667-170.667C377.014,158.886,376.826,148.082,370.046,141.534z"/>
	</g>
</g>
</svg>`;
function convertToIcon(name) {
  if (name === "success") return successSvg;
  else if (name === "info") return informationSvg;
  else if (name === "warning") return warningSvg;
  else if (name === "error") return errorSvg;
  return informationSvg;
}
class Mini {
  body = document.getElementsByTagName("body")[0];
  asgar = document.getElementById("asgar-alert");
  template = `
    <div class="sgr-mini sgr-{2}">
     <div class="sgr-head">
     {3}  
     <p class="sgr-mini-heading">{0}</p>
     </div>
     <p class="sgr-mini-details" >{1}</p>
    </div>
    `;

  state = ``;
  saveToState(data) {
    this.state = data;
  }
  clearState() {
    this.state = ``;
  }
  clearAllClass() {
    this.asgar.removeAttribute("class");
  }
  changeAsgar() {
    if (!this.asgar.classList.contains("mini-asgar")) {
      this.asgar.classList.add("mini-asgar");
    }
  }
  remove() {
    const self = this;

    setTimeout(function () {
      self.clearState();
      self.render();
      self.clearAllClass();
    }, self.duration);
  }
  correctType(type) {
    if (
      type === "success" ||
      type === "warning" ||
      type === "error" ||
      type === "info"
    )
      return type;
    return "info";
  }
  constructor(message, type = "info", details = "", duration = 3000) {
    type = this.correctType(type);
    this.duration = duration;
    this.changeAsgar();
    const icon = convertToIcon(type);
    const template = formatString(this.template, message, details, type, icon);
    this.saveToState(template);
    this.render();
    this.remove();
  }
  render() {
    const template = this.state;
    this.asgar.innerHTML = template;
  }
}

function mega({ title = "", message = "", details = "", left, right }) {
  const body = `
  <div class="sgr-body">
  <p class="sgr-details">{1}</p>
  <br>
  <p class="sgr-more-details">{2}</p>
 </div>
 `;

  if (!title) throw new Error("Asgar Alert:title is required");
  if (!right) throw new Error("Asgar Alert:right is required");
  const asgar = document.getElementById("asgar-alert");
  let state = ``;
  function changeAsgar() {
    if (asgar.classList.contains("mini-asgar")) {
      asgar.classList.remove("mini-asgar");
    }
    if (!asgar.classList.contains("mega-asgar")) {
      asgar.classList.add("mega-asgar");
    }
  }
  const template = `
  <form id="sgr-dialog" class="sgr-mega">
    <header>
      <p class="sgr-heading">{0}</p>
    </header>
  ${message || details ? body : ""}
    <footer>
  ${
    left
      ? `  <button type="button" class="sgr-left" name="sgrleft">{3}</button>`
      : ""
  }
     <button type="button" class="sgr-left" name="sgrright">{4}</button>
    </footer>
  </form>
  `;
  function clearAsgar() {
    asgar.removeAttribute("class");
  }
  function removeMega() {
    state = ``;
  }
  function changeState(temp) {
    state = formatString(temp, title, message, details, left, right);
  }
  function render() {
    asgar.innerHTML = state;
  }
  function fadeOut() {
    if (!asgar.classList.contains("sgr-fade-out")) {
      asgar.classList.add("sgr-fade-out");
    }
  }
  function finish() {
    fadeOut();
    setTimeout(function () {
      removeMega();
      render();
      clearAsgar();
    }, 450);
  }
  return new Promise((resolve, reject) => {
    changeAsgar();
    changeState(template);
    render();
    const form = document.getElementById("sgr-dialog");
    if (left) {
      form.sgrleft.addEventListener("click", () => {
        reject();
        finish();
      });
    }
    form.sgrright.addEventListener("click", () => {
      resolve();
      finish();
    });
  });
}

function main() {
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML = body.innerHTML + mainHtml;
  body.innerHTML = body.innerHTML + mainStyle;
}
main();
window.__proto__.asgar = function (data, details, type, duration) {
  const asgarType = typeof data;
  if (asgarType === "string") new Mini(data, details, type, duration);
  else if (asgarType === "object") return mega(data);
};
