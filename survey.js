const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  const answer1 = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    const answer2 = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      const answer3 = answer;
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.)", (answer) => {
        const answer4 = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          const answer5 = answer;
          rl.question("Which sport is your absolute favourite?", (answer) => {
            const answer6 = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              const answer7 = answer;
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

