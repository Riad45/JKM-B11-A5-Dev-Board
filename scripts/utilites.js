function innerTextToNumById ( id){
   const textNumber = document.getElementById(id).innerText;
   const convertedNumber = parseInt(textNumber);

   return convertedNumber;

}

function getTextById (id){
    const text = document.getElementById(id).innerText;
    return text;
}

function setTextbyId(id , text){
     document.getElementById(id).innerText= text;
}


function getRandomLightColor() {
    const r = Math.floor(Math.random() * 76) + 180; 
    const g = Math.floor(Math.random() * 76) + 180; 
    const b = Math.floor(Math.random() * 76) + 180; 
    return `rgb(${r}, ${g}, ${b})`;
  }