

// let a = 4;
// function myFunction() {
//   return a * a;
// }
// console.log(a+a)


document.getElementById("main").addEventListener("click", function () {
    // event.stopPropagation()
    alert("Main Div clicked");
});

document.getElementById("middle").addEventListener("click", function () {
    // event.stopPropagation()

    alert("Middle Div clicked");
});

document.getElementById("inner").addEventListener("click", function () {
    // event.stopPropagation()
    alert("Inner Div clicked");
});


