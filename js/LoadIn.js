function LoadIn() {
    var srcArr = new Array();
    this.load = function(dst) {
        document.write("<script src='"+dst+"'></script>");
    };

    this.loadAll = function() {
        var i,src;
        if(this.srcArr.length == 0) return false;
        for(i = 0; i < this.srcArr.length; i++) {
            src = "Image"+this.srcArr.length[i]+".js";
            this.load(src);
        }
    };

    this.loadArr = function(srcArray) {
        this.srcArr = srcArray;
    };

    this.exec = function(srcArray) {
        this.loadArr(srcArray);
        this.loadAll();
    }
}

