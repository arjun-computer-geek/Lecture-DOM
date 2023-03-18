const input = document.getElementById('input');
const btn = document.querySelector("#btn");
const taskContainer = document.querySelector('#tasks');
const updateBtn = document.getElementById('updateBtn')
var children;
var count = 0;

function btnHandler() {
   
    // console.log(input.value)
    // taskContainer.innerHTML += '<p>' + input.value + ' <button class="delBtn" onclick="deleteHandler(this)">Delete</button>  </p>'
    if (input.value !== "")
        // taskContainer.innerHTML += `<p id=${count}> <span>${input.value}</span> <button class="delBtn" onclick="deleteHandler(this)">Delete</button> <button onclick="editHandler(this)">Edit</button></p>`
    input.value = ""
    count = count + 1;
}

btn.addEventListener('click', btnHandler);
updateBtn.addEventListener('click', updateHandler)

function updateHandler() {
    if (input.value !== "" && children !== null) {

        children[0].innerText = input.value;
    }
    input.value = "";
    children = null;
}

function deleteHandler(element) {
    const task = element.parentElement;
    console.log(task.innerText)
    task.remove();
}

function editHandler(ele) {
    // console.log(ele.siblings())
    const task = ele.parentElement;
    // const spanElement = task.firstChild;
    children = task.children;
    // console.log(children[0].innerText)
    input.value = children[0].innerText;
}

//below function is called callBack
// function def() {
//     console.log('inside callback')
// }

// function abc(def) {
//     console.log('inside abc')
//     def();
// }

// abc(() => {
//     console.log("inside callback 2")
// })