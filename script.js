//scope

// function sayHello () {
//     var greeting = "Hello";

// }

// console.log()

// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
// let sentenceBeginning = "The symtoms of Covid-19 are"
// let symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
// let mySymtoms = ["headache"];
// // This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
// for(let i = 0; i < symtoms.length; i++){
//     sentenceBeginning += ` ${symtoms[i]}`
//     mySymtoms.push(symtoms[i])
// }

// console.log(sentenceBeginning)
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors
//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file
// let taco = "Hi, Taco"

// function tacoTruck(shellType, toppings){
//     taco = `A ${shellType} taco with ${toppings}`
// }
// console.log(taco);
// // Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages

// function printTaco(shellType, toppings){
//     console.log(`A ${shellType} taco with ${toppings}`)
// }

// printTaco("soft", "beans and cheese")


// Write a function that accepts two parameters, first and last name. The function should return a greeting to that person using their full name. Then log the greeting to the console outside the function

// function fullName(firstName, lastName) {
//     return `Good morning, ${firstName} ${lastName}`

// }

// console.log(fullName("Ashon", "Woodbury"))

//Function Practice

// ChickenMonkey

// function lightningMonkey(){
//     for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//         // Divide the current number by 2, and check if the remainder is 0
//          if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
//             console.log("chickenmonkey")
//         } else if (currentNumber % 7 === 0) {
//             console.log("monkey")
//         } else if (currentNumber % 5 === 0) {
//                 console.log("chicken") // Only 2, 4, 6 will appear
//         } else {
//             console.log(currentNumber)
//         }
//     }
// }
// lightningMonkey();

// Take a Number - Battle of the Bands



// let bandNumber = (bandNames[0] + 1)
// let bandNumber = 1

// const takeNumber = function (bandName) {
//     // return bandNumber++  + " " + bandName
//     return `${bandNumber}. ${bandName}

// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console
// let currentNumber = 0;

// function assignBandID(bandName){
//     currentNumber.push = currentNumber ++;
// return `${currentNumber}. ${bandName}`
// }

// function assignBandID(bandName){
//     currentNumber.push = currentNumber ++;
//     console.log(`${currentNumber}. ${bandName}`)
// }
// assignBandID("The Undertakers")
// console.log(assignBandID("The Undertakers"))

// let bandNumber = 0

// function takeNumber(bandName){
//     bandNumber.push = bandNumber ++;
//     return `${bandNumber}, ${bandName}`
// }

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];



// function fullSentence(sentenceArray, endCharacter, numberOfTimes) {
//     for (let i = 0; i < sentence.length; i++) {
//         console.log(sentenceArray[i], endCharacter, numberOfTimes)
        
//         if ((i + 1 % 3 === 0)) {
            
//         }
//     }

    

// }

// fullSentence(sentence, "!", 3)

//Stacking Words

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""


    // //Without exlamation marks
    // for (let i = 0; i < theWordArray.length; i++) {
    //     // Concatenate the new word onto buildMeUp
    //     buildMeUp += `${theWordArray[i]} `
    //     // Print buildMeUp to the console
    //     console.log(buildMeUp)
    // }

    for (let index = 0; index < theWordArray.length; index++) {
        if (index % 3 === 0 && index !== 0) {
            buildMeUp += `${theWordArray[index]}! `
            console.log(buildMeUp)
        } else {
            buildMeUp += `${theWordArray[index]} `
            console.log(buildMeUp)
        }
    }
}

// Invoke the function and pass in the array
addExcitement(sentence)