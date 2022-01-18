const alarmTimes = process.argv;

const alarmClock = function(alarms) {
  let delay = 0;
  for (const alarm of alarms.slice(2)) {
    if (alarm > 0 || !isNaN(alarm)) {
      setTimeout(() => {
        process.stdout.write('ALARM!');
      },alarm * 1000 + delay);
      delay += alarm * 1000;
    }
  }
};

alarmClock(alarmTimes);