let names = ["Candy", "Hafiz", "Jordan", "Cristobal"]


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
console.log(shuffleNamesArray(names))