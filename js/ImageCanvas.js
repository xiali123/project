function ImageCanvas() {
    var cvs = {};
    var cvsStr = "canvas";
    var myConfig = {
        'width': 200,
        'height': 200,
        'border': 1,
        'isPadding': false,
        'padding': "#FFFFFF",
        'borderWidth': 1,
        'borderColor': "#000000"
    };

    this.setConfig = function(cfg) {
        var i;
        for(i in cfg) {
            if(this.myConfig[i] == "undefined" || this.myConfig[i] == "") {
                this.myConfig[i] = cfg[i];
            }
        }
    };

    this.init = function(divDom) {
        this.cvs = document.createElement(this.cvsStr);

    }
}