var index= 0;

function x(){
    var g = ["red","green","blue","yellow","black","orange","purple"];
    document.getElementsByTagName("div")[0].style.background=g[index++];
    if(index>g.length-1)
    index=0;
}