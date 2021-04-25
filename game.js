var a=[];
var ans, game=document.querySelector('.game');
var t, timer=document.querySelector('.timer'), T;
var score=-1, scores=[], Score=document.querySelector('.score');
var rule=document.querySelector('.rule');
function play(){
    var s=0;
    for(var i=4; i>=0; --i)s=s*2+a[i];
    if(s!=ans)return;
    ++score;
    var A='';
    for(var i=4; i>=0; --i)A+=String(a[i])+' ', a[i]=0;
    scores.push(String(score)+'. '+String(ans)+' = '+A+', time: '+String((t/10).toFixed(1))+'<br>');
    ans=Math.floor(Math.random()*31+1);
    upd();
}
function upd(){
    var A='';
    for(var i=4; i>=0; --i)A+=String(a[i])+' ';
    game.textContent=String(ans)+' = '+A;
    Score.textContent='Score: '+String(score);
}
function tupd(){
    ++t;
    timer.textContent='Time: '+String((60-t/10).toFixed(1));
    if(t==600)end();
}
function start(){
    ans=t=0, scores=[], a=[0, 0, 0, 0, 0], rule.textContent='';
    play();
    T=setInterval(tupd, 100);
}
function end(){
    clearInterval(T);
    game.textContent='';
    timer.textContent='';
    rule.textContent='按D重新開始';
    var A='';
    for(var i=score; i>0; --i)A+=scores[i];
    Score.innerHTML=A;
    score=-1;
}
var b=['Semicolon', 'KeyL', 'KeyK', 'KeyJ', 'Space'];
document.addEventListener('keydown', function(evt){
    if(evt.code=='KeyD'){
        end();
        start();
        return;
    }
    if(score==-1)return;
    if(evt.code=='KeyF'){
        play();
        return;
    }
    for(var i=0; i<5; ++i)if(evt.code==b[i])a[i]=1-a[i];
    upd();
})
rule.addEventListener('mouseover', function(){
    rule.innerHTML="按下D鍵開始遊戲<br>'Space', 'J', 'K', 'L', ';'<br>分別為16, 8, 4, 2, 1位<br>按下後改變那一位的數值<br>完成題目給定的數字後<br>按下F鍵送出";
})
rule.addEventListener('mouseleave', function(){
    rule.innerHTML='遊戲規則';
})