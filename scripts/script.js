
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
        console.log(completedTask);    
        completedTask += 1;
        setTextbyId("completed-task", completedTask);

        alert("Board updated successfully");

        if(remainingTask===0){

            setTimeout(() =>{

                alert("Congrats!!! You have completed all the task");

            } , 400);   
        }

        let time= new Date().toLocaleTimeString();
        


    })
}