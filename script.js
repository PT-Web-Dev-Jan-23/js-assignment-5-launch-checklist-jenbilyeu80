// Write your JavaScript code here!



window.addEventListener("load", function() {

    let listedPlanets;
    listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
     let planetPicked = pickPlanet(listedPlanets);
 
 addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
 
    })
    
 let list = document.getElementById("faultyItems");
 
 list.style.visibility = "hidden";
 let form = document.querySelector("Form");
 
 form.addEventListener("submit", function(event){
     event.preventDefault();
     let pilotInfo = document.querySelector("input[name=pilotName]");
     let pilot = pilotInfo.value;
 
     let copilotInfo = document.querySelector("input[name=copilotName]");
     let copilot = copilotInfo.value;
 
     let fuelLevelInfo = document.querySelector("input[name=fuelLevel]");
     let fuelLevel = Number(fuelLevelInfo.value);
 
     let cargoMassInfo = document.querySelector("input[name=cargoMass]");
     let cargoLevel = Number(cargoMassInfo.value);
 
     
 
 
     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
 });
 
 
 
 
 });
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
 
