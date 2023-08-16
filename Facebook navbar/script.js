
const link11=document.getElementById("l1");
const link22=document.getElementById("l2");
const link33=document.getElementById("l3");
const link44=document.getElementById("l4");
const link55=document.getElementById("l5");

const linka=document.getElementById("a1");
const linkb=document.getElementById("a2");
const linkc=document.getElementById("a3");
const linkd=document.getElementById("a4");
const linke=document.getElementById("a5");

const navLink=document.getElementById("nav-list");

// function changeColor(event){
//     // event.preventDefault();
//     event.target.classList.toggle("toggle");
// }
// navLink.addEventListener("click",function(e){
//     e.preventDefault();
//     e.target.classList.toggle("toggle");
// });
// navlink.addEventListener("click",changeColor);

function link1(){linka.style.color="blue";
link11.style.borderBottom="5px solid blue";
linkb.style.color="#b0b3b8";
link22.style.borderBottom="none";
linkc.style.color="#b0b3b8";
link33.style.borderBottom="none";
linkd.style.color="#b0b3b8";
link44.style.borderBottom="none";
linke.style.color="#b0b3b8";
link55.style.borderBottom="none";
}
function link2(){linkb.style.color="blue";
link22.style.borderBottom="5px solid blue";

linka.style.color="#b0b3b8";
link11.style.borderBottom="none";
linkc.style.color="#b0b3b8";
link33.style.borderBottom="none";
linkd.style.color="#b0b3b8";
link44.style.borderBottom="none";
linke.style.color="#b0b3b8";
link55.style.borderBottom="none";
}

function link3(){ linkc.style.color="blue";
link33.style.borderBottom="5px solid blue";

linka.style.color="#b0b3b8";
link11.style.borderBottom="none";
linkb.style.color="#b0b3b8";
link22.style.borderBottom="none";
linkd.style.color="#b0b3b8";
link44.style.borderBottom="none";
linke.style.color="#b0b3b8";
link55.style.borderBottom="none";
}

function link4(){linkd.style.color="blue";
link44.style.borderBottom="5px solid blue";

linka.style.color="#b0b3b8";
link11.style.borderBottom="none ";
linkb.style.color="#b0b3b8";
link22.style.borderBottom="none";
linkc.style.color="#b0b3b8";
link33.style.borderBottom="none";
linke.style.color="#b0b3b8";
link55.style.borderBottom="none";
}

function link5(){linke.style.color="blue";
link55.style.borderBottom="5px solid blue";

linka.style.color="#b0b3b8";
link11.style.borderBottom="none";
linkb.style.color="#b0b3b8";
link22.style.borderBottom="none";
linkc.style.color="#b0b3b8";
link33.style.borderBottom="none";
linkd.style.color="#b0b3b8";
link44.style.borderBottom="none";
}

link11.addEventListener("click", link1);
link22.addEventListener("click", link2);
link33.addEventListener("click", link3);
link44.addEventListener("click", link4);
link55.addEventListener("click", link5);