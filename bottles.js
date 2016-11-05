var cash = process.argv[2];

const cashPerFullBottle = 2;
const emptyBottlePerFullBottle = 2;
const capPerFullBottle = 4;

var totalBottles = 0;

var bottles = {
  initialBottles: {
    count: 0,
    leftOverCash: 0
  },
  emptyReturnBottles: {
    count: 0,
    leftOverEmptyBottles: 0
  },
  capBottles: {
    count: 0,
    leftOverCaps: 0
  }

};

function numOfBottles (cash) {

  bottles.initialBottles.count = Math.floor(cash / cashPerFullBottle);
  bottles.initialBottles.leftOverCash = cash % cashPerFullBottle;

  bottles.emptyReturnBottles.count = Math.floor(bottles.initialBottles.count
                                                / emptyBottlePerFullBottle);
  bottles.emptyReturnBottles.leftOverEmptyBottles = Math.floor(bottles.initialBottles.count
                                                    % emptyBottlePerFullBottle);

  bottles.capBottles.count = Math.floor(bottles.initialBottles.count
                                       / capPerFullBottle);
  bottles.capBottles.leftOverCaps = Math.floor(bottles.initialBottles.count
                                       % capPerFullBottle);
}

if (!isNaN(cash)) {
  numOfBottles(cash);

  for (item in bottles) {
  totalBottles += bottles[item].count;
  }

  console.log("With " + cash + " dollars, you get: \n")
  console.log("Total number of bottles: " + totalBottles + '\n');

  console.log("Bottles purchased with cash: " + bottles.initialBottles.count);
  console.log("Leftover cash: " + bottles.initialBottles.leftOverCash + '\n');

  console.log("Bottles purchased from returned bottles: " + bottles.emptyReturnBottles.count);
  console.log("Leftover empty bottles: " + bottles.emptyReturnBottles.leftOverEmptyBottles + '\n');

  console.log("Bottles purchased from caps: " + bottles.capBottles.count);
  console.log("Leftover caps: " + bottles.capBottles.leftOverCaps + '\n');

} else console.log("invalid input!")