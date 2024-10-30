var index= 0;

function x(){
    var g = ["red","green","blue","yellow","white","black","orange","purple"];
    document.getElementsByTagName("body")[0].style.background=g[index++];
    if(index>g.length-1)
    index=0;
}