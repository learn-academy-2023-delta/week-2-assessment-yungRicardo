// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// Create function return array with values multiplied by 3
// Use .map to iterate through number array
// Return array with new values

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("multiplyByThree", () => {
    it("Returns array with numbers multiplied by 3", () => {
        expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})

// b) Create the function that makes the test pass.

const multiplyByThree = (nums) => {
     return nums.map((value) =>  value * 3)
}

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
describe("divisibleByThree", () => {
    it("Returns a string", () => {
        expect(divisibleByThree(object1.number)).toEqual(`${object1.number} is divisible by 3.`)
        expect(divisibleByThree(object2.number)).toEqual(`${object2.number} is divisible by 3.`)
        expect(divisibleByThree(object3.number)).toEqual(`${object3.number} is not divisible by 3.`)
    })
})

// b) Create the function that makes the test pass.

const divisibleByThree = (num) => {
    if(num % 3 === 0){
        return `${num} is divisible by 3.`
    } else if(num % 3 !== 0){
        return `${num} is not divisible by 3.`
    }
}

// Pseudo code:

// - Create function to check if number is divisible by 3
// - Within function body write some condtions to check wther number is divisible by  3 or not.
// - return string to console stating whtwer is divisible by 3 or not.


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
describe("allCapWords", () => {
    it("Returns an array with all the words capitalized", () => {
        expect(allCapWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allCapWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// b) Create the function that makes the test pass.

const allCapWords = (nounList) => {
    return nounList.map((word) => {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        return word
})
}

// Pseudo code:

// Create a function that accepts an array and captializes each value in the array.
// Use (.map) to iterate through the array and grab each word
// Grab the first letter of every word.toUpperCase() + word.slice()
// Return the values


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.


// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelChecker", () => {
    it("returns the first instance of a vowel in the word", () => {
        expect(vowelChecker(vowelTester1)).toEqual(1)
        expect(vowelChecker(vowelTester2)).toEqual(0)
        expect(vowelChecker(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.
const vowelChecker = (word) => {
    
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(i=0; i<word.length; i++){
        if(vowels.includes(word[i])){
            return i
        }    
    }
}
console.log(vowelChecker(vowelTester1))
console.log(vowelChecker(vowelTester2))
console.log(vowelChecker(vowelTester3))

// Pseudo code:

// create function to check first instance of a vowel 
// make an array of vowels
// for loop through string and check for vowels
// Set conditions to check all characters within word for vowels
// return the index:
