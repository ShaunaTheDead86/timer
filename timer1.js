const alarmTimes = process.argv;

const alarmClock = function(alarms) {
  let delay = 0;
  for (const alarmTime of alarms.slice(2)) {
    delay += alarmTime * 1000;
    setTimeout(() => {
      process.stdout.write('ALARM!');
    },delay);
    
  }
};

alarmClock(alarmTimes);