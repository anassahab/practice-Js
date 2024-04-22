// // FUNCTION //      BNAY AND DECLARE KRE
// function greeting(){
//     console.log("Assalam o alaikum");

// }
// greeting();


// // OBJECT
// var studentinformation = {
//     name:"Anuskhan",
//     class:5,
//     rollno:7,

// }
// console.log(studentinformation);
// // DOM(data object modal)
// SHOW MORE AND SHOW LESS PARAGRAPH
var para = document.getElementById('paragraph')

function showMore(){
    para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae libero voluptatibus, corrupti excepturi ratione explicabo repellendus voluptate eos ullam et necessitatibus in dolor? Dolorem ut reiciendis corrupti deserunt ad."
}
function showLess(){
    para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestiae libero voluptatibus,......"

}
// INCREMENT AND DECREMENT CALCULATOR
var number = 0;
var span=document.getElementById('one')
function plus(){
span.innerText=number ++;
}
function minus(){
    span.innerText=number --;
}




