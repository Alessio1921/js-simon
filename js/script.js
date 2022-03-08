let h1=document.getElementById("number");
let numberRandom=[];
for (let i = 0; i < 5; i++) {
  numberRandom.push(random(1, 99));
  h1.innerHTML+=` ${numberRandom[i]} ;`
}
console.log(numberRandom)
setTimeout(removeNumber,3000,h1);

setTimeout(user,4000, numberRandom);

function removeNumber(numbers){
  numbers.innerHTML='';
}
function random(min ,max){
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}
function user(numberRandomTemp){
  let numberUser=[];
  h1.innerHTML+=`hai indovintao i numeri: `
  for (let i = 0; i < 5; i++) {
    numberUser.push(prompt(`inserisci il ${i+1} numero`)); 
    if(numberRandomTemp[i]==numberUser[i]){
      h1.innerHTML+=`${numberUser[i]} `
    }
  }  
  console.log(numberUser);  
  
  return numberUser;
}
