var ball=document.getElementById("Ball");
ball.style.top=ball.offsetTop+"px";
ball.style.left=ball.offsetLeft+"px";
window.addEventListener('keypress',function(e){
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);   
    // d
    if(e.key==='d'|| e.key==='D'){
        ball.style.left=left+100+"px";
    }
    // a
    else if(e.key==='a' ||e.key==='A'){
        if(left>2)
        ball.style.left=left-100+"px";
    }
    // w
    else if(e.key==='w'|| e.key==='W'){
        if(top>2)
        ball.style.top=top-100+"px";
    }
    // s
    else if(e.key==='s'||e.key==='S'){
        ball.style.top=top+100+"px";
    }
})