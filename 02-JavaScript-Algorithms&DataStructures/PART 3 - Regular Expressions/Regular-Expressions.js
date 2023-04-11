/* 
    6 - Find More Than the First Match
    
    So far, you have only been able to extract or search a pattern once.

    let testStr = "Repeat, Repeat, Repeat";
    let ourRegex = /Repeat/;
    testStr.match(ourRegex);
    Here match would return ["Repeat"].

    To search or extract a pattern more than once, you can use the global search flag: g.

    let repeatRegex = /Repeat/g;
    testStr.match(repeatRegex);
    And here match returns the value ["Repeat", "Repeat", "Repeat"]

    Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

    Note
    You can have multiple flags on your regex like /search/gi 
*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

/*
Match Characters that Occur Zero or More Times
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
/* soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
In order, the three match calls would return the values ["goooooooo"], ["g"], and null.
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
*/

