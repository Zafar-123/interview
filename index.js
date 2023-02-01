let rand = Math.floor(Math.random()*100);

let input;
let i = 1;
do {
  input = prompt(`Please enter a number between 0 and 100: `);

  input = Number(input);

  if (input == rand) {
    console.log(`you win! in ${i} attemtps`);

  }

  else if (input > rand) {
    console.log(` number is high`);

  }
  else if (input < rand) {
    console.log(` number is low`);
  }
  else {
    console.log("enter vaidi number");
  }
  i++;
} while (input !== rand);