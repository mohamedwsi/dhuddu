/* //DOCUMENT OBJECT MODEL [DOM]

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

const views = document.getElementsByClassName("view");
console.log(views);

const sameviews = document.querySelectorAll(".view");
console.log(sameviews);

view1.style.display = "flex";
view2.style.display = "none";

const divs =view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs =view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
evenDivs[0].style.backgroundColor = "purple";

for (i=0; i<evenDivs.length; i++){
    evenDivs[i].style.width ="150px";
    evenDivs[i].style.backgroundColor="green";
}

const navText =document.querySelector("nav h1");
console.log(navText);
navText.textContent="heloo world";
const navBar =  document.querySelector("nav");
navBar.innerHTML ='<h1>WASIM</h2> <p>Subscribe</p>'
navBar.style.display="flex";
navBar.style.justifyContent="space-evenly";

console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[1].previousElementSibling.previousElementSibling);

view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="10px";

 */
/* console.log(view2.lastElementChild);
view2.lastElementChild.remove(); */
//or
/* while (view2.lastChild){
    view2.lastChild.remove();
}




const creatDiv =(parent,i) =>{
    const newDiv =document.createElement("div");
    newDiv.textContent=i;
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    newDiv.style.backgroundColor="lightsteelblue";
    newDiv.style.color="steelblue";
    newDiv.style.width="100px";
    newDiv.style.height="100px";
    newDiv.style.margin="10px";
    parent.append(newDiv);
}


for (i=1;i<11;i++){
    creatDiv(view2,i);
} */


//EVENT LISENERS

const view = document.querySelector("#view1");
console.log(view);

const div =view.querySelector("div");
const h2 =div.querySelector("h2");
console.log(div);
console.log(h2);


/* const funcadd = () => {
    alert("ding ding");
}
h2.addEventListener("click",funcadd,false);
h2.removeEventListener("click",funcadd,false);



h2.addEventListener("click",(event)=>
{
    console.log(event.target);
    event.target.textContent = "Subscribed";
}); */

//bubbling (up,down)
document.addEventListener("readystatechange",(event)=>
{
    if(event.target.readyState==="complete"){
        console.log("complete");
        initApp();
    };
});

initApp =()=>{
   
    const view = document.querySelector("#view1");
    console.log(view);

    const div =view.querySelector("div");
    const h2 =div.querySelector("h2");
    
    
    view.addEventListener("click",(event)=>
    {
       // event.stopPropagation();
       view.classList.add("red");
       view.classList.remove("lightgrey");

    },/* true */);

    div.addEventListener("click",(event)=>
    {
        
        div.classList.toggle("snow");
        div.classList.toggle("black");
    },/* true */);

    h2.addEventListener("click",(event)=>
    {
       const myText = event.target.textContent;
       myText==="Subscribe" ? (event.target.textContent="Subscribed"):(event.target.textContent="Subscribe")
    },/* true */);
}


//WEB STORAGE API

document.addEventListener("readystatechange",(webevent)=>{
    if (webevent.target.readyState==="complete"){
        console.log("complete");
        initAppp();
    };
});

initAppp =()=>{
    myContent=["1","2","3","4"];
    myObj={
        name1:"Was",
        myContent:["1","2","3","4"],
        fu : ()=>{console.log(name1);}
};

window.sessionStorage.setItem("sessionStorage",JSON.stringify(myObj));
const Storage = JSON.parse(sessionStorage.getItem("sessionStorage"));
console.log(Storage);
}


