var Image = {};
Image.loadFile = "LoadIn.js";
document.write("<script src='"+Image.loadFile+"'></script>");

Image.srcArray = new Array();
Image.srcArray[0] = "Canvas";
Image.srcArray[1] = "Dashed";
Image.srcArray[2] = "Draw";
Image.srcArray[3] = "DrawShape";

Image.loadIn = new LoadIn();
Image.loadIn.exec(Image.srcArray);

