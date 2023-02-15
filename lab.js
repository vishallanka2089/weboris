let roll 
let sem
let sub
let week
var subjects = {
    'PBL Lab': 'ACSC20',
    'OOSD Lab': 'ACSC21',
    'WAD Lab': 'AITC10'
}
let subb

document.getElementById("btn").onclick = function () {

    
    roll=document.getElementById("roll").value;
    
    sem=document.getElementById("sem").value;
    sub= document.getElementById("sub").value; 
    week=document.getElementById("week").value;
    roll = roll.toUpperCase()
    subb=subjects[sub]
    if (roll.includes('95')) {
    // return `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll}/LAB/${sem}/${eval(subjects[sub])}/${roll}_week${week}.pdf`;

    let url = `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll}/LAB/SEM${sem}/${subb}/${roll}_week${week}.pdf`
    console.log(url);
    window.open(url);

    
    } else {
        return alert("Value Incorrect kcpd!");
    }
}
