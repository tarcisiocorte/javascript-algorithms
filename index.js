// Simple interactive menu to run small examples from the repo.
// Options:
// 1 - LinkedList example
// 2 - Two-pointer (containerWithMostWater) example
// 3 - Cyclic-sort (firstMissingPositive) example

const readline = require("readline");

// Prefer the CommonJS-friendly linked list implementation.
const LinkedList = require("./linked-lists/linkedList.js");
const calculateContainerWithMostWater = require("./two-pointer/containerWithMostWater");
const firstMissingPositive = require("./cyclic-sort/firstMissingPositive");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log('\nChoose an example to run:');
  console.log('1) LinkedList example');
  console.log('2) Two-pointer (containerWithMostWater) example');
  console.log('3) Cyclic-sort (firstMissingPositive) example');
  console.log('0) Exit');

  rl.question('Enter choice: ', (answer) => {
    handleChoice(answer.trim());
  });
}

function handleChoice(choice) {
  switch (choice) {
    case '1':
      runLinkedListExample();
      break;
    case '2':
      runTwoPointerExample();
      break;
    case '3':
      runCyclicSortExample();
      break;
    default:
      console.log('Exiting.');
      rl.close();
  }
}

function runLinkedListExample() {
  console.log('\nRunning LinkedList example...');
  const list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  list.add(15);
  list.print();
  list.remove(10);
  list.print();
  rl.close();
}

function runTwoPointerExample() {
  console.log('\nRunning two-pointer (containerWithMostWater) example...');
  const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  const area = calculateContainerWithMostWater(heights.slice());
  console.log('Heights:', heights);
  console.log('Max area:', area);
  rl.close();
}

function runCyclicSortExample() {
  console.log('\nRunning cyclic-sort (firstMissingPositive) example...');
  const nums = [3, 4, -1, 1];
  const missing = firstMissingPositive(nums.slice());
  console.log('Nums:', nums);
  console.log('First missing positive:', missing);
  rl.close();
}

// If a CLI argument is provided (e.g. `node index.js 1`) run that choice directly.
// This makes it easier to debug from VS Code (use the auto-choice launch configuration).
const cliChoice = process.argv[2];
if (cliChoice) {
  handleChoice(cliChoice);
} else {
  showMenu();
}
