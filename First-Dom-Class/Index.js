// console.log("Hey");

// // console.log(document)
// const temp = document.getElementsByTagName("h1");

// console.log(temp)

// temp[3].innerText = "Mofidied Value";

// document.getElementById('first').innerHTML = '<p>This is modified version</p>'
// document.querySelector('#first').innerHTML = '<p>This is modified version</p>'

// const headings = document.getElementsByClassName('heading')

// headings[1].style.backgroundColor="red";

// console.log(document.querySelectorAll('.heading'))

const input = document.querySelector('input')
const heading = document.querySelector('.heading')

function printer() {
    console.log(input.value);
    heading.innerHTML = input.value
}

