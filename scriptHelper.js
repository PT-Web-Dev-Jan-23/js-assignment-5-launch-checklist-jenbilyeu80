// Write your helper functions here!

require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src='${imageUrl}'>
                `
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return `Empty`
    } else if ((!isNaN(Number(testInput)))) {
        return `Is a Number`
    } else {
        return 'Not a Number'
    }
}

function formSubmission (document, list, pilot, copilot, fuelLevel, cargoLevel) { 
 

       let pilotInput = document.querySelector("input[name=pilotName]");
       let copilotInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
 
       if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
          alert("All fields required!")
       
     } else if (isNaN(fuelLevelInput.value)) {
          alert("Make sure to enter valid information for each field.")
 
       } else if (isNaN(cargoMassInput.value)) {
          alert("Make sure to enter valid information for each field.")
 
       } else if (fuelLevelInput.value < 10000) {
          let faultyItems = document.getElementById("faultyItems");
          let launchStatus = document.getElementById("launchStatus");
        
          launchStatus.innerHTML = `<h2 id="launchStatus" style="color: red">Shuttle not ready for launch</h2>`;
          faultyItems.innerHTML = `<div  id="faultyItems" style="visibility: visible">
          <ol>
             <li id="pilotStatus">Pilot ${pilotInput.value} Ready</li>
             <li id="copilotStatus">Co-pilot ${copilotInput.value} Ready</li>
             <li id="fuelStatus">Fuel level too low for launch</li>
             <li id="cargoStatus">Cargo mass low enough for launch</li>
          </ol>
       </div>`
 
       } else if (cargoMassInput.value > 10000) {
          let faultyItems = document.getElementById("faultyItems");
          let launchStatus = document.getElementById("launchStatus");
          launchStatus.innerHTML = `<h2 id="launchStatus" style="color: red">Shuttle not ready for launch</h2>`;
          faultyItems.innerHTML = `<div  id="faultyItems" style="visibility: visible">
             <ol>
                <li id="pilotStatus">Pilot ${pilotInput.value} Ready</li>
                <li id="copilotStatus">Co-pilot ${copilotInput.value} Ready</li>
                <li id="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus">Cargo mass too high for launch</li>
             </ol>
          </div>`
 
       } else {
          let launchInfo = document.getElementById("faultyItems");
          let launchStatus = document.getElementById("launchStatus");
          launchStatus.innerHTML = `<h2 id="launchStatus" style="color: green">Shuttle is ready for launch</h2>`;
          launchInfo.innerHTML = `<div  id="faultyItems">
             <ol>
                <li id="pilotStatus">Pilot ${pilotInput.value} Ready</li>
                <li id="copilotStatus">Co-pilot ${copilotInput.value} Ready</li>
                <li id="fuelStatus">Fuel level high enough for launch</li>
                <li id="cargoStatus">Cargo mass low enough for launch</li>
             </ol>
          </div>`
 
       };
    
    };
    async function myFetch() {
        let planetsReturned;
    
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
        });
    
        return planetsReturned;
    }
    
    function pickPlanet(planets) {
        let num = Math.floor(Math.random() * 6);
        return planets[num];
    }
    

    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
  
 
 /* This block of code shows how to format the HTML once you fetch some planetary JSON!
 <h2>Mission Destination</h2>
 <ol>
    <li>Name: ${}</li>
    <li>Diameter: ${}</li>
    <li>Star: ${}</li>
    <li>Distance from Earth: ${}</li>
    <li>Number of Moons: ${}</li>
 </ol>
 <img src="${}">
 */
 