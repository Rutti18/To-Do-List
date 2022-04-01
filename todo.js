var todoListArray = ['item 1','item 2','item 3'];

var ulTag = document.getElementById('todoList'); // GET UL TAG

// loading the values and creating the li tag/ element  dynamically using this function

loadValues();

function loadValues(){
    for (let i = 0; i <= todoListArray.length - 1; i++) {
        var newLi = document. createElement("li");
        newLi.setAttribute("id", "item"+i);
        newLi.setAttribute("onclick", "addStripeAndRemove("+i+",item"+i+")");

        newLi. appendChild(document.createTextNode(todoListArray[i]));
        ulTag. appendChild(newLi);
    }
}

function addnewtodo(){

    document.getElementById('todoList').innerText = ''; // clearing old list from html
    
    var imputvalue = document.getElementById('inputtext').value; // get input value

    document.getElementById('inputtext').value = ''; // clear input value

    todoListArray.push(imputvalue); // pusing the textbox value to todoListArray array
    console.log(todoListArray);
    loadValues(); // reloading and recreating the list
}

function addStripeAndRemove(index,element){
    element.classList.add("strike"); // adding a class to selected li element  

    setTimeout(function() { // set timeout is a function that executes afer a milliseconds that given, here it executes after 3000 milliseconds. (3 seconds)
        removeNode(index);
    }, 3000);

    
}

function removeNode(index){
    document.getElementById('todoList').innerText = ''; // clearing old list from html
    todoListArray.splice(index, 1); // removing the value from the array by sending its index 
    console.log(todoListArray); 
    loadValues();// reloading and recreating the list
}

