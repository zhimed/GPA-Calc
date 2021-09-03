let body = document.querySelector('body');
let ul = document.querySelector('ul');
let table = document.querySelector('table');

let object = {
    gradePoints: 0,
    numHours:0,
    gpa: 0
}

function addClass(input){
    let arr = input.split(' ');
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.textContent = arr[0];
    td2.textContent = arr[1];
    td3.textContent = arr[2];

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    table.appendChild(tr);

    splitInput(input);

    updateSummary();
}

function splitInput(input){
    let arr = input.split(' ');

    for(let item of arr){
        console.log(item);
    }

    // arr[0] is the course name

    // arr[1] is the grade received for the course     

    if(arr[1] == 'A'){
        object.gradePoints = parseFloat(object.gradePoints) + (4 * parseFloat(arr[2]));

    }else if(arr[1] == 'A-'){
        object.gradePoints = parseFloat(object.gradePoints) + (3.7 * parseFloat(arr[2]));

    }else if(arr[1] == "B+"){
        console.log(3.5 * parseFloat(arr[2]));
        object.gradePoints = parseFloat(object.gradePoints) + (3.3 * parseFloat(arr[2]));
    }else if(arr[1] == 'B'){
        object.gradePoints = parseFloat(object.gradePoints) + (3 * parseFloat(arr[2]));

    }else if(arr[1] == 'B-'){
        object.gradePoints = parseFloat(object.gradePoints) + (2.7 * parseFloat(arr[2]));

    }else if(arr[1] == 'C+'){
        console.log("plus");
        object.gradePoints = parseFloat(object.gradePoints) + (2.3 * parseFloat(arr[2]));

    }else if(arr[1] == 'C'){
        object.gradePoints = parseFloat(object.gradePoints) + (2 * parseFloat(arr[2]));

    }else if(arr[1] == 'C-'){
        object.gradePoints = parseFloat(object.gradePoints) + (1.7 * parseFloat(arr[2]));

    }else if(arr[1] == 'D+'){
        object.gradePoints = parseFloat(object.gradePoints) + (1.3 * parseFloat(arr[2]));

    }else if(arr[1] == 'D'){
        object.gradePoints = parseFloat(object.gradePoints) + (1 * parseFloat(arr[2]));

    }else{
        //no points for F or below
    }

    // arr[2] is the number of hours/credits the course is worth
    object.numHours = parseInt(object.numHours) + parseInt(arr[2]);

    //update the gpa
    object.gpa = parseFloat(object.gradePoints) / parseFloat(object.numHours);

}

function updateSummary(){

    let gradePoints = document.querySelector('#gradePoints');
    gradePoints.textContent = "Total grade points: " + object.gradePoints;

    let numHours = document.querySelector('#numHours');
    numHours.textContent = "Number of Hours: " + object.numHours;

    let gpa = document.querySelector('#gpa');
    gpa.textContent = "GPA: " + Number.parseFloat(object.gpa).toPrecision(4);

}

// let input = prompt("Enter course name, grade, and credit hours (eg.  'CS351 B+ 3'), or enter q to stop");

// while(input !== "q"){
//     addClass(input);
//     input = prompt("Enter course name, grade, and credit hours (eg.  'CSC551 B+ 3'), or enter q to stop");

// }

const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const input = form.elements.addCourse.value;
    addClass(input);

    //clear out input field after adding class
    document.querySelector('.addCourse').value = "";
})