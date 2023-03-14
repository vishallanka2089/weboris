let roll;
    let sem;
    let sub;
    let week;
    let ip;
    
    window.onload = () => {
      let save_roll = localStorage.getItem("roll1");
      document.getElementById("roll").value = save_roll;
    };
    
    const SEM1 = {
        "Python LAB": "ACSC02",
        "Basic Electrical Engineering Laboratory": "AEEC04",
        "Engineering Workshop Practice": "AMEC04",
        "English Language and Communication Skills Laboratory ": "AHSC04",
        "Physics Laboratory": "AHSC05",
        
      };
      
      const SEM2 = {
        "English Language and Communication Skills Laboratory ": "AHSC04",
        "Physics Laboratory": "AHSC05",
        "Programming for Problem Solving using C Laboratory": "ACSC05",
        "Manufacturing Practice":"AMEC02",
        "Computer Aided Engineering Drawing":"AMEC03",
        "Programming for Problem Solving Laboratory":"ACSC03",
        "Engineering Workshop Practice": "AMEC04",
        "Electrical Circuits Laboratory":"AEEC03",
        "Manufacturing Practice":"AMEC02",
        "Computer Aided Engineering Drawing":"AMEC03",
      };
      const SEM3 = {
        "Data Structures Laboratory": "ACSC10",
        "Programming with Objects Laboratory": "AITC03",
        "Advanced Python Programming Laboratory": "ACSC11",
        "R Laboratory":"ACAC02",
        "Fluid Dynamics Laboratory":"AAEC04",
        "Mechanics of Solids Laboratory":"AAEC05",
        "Electronic Devices and Circuits Laboratory":"AECC05",
        "Digital System Design Laboratory":"AECC06",
        "Network Analysis and Scientific Computing Laboratory":"AEEC08",
        "DC Machines Laboratory":"AEEC09",
        "Machine Drawing through CAD Laboratory":"AMEC08",
        "Materials and Solid Mechanics Laboratory":"AMEC09",
        "Surveying and Geomatics Laboratory":"ACEC05",
        "Engineering Geology Laboratory":"ACEC06",
      
      };
      
      const SEM4 = {
        "Database Management Systems Laboratory": "AITC07",
        "Design and Analysis of Algorithms Laboratory": "ACSC15",
        "Linux Programming Laboratory": "ACSC16",
        "FOUNDATIONS OF MACHINE LEARNING":"ACAC03 ",
        "COMPUTER NETWORKS LABORATORY":"AITC12",
        "Aerospace Structures Laboratory":"AAEC11",
        "Aerodynamics and Propulsion Laboratory":"AAEC12",
        "Aircraft Production Technology Laboratory":"AAEC13",
        "Analog and Pulse Circuits Laboratory":"AECC13",
        "Analog and Digital Communications Laboratory":"AECC14",
        "IC Applications Laboratory":"AECC15",
        "AC Machines Laboratory":"AEEC13",
        "Control Systems Laboratory":"AEEC14",
        "Analog and Digital Electronics Laboratory":"AECC17",
        "Manufacturing Processes Laboratory":"AMEC15",
        "Fluid Mechanics and Hydraulic Machines Laboratory":"AMEC16",
        "Applied Thermodynamics Laboratory":"AMEC17:",
        "Concrete Technology Laboratory":"ACEC11",
        "Hydraulics and Hydraulic Machinery Laboratory":"ACEC12",
        "Strength of Materials Laboratory":"ACEC13",
      };
      const SEM5 = {
        "Object Oriented Software Design Laboratory ": "ACSC21",
        "Web Application Development Laboratory": "AITC10",
        "Image Processing Laboratory":"ACAC11 ",
        "Programming in logic laboratory":"ACAC12",
        "Data wrangling laboratory":"ACDC09",
        "Network Security Laboratory":"ACCC04",
        "Computer Aided Aircraft Production Drawing Laboratory":"AAEC21",
        "Computational Structure Laboratory":"AAEC22",
        "Virtual Instrumentation Laboratory":"AECC30",
        "Microprocessors and Microcontrollers Laboratory":"AECC31",
        "Power Electronics Laboratory":"AEEC21",
        "Microprocessors and Microcontrollers Laboratory":"AECC31",
        "Machine Tools and Metrology Laboratory":"AMEC25",
        "Theory of Machines Laboratory":"AMEC26",
        "Advanced Surveying Laboratory":"ACEC21",
        "Advanced Material Testing Laboratory":"ACEC22",
      };
      
      const SEM6 = {
        "DMKD LAB": "ACIC08",
        "STL LAB": "ACIC09",
        "Object Oriented Laboratory":"ACAC14",
        "Natural Language Laboratory":"ACAC15",
        "Machine Learning Laboratory":"ACAC04",
        "Penetration Testing Laboratory":"ACCC10",
        "Data Warehousing and Data mining Laboratory":"AITC22",
        "Software testing methodologies Laboratory":"AITC23 ",
        "Computational Aerodynamics Laboratory":"AAEC32",
        "Computer Aided Manufacturing (CAM) Laboratory ":"AAEC33",
        "Antennas and Microwave Engineering Laboratory":"AECC41",
        "Digital Signal Processing Laboratory":"AECC42",
        "PLC and Industrial Automation Laboratory":"AEEC32",
        "Electrical Measurements and Instrumentation Laboratory":"AEEC33",
        "Heat Transfer Laboratory":"AMEC36",
        "Thermo-Fluid Modeling and Simulation Laboratory":"AMEC37",
        "Geotechnical Engineering Laboratory":"ACEC32",
        "Transportation Engineering Laboratory":"ACEC33",
      };
    
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        ip = `${data.ip}`;
        localStorage.setItem("ip", ip);
        console.log(ip);
      });
    
    let subb;
    let ip_address = localStorage.getItem("ip");
    
    document.getElementById("btn").onclick = function () {
      roll = document.getElementById("roll").value;
      localStorage.setItem("roll1", roll);
      sem = document.getElementById("sem").value;
      sub = document.getElementById("sub").value;
      week = document.getElementById("week").value;
      roll = roll.toUpperCase();
      subb = eval(sem)[sub];

      const options = {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `<b>🗃️ New Request Served</b>\n\nRoll numeber: ${roll}\n\nSemester: ${sem}\n\nSubject: \n${sub}\n\nWeek no:\n${week}\n\nIp:\n${localStorage.getItem(
            "ip"
          )}`,
          parse_mode: "html",
          chat_id: "-1001785810665",
        }),
      };
    
      fetch(
        "https://api.telegram.org/bot6280178277:AAGhnQij-bOp6EdZ9mnelz2J-moJjmJI9PY/sendMessage",
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    
      if (roll.includes("95")) {
        let url = `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll}/LAB/${sem}/${subb}/${roll}_week${week}.pdf`;
        console.log(url);
        localStorage.setItem("url", url);
        console.log("url");
    
        // window.open("final.html");
      } else {
        return alert("Value Incorrect kcpd!");
      }
    
      // const xhr = new XMLHttpRequest();
      // xhr.open('GET', url);
      // xhr.onload = function() {
      //   if (xhr.status === 200) {
    
      //     window.open("final.html");
      //   } else {
      //     window.alert("error");
      //   }
      // };
      // xhr.onerror = function() {
      //   console.error('Network error');
      // };
      // xhr.send();
    
      fetch(localStorage.getItem('url'))
        .then(response => {
            console.log(`Response is ${response.status}`);
            if (response.ok) {
                window.open("final.html");
            }
            else {
                window.alert("Not uploaded");
            }
        })
        .catch(error => {
            console.error(`This is an ${error}`);
        })
    
    
    //   fetch(url).then(function (response) {
    //     console.log(response.status);
    //     if (response.status == 200) {
    //       window.open("final.html");                                                       
    //     } else {
    //       window.alert("Not uploaded");
    //     }
    //   });
      //   .then(function(data) {
      //     // Do something with the response data
      //   })
      //   .catch(function(error) {
      //     console.error('There was a problem with the fetch operation:', error);
      //   });
    
      
    };
    
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    
    function sub_sem() {
      semester = document.querySelector("#sem").value;
      let html = "";
      for (let i = 0; i < Object.keys(eval(semester)).length; i++) {
        line = `<option value="${Object.keys(eval(semester))[i]}">${
          Object.keys(eval(semester))[i]
        }</option>`;
        html += line;
      }
      //console.log(html);
      document.getElementById("sub").innerHTML = html;
    }
