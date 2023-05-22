// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
// console.log(cohort.split(""))

// a) Your answer: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '3']
// b) Verify and explain: In line 11, I use the split() to split the str(cohort) into an array of substrings

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: Correct answer was undefined. On line 21 there is a string but it is not being returned

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: the .map function takes arrow functionn as argument on line 28, which then multiplies each element of an array. Resulting in `multipliedBytwo` array

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: returns an array with only odd numbers from the array using the .filter function. Within the filter contains a contion checking for odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Returns the value `Javascript` from within the object `myCodingSkills` under the key `languages` using dot notation.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = "ricky"
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = Learn
console.log(learnStudent)

// a) Your answer: ['George', 'Delta', 2023]
// b) Verify and explain: Learn { student: 'George', cohort: 'Delta', year: 2023 } the console.log will call the datatype `learnStudent` with value of class `Learn` to the console

