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

// console.log(innerTextToNumById("completed-task"));
// console.log(getTextById("completed-task"));

// function activityHistoryUpdate(){
//     document.getElementsByClassName("")
// }