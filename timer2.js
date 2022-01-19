

const alarmClock = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
    if (key.toUpperCase() === 'B') {
      process.stdout.write('ALARM!\n');
    }

    if (Number(key) >= 1 || Number(key) <= 9) {
      process.stdout.write(`Alarm set for ${key} seconds from now...\n`);
      setTimeout(() => {
        process.stdout.write('ALARM!\n');
      },Number(key) * 1000);
    }

    if (key === '\u0003') {
      process.exit();
    }
  });
};

// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
//     immediately output "setting timer for x seconds...", and
//     beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating


alarmClock();