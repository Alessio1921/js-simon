let h1=document.getElementById("number");
let text=document.getElementById("text");
let numberRandom=[];

for (let i = 0; i < 5; i++) {
  numberRandom.push(random(1, 99));
  h1.innerHTML+=` ${numberRandom[i]} ;`
}
console.log(numberRandom)
setTimeout(removeNumber,30000,h1,text);

setTimeout(user,31000, numberRandom, h1,text);


function removeNumber(h1Temp,textTemp){
  h1Temp.innerHTML='';
  textTemp.innerHTML="";
}

function random(min ,max){
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function user(numberRandomTemp,h1Temp,textTemp){
  let numberUser=[];
  let counter=0;
  textTemp.innerHTML=`Hai indovinato i numeri:`
  for (let i = 0; i < 5; i++) {
    let n=parseInt(prompt(`inserisci il ${i+1} numero`));
    while(isNaN(n)){
      n=parseInt(prompt(`inserisci il ${i+1} numero`));
    }
    numberUser.push(n);
    if(numberRandomTemp[i]==numberUser[i]){
      h1Temp.innerHTML+=`${numberUser[i]} che era il ${i+1}° numero. <br>`
    }
    else {
      counter++;
    }
  }  
  if(counter==numberRandomTemp.length){
    textTemp.innerHTML="";
    h1Temp.innerHTML=`Game over`;
  }
  
  console.log(numberUser);  
  
  return numberUser;
}
