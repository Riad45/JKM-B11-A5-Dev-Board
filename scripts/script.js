
// completed task ...

const taskBtn = document.getElementsByClassName("task-btn");

for (const btn of taskBtn) {
    btn.addEventListener("click", function (event) {

        event.preventDefault();

        event.target.disabled = true;

        // update the remaining task
        let remainingTask = innerTextToNumById("remaining-task");
        remainingTask -= 1;
        setTextbyId("remaining-task", remainingTask);


        // update the completed task
        

        let completedTask = innerTextToNumById("completed-task");
        completedTask += 1;
        setTextbyId("completed-task", completedTask);

        alert("Board updated successfully");

        if(remainingTask===0){

            setTimeout(() =>{

                alert("Congrats!!! You have completed all the task");

            } , 400);   
        }


        // activity log 

        let taskCompletedTime= new Date().toLocaleTimeString();

        const card = event.target.closest(".task-box");
        const cardTitle = card.querySelector(".card-title").innerText;

        console.log(cardTitle);
        console.log(taskCompletedTime);


       let historyMsg = document.createElement("p");
       historyMsg.innerText= `You have completed the task ${cardTitle} at ${taskCompletedTime}`;
       historyMsg.classList.add("history-msg");
       document.getElementById("history").appendChild(historyMsg);



    })
}


// Clear activity log history

document.getElementById("clear-history-btn")
.addEventListener("click",function(){
    document.getElementById("history").innerHTML="";
})