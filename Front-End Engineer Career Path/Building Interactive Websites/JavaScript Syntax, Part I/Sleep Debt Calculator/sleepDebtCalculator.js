const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 8;
    }
  }
  
  const getActualSleepHours = () => {
    const daysOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let totalSleepHours = 0;
  
    daysOfTheWeek.forEach(day => {
      totalSleepHours += getSleepHours(day);
    });
  
    return totalSleepHours;
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
  
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours of sleep than needed.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You got ${idealSleepHours - actualSleepHours} hours of sleep less than your ideal sleep goal`);
    }
  }
  
  calculateSleepDebt();