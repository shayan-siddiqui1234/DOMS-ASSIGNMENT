// Question 1 (i)

var qno1 = document.getElementById('main-content');

// Question 1 (ii)

console.log(qno1.children);

// Question 1 (iii)

var qno2 = document.getElementsByClassName('render');

document.write("<br>"+ "<br>"+ "<br>"+ "<br>" +"Below written data is from assignment, where it was asked to display all childs on browser" + "<br>" + "<br>" + "<br>" + "<br>")

for (i=0 ; i<q1Part3.length ; i++) {
    document.write(qno2[i].innerHTML + "<br>")
}

// Question 1 (iv)

var q1Part4 = document.getElementById('first-name');

q1Part4.value = "Muhammad Shayan"

// Question 1 (v)

var q1Part5One = document.getElementById('last-name');

q1Part5One.value = "Siddiqui"


var q1Part5Two = document.getElementById('email');

q1Part5Two.value = "shayansiddiqui702@gmail.com"


// Question 2 (i)

var q2Part1 = document.getElementById('form-content');

console.log(q2Part1.nodeType); 

// Question 2 (ii)

var q2Part2 = document.getElementById('lastName');

console.log(q2Part2.nodeType);
console.log(q2Part2.childNodes);

// Question 2 (iii)

q2Part2.childNodes[0].nodeValue = "Last Name : Siddiqui";

// Question 2 (iv)

console.log(q1Part1.lastElementChild);
console.log(q1Part1.firstElementChild);

// Question 2 (v)

console.log(q2Part2.nextElementSibling);
console.log(q2Part2.previousElementSibling);


// Question 2 (vi)

console.log(q1Part5Two.parentNode)
console.log(q1Part5Two.parentNode.nodeType)