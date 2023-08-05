function login_page(link){
    // console.log(link.value);
    location.href=link.value;
}
function gotolink(link){
 
    console.log(link.value);
    location.href=link.value;
    document.getElementById("navigation").style.right="-650px";
}

const open=document.getElementById("login-main");

function hide(){
    document.getElementById("login-main").style.display="none";
   
    document.getElementById("overlay").style.display="none";
}
function show(){
    document.getElementById("login-main").style.display="block";
    document.getElementById("overlay").style.display="block";
    document.getElementById("navigation").style.right="-650px";
}
function hidemenu(){
    document.getElementById("navigation").style.right="-650px";
}
function showmenu(){
    document.getElementById("navigation").style.right="0px";
}