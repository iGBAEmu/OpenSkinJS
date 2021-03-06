// OpenSkinJS (c) HeyItsShuga. Licensed under MIT.
console.log("[OpenSkin] Loading application \"" + openskin + "\"");

function sanLite(str) {
  str = String(str).replace(/undefined|nil|null|\<|\>|\{|\}/g,"");
  return str;
}
function sanCustom(str) {
  str = String(str).replace(/undefined|nil|null/g,"");
  return str;
}

var OpenSkin_jsonContents;
var OpenSkin_jsonAppName = openskin;
function OpenSkin() {
  this.application = openskin

  // default: remote JSON file
  this.get = function(url, loadAfter) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    request.onload = function() {
        request.onerror = function() {
            throw "Invalid URL."
        }
        if (request.status >= 200 && request.status < 400) {
            OpenSkin_jsonContents = JSON.parse(request.responseText);
        } else {
            throw "Can't access data."
        }
        if(loadAfter == true) {
            OpenSkin.load()
        }
        return OpenSkin_jsonContents;
        }
    }
    
  
   // import via remote JSON file
   // duplicate of this.get so removing!
    this.getJSON = function(url, loadAfter) { 
        this.get(url, loadAfter);
        return OpenSkin_jsonContents;
    }
   this.getStr = function(str, loadAfter) {
     OpenSkin_jsonContents = JSON.parse(str);
     if(loadAfter == true) {
        this.load()
     }
     return OpenSkin_jsonContents;
    }
   // import via object
   this.getObj = function(str, loadAfter) {
    OpenSkin_jsonContents = str;
    if(loadAfter == true) {
        this.load()
    }
    return OpenSkin_jsonContents;
   }

  this.load = function() {
    var element = "";

    element += ".navbar {" + sanLite(OpenSkin_jsonContents.styles[0].header) + ";" + "}";
    element += "body {" + sanLite(OpenSkin_jsonContents.styles[0].label) + "}";
    element += ".list-button, .button, .active {" + sanLite(OpenSkin_jsonContents.styles[0].button) + "}";
    element += ".modal {" + sanLite(OpenSkin_jsonContents.styles[0].alert) + "}";
    element += ".page-content {" + sanLite(OpenSkin_jsonContents.styles[0].containerBackground) + "}";
    element += ".item-content, .card, .swiper-slide {" + sanLite(OpenSkin_jsonContents.styles[0].cell) + "}";
    element += ".item-after {" + sanLite(OpenSkin_jsonContents.styles[0].cellChevron) + "}";
    element += ".toolbar {" + sanLite(OpenSkin_jsonContents.styles[0].toolbar) + "}";
    // iGBA methods are officially in the OpenSkin spec.
    element += "#emulatorPopup {" + sanLite(OpenSkin_jsonContents.styles[0].emulatorBackground) + ";" + "}";
    element += "#emulatorTarget {" + sanLite(OpenSkin_jsonContents.styles[0].emulatorScreen) + ";" + "}";
    element += "#triggerL {" + sanLite(OpenSkin_jsonContents.styles[0].triggerL) + "}";
    element += "#triggerR {" + sanLite(OpenSkin_jsonContents.styles[0].triggerR) + "}";
    element += "#center {" + sanLite(OpenSkin_jsonContents.styles[0].center) + "}";
    element += "#right {" + sanLite(OpenSkin_jsonContents.styles[0].right) + "}";
    element += "#left {" + sanLite(OpenSkin_jsonContents.styles[0].left) + "}";
    element += "#up {" + sanLite(OpenSkin_jsonContents.styles[0].up) + "}";
    element += "#down {" + sanLite(OpenSkin_jsonContents.styles[0].down) + "}";
    element += "#aBtn {" + sanLite(OpenSkin_jsonContents.styles[0].aBtn) + "}";
    element += "#bBtn {" + sanLite(OpenSkin_jsonContents.styles[0].bBtn) + "}";
    element += "#startbtn {" + sanLite(OpenSkin_jsonContents.styles[0].startBtn) + "}";
    element += "#select {" + sanLite(OpenSkin_jsonContents.styles[0].select) + "}";

    if(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName]) {
      element += ".navbar {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].header) + ";" + "}";
      element += "body {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].label) + "}";
      element += ".list-button, .button, .active {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].button) + "}";
      element += ".modal {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].alert) + "}";
      element += ".page-content {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].containerBackground) + "}";
      element += ".item-content, .card, .swiper-slide {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cell) + "}";
      element += ".item-after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cellChevron) + "}";
      element += ".toolbar {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].toolbar) + "}";
      // iGBA methods are officially in the OpenSkin spec.
      element += "#emulatorPopup {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].emulatorBackground) + ";" + "}";
      element += "#emulator_target {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].emulatorScreen) + ";" + "}";
      element += "#triggerL {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].triggerL) + "}";
      element += "#triggerR {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].triggerR) + "}";
      element += "#center {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].center) + "}";
      element += "#right {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].right) + "}";
      element += "#left {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].left) + "}";
      element += "#up {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].up) + "}";
      element += "#down {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].down) + "}";
      element += "#aBtn {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].aBtn) + "}";
      element += "#bBtn {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].bBtn) + "}";
      element += "#startbtn {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].startBtn) + "}";
      element += "#select {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].select) + "}";
    }

    // Custom CSS
    try {
      element += sanCustom(OpenSkin_jsonContents.styles[0].custom[0][OpenSkin_jsonAppName])
    } catch(n) {}

    if(document.getElementById("openskin_stylesheet")) {
      document.getElementById("openskin_stylesheet").innerHTML = element;
    } else {
      var style = document.createElement("style");
      style.id = "openskin_stylesheet";
      style.innerHTML = element;
      document.head.appendChild(style);
    }

    return true
  }
  this.skin = function(url) {
      return OpenSkin_jsonContents;
  }
}

var OpenSkin = new OpenSkin();
