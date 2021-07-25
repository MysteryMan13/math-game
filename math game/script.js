var h=0;
var m=0;
var s=0;

document.getElementById("hr").innerHTML=" "+h;
document.getElementById("min").innerHTML=" : "+m;
document.getElementById("sec").innerHTML=" : "+s;

setInterval(function() {
    s+=1;
    document.getElementById("sec").innerHTML=" : "+s;
    if(s>59)
    {
    m+=m=1;
    document.getElementById("min").innerHTML=" : "+m;
    s=0
    document.getElementById("sec").innerHTML=" : "+s;
    }
    if(m>59)
    {
    h+=h=1;
    document.getElementById("hr").innerHTML=" "+h;
    m=0
    document.getElementById("min").innerHTML=" : "+m;
    }

}, 1000)


var number1;
var number2;

number1= Math.floor((Math.random() * 100) + 1);
number2= Math.floor((Math.random() * 100) + 1);

document.getElementById("number1").innerHTML=number1;
document.getElementById("number2").innerHTML=number2;

var right=0;
var wrong=0;
var total=0;

document.getElementById("right").innerHTML="Right = "+right;
document.getElementById("wrong").innerHTML="Wrong = "+right;
document.getElementById("total").innerHTML="Total Attempt = "+total;


function checkSum(){
    var ans=number1+number2;
    var check=parseInt(document.getElementById("text").value);
    console.log(ans);
    console.log(check);
    total+=1;
    document.getElementById("total").innerHTML="Total Attempt = "+total;

    if(ans===check){
       // alert('Good!!! You are correct!!!');
        document.getElementById("result").innerHTML="<p>Good!!! You are correct!!!</p>".fontcolor("lime");
        right+=1;
        document.getElementById("right").innerHTML="Right = "+right;

    }
    else{
       // alert("You are Wrong Right Ans Is->"+ans);
        document.getElementById("result").innerHTML="You are Wrong Right Ans Is:-".fontcolor("darkRed");
        document.getElementById("result").innerHTML+=ans;

        wrong+=1;
        document.getElementById("wrong").innerHTML="Wrong = "+wrong;


    }
    document.getElementById("text").value=" ";

    number1= Math.floor((Math.random() * 100) + 1);
    number2= Math.floor((Math.random() * 100) + 1);
    document.getElementById("number1").innerHTML=number1;
    document.getElementById("number2").innerHTML=number2;





}