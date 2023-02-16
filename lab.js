
let roll 
let sem
let sub
let week

const SEM1 = {
    "PYTHON PROGRAMMING LAB": "ACSC02",
    "Basic Electrical Engineering Laboratory": "AEEC04",
    "Engineering Workshop Practice": "AMEC04"

}

const SEM2 = {
    "English Language and Communication Skills Laboratory ":"AHSC04",
    "Physics Laboratory":"AHSC05",
    "Programming for Problem Solving using C Laboratory": "ACSC05"

}
const SEM3 = {
    "Data Structures Laboratory": "ACSC10",
    "Programming with Objects Laboratory": "AITC03",
    "Advanced Python Programming Laboratory": "ACSC11"

}

const SEM4 = {
    "Database Management Systems Laboratory":"AITC07" ,
    "Design and Analysis of Algorithms Laboratory":"ACSC15",
    "Linux Programming Laboratory":"ACSC16"

}
const SEM5 = {
    "Object Oriented Software Design Laboratory ": "ACSC21",
    "Web Application Development Laboratory": "AITC10",
}

const SEM6 = {
    "DMKD LAB":"ACIC08" ,
    "STL LAB":"ACIC09"

}








let subb

document.getElementById("btn").onclick = function () {

    
    roll=document.getElementById("roll").value;
    
    sem=document.getElementById("sem").value;
    sub= document.getElementById("sub").value; 
    week=document.getElementById("week").value;
    roll = roll.toUpperCase()
    subb=eval(sem)[sub]
    if (roll.includes('95')) {
    // return `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll}/LAB/${sem}/${eval(subjects[sub])}/${roll}_week${week}.pdf`;

    let url = `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll}/LAB/${sem}/${subb}/${roll}_week${week}.pdf`
    console.log(url);
    window.open(url);

    
    } else {
        return alert("Value Incorrect kcpd!");
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());


function sub_sem() {
    semester = document.querySelector('#sem').value;
    let html = "";
    for (let i = 0; i < Object.keys(eval(semester)).length; i++) {
        line = `<option value="${Object.keys(eval(semester))[i]}">${Object.keys(eval(semester))[i]}</option>`;
        html += line;
    };
    //console.log(html);
    document.getElementById('sub').innerHTML = html;

}



