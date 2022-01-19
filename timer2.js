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


// user input: b beeps right away
// can input numbers 1 to 9:
// - will say 'setting timer for X seconds...'
// can ctrl+c to exit program should say:
// 'Thanks for using me, ciao!' then exit