var randomNumber1=Math.floor(Math.random()*6)+1;

var randomimage="dice"+randomNumber1+".png";

var source="images/"+randomimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",source);


var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimage2="dice"+randomnumber2+".png";

var source2="images/"+randomimage2;
    
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",source2);

if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 won 🚩";
}
else if(randomNumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 won 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw 🚩"
}