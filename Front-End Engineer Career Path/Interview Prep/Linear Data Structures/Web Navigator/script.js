const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Github.com';
let finish = false;
let showBack = false;
let showNext = false;
// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = action => {
    console.log(`User action: ${action}`);
    console.log(`Current page: ${currentPage}`);
    console.log(`Back page: ${backPages.peek()}`);
    console.log(`Next page: ${nextPages.peek()}`);
}

const newPage = page => {
    backPages.push(currentPage);
    currentPage = page;
    while (!nextPages.isEmpty()) {
        nextPages.pop();
    }
    showCurrentPage('New Page');
}

const backPage = () => {
    nextPages.push(currentPage);
    currentPage = backPages.pop();
    showCurrentPage('Back Page');
}

const nextPage = () => {
    backPages.push(currentPage);
    currentPage = nextPages.pop();
    showCurrentPage('Next Page');
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
showCurrentPage('Default Page');
while (!finish) {
  let instructions = baseInfo;
    if (!backPages.isEmpty()) {
        instructions += `, ${backInfo}`;
        showBack = true;
    } else {
        showBack = false;
    }
    if (!nextPages.isEmpty()) {
        instructions += `, ${nextInfo}`;
        showNext = true;
    } else {
        showNext = false;
    }
    instructions += `, ${quitInfo}`;
    console.log(instructions);

    // ------------------------------
    // User Interface Part 2
    // ------------------------------

    const answer = prompt(question);
    const lowerCaseAnswer = answer.toLowerCase();

    if (lowerCaseAnswer.length > 1) {
        newPage(lowerCaseAnswer);
    } else if ((showBack) && (lowerCaseAnswer === 'b')) {
        backPage();
    } else if ((showNext) && (lowerCaseAnswer === 'n')) {
        nextPage();
    } else if ((!showBack) && (lowerCaseAnswer === 'b')) {
        console.log('There are no pages to go back to.')
    } else if ((!showNext) && (lowerCaseAnswer === 'n')) {
        console.log('There are no pages up next.')
    } else if (lowerCaseAnswer === 'q') {
        finish = true;
    }
}
