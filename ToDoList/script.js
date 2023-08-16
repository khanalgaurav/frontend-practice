
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const itemsLeft=document.getElementById("items-left");
var count=0;

function itemscount(){
    var count=0;
    var i=0;
    // for(i=0;i<listContainer.tagName==="LI";i++){
    //     count+=1
    // }
    // return count;
}


let p=document.createElement('p');
 
function addTask(){
    if(inputBox.value ===''){
        alert("Write somthing then add dumb");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
        count++;
        var items_count=count + " items left";
        p.innerHTML=items_count;
        itemsLeft.appendChild(p);
    }
    inputBox.value="";
    savedata()
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        count--; 
        var items_count=count + " items left";
        p.innerHTML=items_count;
        itemsLeft.appendChild(p);
        savedata()
    }

},false)



function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
    console.log(localStorage.getItem("data"));
}
showtask(); 
