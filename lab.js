
let roll 
let sem
let sub
let week

const SEM1 = {
    "PBL Lab": "ACSC20",
    "OOSD Lab": "ACSC21",
    "WAD Lab": "AITC10"

}

const SEM2 = {
    "DMKD LAB":"ACIC08" ,
    "STL LAB":"ACIC09"

}
const SEM3 = {
    "PBL Lab": "ACSC20",
    "OOSD Lab": "ACSC21",
    "WAD Lab": "AITC10"

}

const SEM4 = {
    "DMKD":"ACIC08" ,
    "STL LAB":"ACIC09"

}
const SEM5 = {
    "PBL Lab": "ACSC20",
    "OOSD Lab": "ACSC21",
    "WAD Lab": "AITC10"

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



