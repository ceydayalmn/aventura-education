const body = document.querySelector("body");
const button = document.querySelector("button");
let red="";
let green="";
let blue="";


    function color(){
      
    var colorCode= prompt("Lütfen kaç adet renk kodu istediğinizi giriniz : ")
     for (let i = 1; i <= colorCode; i++){

         red=Math.round(Math.random(0)*255);
         green=Math.round(Math.random(0)*255);
         blue=Math.round(Math.random(0)*255);
         document.writeln( "rgb("+red+","+green +","+blue+")" + "<br>");
     }
        
    }

    