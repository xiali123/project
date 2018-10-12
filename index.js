function Draw() {
    this.config = {};
    this.canvas = {};
    this.cvsCfg = {};
    this.cvsCfg.shape = {};
    this.objDraw = "div";
    this.isDraw = 0;
    this.init = function(x, y, width, height, dom, type) {
        var canvasDom,i,dotx,doty,mycars0,mycars1,mycars2,mycars3,xy,j;
        this.cvsCfg.x = x;
        this.cvsCfg.y = y;
        this.cvsCfg.width = width;
        this.cvsCfg.height = height;
        this.cvsCfg.centerX = Math.floor(this.cvsCfg.width/2);
        this.cvsCfg.centerY = Math.floor(this.cvsCfg.height/2);
        this.cvsCfg.left = 0;
        this.cvsCfg.right = width;
        this.cvsCfg.top = 0;
        this.cvsCfg.bottom = height;

        canvasDom = document.createElement(this.objDraw);
        canvasDom.style.display = "block";
        canvasDom.style.position = "absolute";
        canvasDom.style.left = x+"px";
        canvasDom.style.top = y+"px";
        canvasDom.style.width = (width*0.8)+"px";
        canvasDom.style.height = (height*0.8)+"px";
        canvasDom.style.border = "1px solid #000000";
        canvasDom.style.zIndex = "-9999";
        canvasDom.style.overflow = "hidden";
        dom.appendChild(canvasDom);
        this.canvas = canvasDom;

        this.isDraw = 1;
        this.block(type);
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

    this.line = function(argss) {
        var startX, endX,startY, endY,dowDom, lineWeight,lineLen, color,width, height,Deg, lineDeg,cx,cy,linex, liney, lx, ly;
        startX = argss[0];
        endX = argss[1];
        startY = argss[2];
        endY = argss[3];
        linex = (startX + endX) / 2;
        liney = (startY + endY) / 2;

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
                    lineDeg = Math.PI /2;
                }
            } else if(cy == 0) {
                if(cx == 1) {
                    lineDeg = 0;
                } else if(cx == -1)  {
                    lineDeg = Math.PI /2;
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
        lx = linex - lineLen /2;
        ly = liney;

        this.createDraw(lx, ly, lineLen, 1, 1, lineDeg);


    };

    //画图区分块
    this.block = function(type) {
        var mycars,width, height;
        width = this.cvsCfg.width;
        height = this.cvsCfg.height;
        mycars = new Array();
        if(type == 8) {
            mycars[0] = width*0.8/2;
            mycars[1] = width*0.8/2;
            mycars[2] = 0;
            mycars[3] = height*0.8;
            this.line(mycars);
            mycars[0] = 0;
            mycars[1] = width*0.8;
            mycars[2] = height*0.8/2;
            mycars[3] = height*0.8/2;
            this.line(mycars);
            mycars[0] = 0;
            mycars[1] = width*0.8;
            mycars[2] = height*0.8;
            mycars[3] = 0;
            this.line(mycars);
            mycars[0] = 0;
            mycars[1] = width*0.8;
            mycars[2] = 0;
            mycars[3] = height*0.8;
            this.line(mycars);
        } else if(type == 4) {
            mycars[0] = width*0.8/2;
            mycars[1] = width*0.8/2;
            mycars[2] = 0;
            mycars[3] = height*0.8;
            this.line(mycars);
            mycars[0] = 0;
            mycars[1] = width*0.8;
            mycars[2] = height*0.8/2;
            mycars[3] = height*0.8/2;
            this.line(mycars);
        }
    }

    //画圆
    this.circle = function() {
        var r, cx, cy, ox,oy,dowDom,isPadding,type,deg,i,k,args, j;
        cx = arguments[0];
        cy = arguments[1];
        r = arguments[2];
        type = arguments[3];
        this.cvsCfg.shape.cx = cx;
        this.cvsCfg.shape.cy = cy;
        if(type == 0) {
            //不支持填充
            this.isDraw = 1;
            deg = Math.atan(1/r);
            k = 2*Math.PI;
            args = new Array();
            j = 1;
            for(i =0; i<k; i += deg, j++) {
                ox = r * Math.cos(i);
                oy = r * Math.sin(i);
                ox = ox + cx;
                oy = oy + cy;
                args[0] = ox;
                args[1] = oy;
                this.dot(args);
            }
            this.isDraw = 0;
        } else if(type == 1) {
            //填充
            ox = cx - r;
            oy = cy;
            dowDom = this.createDraw(ox, oy, 2*r, 2*r, 1, "");
            dowDom.style.borderRadius = "50%";
            dowDom.style.border = "1px solid #000000";
            dowDom.style.background = "#FFFFFF";
            dowDom.style.zIndex = "-9998";
        }
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
        if(lineDeg != "" && lineDeg != "undefined") {
            dowDom.style.transform = "rotate("+lineDeg+"deg)";
        }
        return dowDom;
    }
}

