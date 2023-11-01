
 fetch("./litler.json").then((respons)=> respons.json() )
 .then((respons)=>{
     len=Object.keys(respons[0]).length
     nameKey=Object.keys(respons[0])[Math.floor(Math.random()*len)]
     namelength=respons[0][nameKey].length
selectName=respons[0][nameKey][Math.floor(Math.random()*namelength)]
selectName=selectName.toLowerCase()
myword=document.querySelector(".myword")
myword.innerHTML=`Word From Section:<span>${nameKey}</span>`

let boxse=document.querySelector(".boxes")
let count=-1;
for(let i=0;i<selectName.length;i++){
let mydiv=document.createElement("div")
mydiv.className="box1"
  boxse.appendChild(mydiv)
  }
  let box1=document.querySelectorAll(".box1")
span=document.querySelectorAll("span");
send=new Audio("./mixkit-fast-double-click-on-mouse-275.wav")
success=new Audio("./success-1-6297.mp3")
faild=new Audio("./wah-wah-sad-trombone-6347.mp3")
span.forEach(element => {
  element.onclick=function(){
    send.play()
    test(element.innerText)
    element.innerText=""
  }
});
let mytry=[]
function test(char){
  let k=selectName.indexOf(char);
  let index=[]
  while(k!==-1){
index.push(k)
k=selectName.indexOf(char,k+1)
  }
  if(selectName.indexOf(char)!==-1){
 for(let i=0;i<index.length;i++){
    box1[index[i]].innerHTML=char
    mytry[index[i]]=char
  };
    let re=new RegExp(selectName)
 if(re.test(mytry.join("")))
 showPopup()
    }
    else{
      count++;
      let myR=document.querySelector(`.r${count}`)
      let my7=document.querySelector(`.r7`)
      let my8=document.querySelector(`.r8`)
      if(count==0){
        myR.style.display="block"}
        else if(count==1){
          myR.style.display="block"
        }
        else if(count==2){
          myR.style.display="block"
        }
        else if(count==3){
          myR.style.display="block"
        }
        else if(count==4){
          myR.style.display="block"
        }
        else if(count==5){
          myR.style.display="block"
        }
        else if(count==6){
          myR.style.display="block";
          my7.style.display="block"
          my8.style.display="block"
          setTimeout(() => {
            document.querySelector(".hidden").style.display="grid";
            faild.play()
          }, 2000);
        }
        }
    }


document.querySelector(".Yes").onclick=function(){
  send.play()
  window.load()
}
function showPopup() {
  
  var popup = document.querySelector(".hdden");
  popup.classList.remove("hdden");
  success.play()
document.querySelector(".button").onclick=function(){
  send.play()
  mytry=[]
    [nameKey]=[nameKey].filter((el)=>el!==selectName)
    popup.classList.add("hdden")
    document.querySelectorAll(".box1").forEach((ele)=>{ele.remove()})
    let counter=97
    document.querySelectorAll(".box").forEach((ele)=>{ele.innerHTML=String.fromCharCode(counter);counter++})
    nameKey=Object.keys(respons[0])[Math.floor(Math.random()*len)]
    namelength=respons[0][nameKey].length
selectName=respons[0][nameKey][Math.floor(Math.random()*namelength)]
selectName=selectName.toLowerCase()
myword.innerHTML=`Word From Section:<span>${nameKey}</span>`
document.body.appendChild(myword)
let boxse=document.querySelector(".boxes")
for(let i=0;i<selectName.length;i++){
let mydiv=document.createElement("div")
mydiv.className="box1"
  boxse.appendChild(mydiv)
  }
span=document.querySelectorAll("span");
span.forEach(element => {
  element.onclick=function(){
    send.play()
    tes(element.innerText)
    element.innerText=""
  }
});
function tes(char){
  let k=selectName.indexOf(char);
  let index=[]
  while(k!==-1){
index.push(k)
k=selectName.indexOf(char,k+1)
  }
  if(selectName.indexOf(char)!==-1){
 for(let i=0;i<index.length;i++){
  
    document.querySelectorAll(".box1")[index[i]].innerHTML=char
    mytry[index[i]]=char
  };
    let re=new RegExp(selectName)
 if(re.test(mytry.join("")))
 showPopup()
    }
    else{
      count++;
      let myR=document.querySelector(`.r${count}`)
      let my7=document.querySelector(`.r7`)
      let my8=document.querySelector(`.r8`)
      if(count==0){
        myR.style.display="block"}
        else if(count==1){
          myR.style.display="block"
        }
        else if(count==2){
          myR.style.display="block"
        }
        else if(count==3){
          myR.style.display="block"
        }
        else if(count==4){
          myR.style.display="block"
        }
        else if(count==5){
          myR.style.display="block"
        }
        else if(count==6){
          myR.style.display="block";
          my7.style.display="block"
          my8.style.display="block"
          setTimeout(() => {
            document.querySelector(".hidden").style.display="grid";
            faild.play()
          }, 2000);
        }
        }
    }
}}})