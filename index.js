var draw;
function Draw() {
    this.config = {};
    this.canvas;
    this.cvsCfg = {};
    this.objDraw = "div";
    this.isDraw = 0;
    this.init = function(x, y, width, height, dom) {
        var canvasDom;
        this.cvsCfg.x = x;
        this.cvsCfg.y = y;
        this.cvsCfg.width = width;
        this.cvsCfg.height = height;
        this.cvsCfg.centerX = x + this.cvsCfg.width/2;
        this.cvsCfg.centerY = x + this.cvsCfg.height/2;

        canvasDom = document.createElement(this.objDraw);
        canvasDom.style.display = "block";
        canvasDom.style.position = "absolute";
        canvasDom.style.left = x;
        canvasDom.style.top = y;
        canvasDom.style.width = width;
        canvasDom.style.height = height;
        dom.appendChild(canvasDom);
        this.canvas = canvasDom;

    };
    this.dot = function(args) {
        var x, y, dotDom, style;
        x = args[0];
        y = args[1];
        style = args[2];
        if(this.isDraw == 1) {
            dowDom = document.createElement(this.objDraw);
            dowDom.setAttribute('style', style);
            dowDom.style.display = "block";
            dowDom.style.position = "absolute";
            dowDom.style.left = x;
            dowDom.style.top = y;
            this.canvas.appendChild(dowDom);
            return true;
        } else {
            return false;
        }
    };

    this.line = function(args) {

    };

    this.circle = function(args) {

    };
    this.rectangle = function(args) {

    };
    this.triangle = function(args) {

    };

    this.bindAction = function(dom, actType, args) {
        if(actType == 0) {

        } else if(actType == 1) {

        } else if(actType == 2) {

        }
    }
}