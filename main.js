/**
 * Takes in an array of names and shuffles the names.
 * You may use this function to help complete this activity.
 * 
 * @param {string[]} names - an array of fellow names
 * @returns {string[]} - the shuffled array of fellow names
 */
function shuffleNamesArray(names) {
    let i = names.length
    let temp
    let randIndex

    // Each iteration picks a random name and places it at the end of the array.
    while (i > 0) {
        // set randIndex to a random number from 0 to i - 1.
        randIndex = Math.floor(Math.random() * i)
        // decrement i
        i -= 1

        // swap names[i] with names[randIndex]
        temp = names[i]
        names[i] = names[randIndex]
        names[randIndex] = temp
    }
  
    return names;
}

/**
 * onclick function for the 'Get Next Up' button.
 * 
 * Should get the next name in the list of names.
 * Should place the next name in span#next-up
 * 
 * The first time this button is hit, it should display the first name on the list.
 * If the last person on the list has been picked, display the message 'Please Shuffle Class!'
 */
function getNextUp() {
    console.log('get next up was clicked!')
}

/**
 * onclick function for the 'Shuffle Class' button.
 * 
 * Should get all the names on the list. Hint: try using document.querySelectorAll
 * Should shuffle the names. Hint: use shuffleNamesArray
 * Should replace original order of names with the shuffled order.
 */
function shuffleClass() {
    console.log('shuffle class was clicked!')
}