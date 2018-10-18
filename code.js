/*
Here are the different cyphers that we will include in our program:
all to lowercase
all to uppercase
uppercase the first word of each word
capitalize first letter of first word, add period on end "make a sentence"

more cypherish:
convert to binary
convert to hex
convert to 64bit
convert to morse code


randomize the words
randomize the letters generally

*/

//to lowercase
//use default string method:
//str.toLowerCase();

//to uppercase
//use default string method:
//str.toUpperCase();

//uppercase first letter of each word
function toUpperEachWord(str){
    str = str.toLowerCase();
    var strArray = str.split(" ");
    var newString = "";
    
    for(var i = 0; i < strArray.length; i++){
        newString += strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
        
        if(i < strArray.length - 1){
            newString += " ";    
        }
    }
    return newString
}

//make the string into a proper sentence
function toProperSentance(str){
    if(str.length == 0) return str;
    return str.substring(0, 1).toUpperCase() + str.substring(1) + ".";
}

//
function toBinary(str){
    var newString = "";
    
    for(var i = 0; i < str.length; i++){
        newString += str.charCodeAt(i).toString(2);
        if(i < str.length - 1) newString += " ";
    }
    
    return newString;
}

function toCustomBase(str, newBase, addSpaces){
    if(newBase < 2 || newBase > 64) return str;
    if(newBase == 2) return toBinary(str);
    var newString = "";
    
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) == ' ') newString += " ";
        newString += str.charCodeAt(i).toString(newBase);
    }
    
    return newString;
}

//convert the string to morse code
function toMorseCode(str){
    str = str.toLowerCase();
    
    var morseAlphabet = {
        'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
        'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
        'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
        'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
        'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
        'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
        'y': '-.--',  'z': '--..',  ' ': ' ',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
        '9': '----.', '0': '-----', 
    }
    var newString = "";
    //alert(morseAlphabet['a']);
    
    for(var i = 0; i < str.length; i++){
        newString += morseAlphabet[str.charAt(i)];
    }
    
    return newString;
}
