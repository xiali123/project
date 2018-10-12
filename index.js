function Draw() {
    this.config = {};
    this.canvas;
    this.cvsCfg = {};
    this.objDraw = "div";
    this.isDraw = 0;
    this.init = function(x, y, width, height, dom) {
        var canvasDom,i,dotx,doty,args,xy,j;
        this.cvsCfg.x = x;
        this.cvsCfg.y = y;
        this.cvsCfg.width = width;
        this.cvsCfg.height = height;
        this.cvsCfg.centerX = x + Math.floor(this.cvsCfg.width/2);
        this.cvsCfg.centerY = x + Math.floor(this.cvsCfg.height/2);
        this.cvsCfg.left = x;
        this.cvsCfg.right = x + width;
        this.cvsCfg.top = y;
        this.cvsCfg.bottom = y + height;

        canvasDom = document.createElement(this.objDraw);
        canvasDom.style.display = "block";
        canvasDom.style.position = "absolute";
        canvasDom.style.left = x+"px";
        canvasDom.style.top = y+"px";
        canvasDom.style.width = (width*0.8)+"px";
        canvasDom.style.height = (height*0.8)+"px";
        canvasDom.style.border = "1px solid #000000";
        dom.appendChild(canvasDom);
        this.canvas = canvasDom;

        this.isDraw = 1;
        args = new Array();
        /*args[0] = this.cvsCfg.width/2;
        args[1] = 0;
        args[2] = this.cvsCfg.width/2;
        args[3] = this.cvsCfg.height;
        args[4] = "";
        args[5] = "";
        this.line(args);

        args[0] = this.cvsCfg.left;
        args[1] = this.cvsCfg.centerY;
        args[2] = this.cvsCfg.right;
        args[3] = this.cvsCfg.centerY;

        this.line(args);*/
        args[0] = 0;
        args[1] = height*0.8;
        args[2] = width*0.8;
        args[3] = 0;

        this.line(args);
        args[0] = 0;
        args[1] = width*0.8;
        args[2] = 0;
        args[3] = height*0.8;

        this.line(args);

        this.isDraw = 0;

    };
    this.dot = function(args) {
        var x, y,dowDom ,style;
        x = args[0];
        y = args[1];
        if(this.isDraw == 1) {
            dowDom = document.createElement(this.objDraw);
            //dowDom.setAttribute('style', style);
            dowDom.style.display = "block";
            dowDom.style.position = "absolute";
            dowDom.style.left = x+"px";
            dowDom.style.top = y+"px";
            dowDom.style.width = "1px";
            dowDom.style.height = "1px";
            dowDom.style.border = "1px solid #000000";
            this.canvas.appendChild(dowDom);
            return true;
        } else {
            return false;
        }
    };

    this.line = function(args) {
        var startX, endX,startY, endY,dowDom, lineWeight,lineLen, color,width, height,Deg, lineDeg,cx,cy,linex, liney;
        startX = args[0];
        endX = args[1];
        startY = args[2];
        endY = args[3];
        lineWeight = args[4];
        color = args[5];


        //计算线条的长度
        width = Math.abs(startX - endX);
        height = Math.abs(startY - endY);
        lineLen = Math.sqrt(width*width + height*height);

        if(startX > endX) {
            cx = -1;
        } else if(startX == endX) {
            cx = 0;
        } else {
            cx = 1;
        }

        if(startY > endY) {
            cy = -1;
        } else if(startY == endY) {
            cy = 0;
        } else {
            cy = 1;
        }


        if(cy == 0 || cx == 0) {
            if(cx == 0) {
                if(cy == 1) {
                    lineDeg = Math.PI /2;
                } else if(cy == -1)  {
                    lineDeg = Math.PI /2 * 3;
                }
            } else if(cy == 0) {
                if(cx == 1) {
                    lineDeg = Math.PI /2;
                } else if(cx == -1)  {
                    lineDeg = Math.PI /2 * 3;
                }
            }
        } else {
            //计算线条的旋转角度
            Deg = Math.atan(height/width) % Math.PI;
            if(cx == 1) {
                if(cy == 1) {
                    lineDeg = Deg;
                } else if(cy == -1) {
                    lineDeg = 2*Math.PI - Deg;
                }
            } else if(cx == -1) {
                if(cy == 1) {
                    lineDeg = Math.PI - Deg;
                } else if(cy == -1) {
                    lineDeg = Math.PI + Deg;
                }
            }

        }

        lineDeg = lineDeg / Math.PI * 180;


        linex = -(lineLen - width)/2;
        liney = height/2;
        dowDom = this.createDraw(linex, liney, lineLen, 1, 1, lineDeg);

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
    this.createDraw = function(x, y, width, height, linewidth, lineDeg) {
        var dowDom;
        dowDom = document.createElement(this.objDraw);
        //dowDom.setAttribute('style', style);
        this.canvas.appendChild(dowDom);
        dowDom.style.display = "block";
        dowDom.style.position = "absolute";
        dowDom.style.left = x+"px";
        dowDom.style.top = y+"px";
        dowDom.style.width = width+"px";
        dowDom.style.height = height + "px";
        dowDom.style.border = "none";
        dowDom.style.background = "#000000";
        if(lineDeg != "") {
            dowDom.style.transform = "rotate("+lineDeg+"deg)";
        }
        return dowDom;
    }
}

