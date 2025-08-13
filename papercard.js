var inv;
var paperCards = document.querySelectorAll('.papercard');

for(i=0, elementsNum = paperCards.length; i<=elementsNum; i++){
  if(i%2 === 1){
    inv = 1;
  }
  else{
    inv = -1;
  }
  var rand = Math.floor(Math.random()*1)  + inv;
  
  paperCards[i].style.transform = "rotate(" + rand + "deg)";
}


