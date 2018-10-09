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
        args[0] = this.cvsCfg.width/2;
        args[1] = 0;
        args[2] = this.cvsCfg.width/2;
        args[3] = this.cvsCfg.height;
        args[4] = "";
        args[5] = "";
        this.line(args);
        /*
        args[0] = this.cvsCfg.left;
        args[1] = this.cvsCfg.centerY;
        args[2] = this.cvsCfg.right;
        args[3] = this.cvsCfg.centerY;

        this.line(args);
        args[0] = this.cvsCfg.left;
        args[1] = this.cvsCfg.top;
        args[2] = this.cvsCfg.right;
        args[3] = this.cvsCfg.bottom;

        this.line(args);
        args[0] = this.cvsCfg.right;
        args[1] = this.cvsCfg.top;
        args[2] = this.cvsCfg.left;
        args[3] = this.cvsCfg.bottom;

        this.line(args);
        */
        this.isDraw = 0;

    };
    this.dot = function(args) {
        var x, y, dotDom,dowDom ,style;
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
        var startX, endX,startY, endY, lineWeight, color,i,j, dotArgs,width, height, xy,yx;
        dotArgs = new Array();
        startX = args[0];
        endX = args[1];
        startY = args[2];
        endY = args[3];
        lineWeight = args[4];
        color = args[5];
        width = startY - startX;
        height = endY - endX;
        xy = Math.abs(Math.floor(width / height));
        yx = Math.abs(Math.floor(height / width));
        for(i = startX, j = startY; i<= endX && j<=endY; ) {
            dotArgs[0] = i;
            dotArgs[1] = j;
            this.dot(dotArgs);console.log(this.canvas);
            if(xy > yx) {
                i += xy;
                j++;
            }else {
                j += yx;
                i++;
            }
            if(j > endY && i <= endX) {
                j = endY;
            }
            if(i > endX && j <= endY) {
                i = endX;
            }
        }
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

