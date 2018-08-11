function checker(word) {
    let palindrome = word.split('').reverse().join('');

    // if (word === palindrome) {
    //     console.log("true");
    // } else {
    //     console.log("false");
    // }

    // or

    word == palindrome ? console.log("true") : console.log("false");
}

checker("mike");
checker("racecar");