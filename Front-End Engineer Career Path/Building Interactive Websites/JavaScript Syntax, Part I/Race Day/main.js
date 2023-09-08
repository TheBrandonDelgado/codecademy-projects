let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 9:30am.`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 11am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 12:30pm.`);
} else {
  console.log('Please speak to a staff member at the registration desk.');
}