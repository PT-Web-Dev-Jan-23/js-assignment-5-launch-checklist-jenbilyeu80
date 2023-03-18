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
   let numberInput = Number(testInput)
   if(testInput === ""){
    return "Empty";
   } else if(isNaN(numberInput)){
    return "Not a Number";
   }else if (isNaN(numberInput) === false){
    return "Is a Number";
   }
}


function formSubmission (document, list, pilot, copilot, fuelLevel, cargoLevel) { 
 
   let pilotInput = document.getElementById("pilotStatus");
   let copilotInput = document.getElementById("copilotStatus");
   let fuelLevelInput = document.getElementById("fuelStatus");
   let cargoLevelInput = document.getElementById("cargoStatus");
       
   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
      alert("All fields are required!");
     }
     
     else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
      alert("Can't be a number");
     }
     else if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
      alert("Must be a number");
     }
     else {
      list.style.visibility = "visible";
      pilotInput.innerHTML = `Pilot ${pilot} is ready for launch`
      copilotInput.innerHTML = `Co-pilot ${copilot} is ready for launch`
      let launchStatus = document.getElementById("launchStatus");
     
      if (fuelLevel < 10000 && cargoLevel<=10000) {
         fuelLevelInput.innerHTML = 'Fuel level too low for launch';
         cargoLevelInput.innerHTML = 'Cargo mass low enough for launch';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'rgb(199,37,78)';
      } else if(fuelLevel >= 10000 && cargoLevel > 10000){
         fuelLevelInput.innerHTML = 'Fuel level high enough for launch';
         cargoLevelInput.innerHTML = 'Cargo mass too heavy for launch';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'rgb(199,37,78)';
     } else if ( fuelLevel < 10000 && cargoLevel > 10000){
         fuelLevelInput.innerHTML = 'Fuel level too low for launch';
         cargoLevelInput.innerHTML = 'Cargo mass too heavy for launch';
         launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
         launchStatus.style.color = 'rgb(199,37,78)'; 
     } else {
         fuelLevelInput.innerHTML = 'Fuel level high enough for launch';
         cargoLevelInput.innerHTML = 'Cargo mass low enough for launch';
         launchStatus.innerHTML = 'Shuttle is Ready for Launch';
         launchStatus.style.color = 'rgb(65,159,106)'; 
     }
    }
 
 }
  
     
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
 