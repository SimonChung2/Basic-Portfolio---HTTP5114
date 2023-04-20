window.onload = function () {

    var header = document.getElementById("header");
    var projects = document.getElementById("proj");
    var work = document.getElementById("work");
    var edu = document.getElementById("edu");
    var contact = document.getElementById("contact");


    var palette1 = document.getElementById("palette1");
    var palette2 = document.getElementById("palette2");
    console.log(palette2);

    palette1.onclick = pal1;
    palette2.onclick = pal2;

    function pal2(){
        header.style.background = "black";
        projects.style.background = "yellow";
        work.style.background = "green";
        edu.style.background = "white";
        contact.style.background = "aquamarine";
    }

    function pal1(){
        header.style.background = "#011627";
        projects.style.background = "#EEEEFF";
        work.style.background = "#c0a50b";
        edu.style.background = "white";
        contact.style.background = "#177E89";
    }

}