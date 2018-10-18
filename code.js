/*
Here are the different cyphers that we will include in our program:
all to lowercase
all to uppercase
uppercase the first word of each word
capitalize first letter of first word, add period on end "make a sentence"

more cypherish:
convert to binary
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

//Convert string to binary
function toBinary(str){
    var newString = "";
    
    for(var i = 0; i < str.length; i++){
        newString += str.charCodeAt(i).toString(2);
        if(i < str.length - 1) newString += " ";
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

//randomize the letters in the string
function toRandLettering(str){
    
    var firstLetter = 0;
    var secondLetter = 0;
    var newString = str;
    
    for(var i = 0; i < str.length * 3; i++){
        firstLetter = Math.floor(Math.random() * str.length);
        secondLetter = Math.floor(Math.random() * str.length);
        
        //now swop those letters
        var temp = newString.charAt(firstLetter);
        
        newString = newString.substring(0, firstLetter) + 
            newString.substring(secondLetter, secondLetter + 1) + newString.substring(firstLetter + 1);
        newString = newString.substring(0, secondLetter) + temp + newString.substring(secondLetter + 1);
    }   
    return newString;
}

//randomize the words around in the string
function toRandWording(str){
    var wordsArray = str.split(" ");
    var firstWord = 0;
    var secondWord = 0;
    
    for(var i = 0; i < wordsArray.length * 3; i++){
        firstWord = Math.floor(Math.random() * wordsArray.length);
        secondWord = Math.floor(Math.random() * wordsArray.length);
        
        var temp = wordsArray[firstWord];
        wordsArray[firstWord] = wordsArray[secondWord];
        wordsArray[secondWord] = temp;
    }
    
    var newString = "";
    
    for(var i = 0; i < wordsArray.length; i++){
        newString += wordsArray[i];
        if(i < wordsArray.length - 1) newString += " ";
    }
    return newString;
}

//caeser cipher, hold the dressing
function toCaesar(str, rotation){
    while(rotation >= 26) rotation -= 26;
    
    var newString = "";
    
    for(var i = 0; i < str.length; i++){
        var code = str.charCodeAt(i);
        
        if(code >= 65 && code <= 90){
            code += rotation;
            if(code > 90) code -= 26;
        }else if(code >= 97 && code <= 122){
            code += rotation;
            if(code > 122) code -= 26;
        }else{
            //number or something
        }
        
        newString += String.fromCharCode(code);
    }
    return newString;
}

//reverse the string
function toReverse(str){
    var newString = "";
    for(var i = str.length - 1; i >= 0; i--){
        newString += str.charAt(i);
    }
    return newString;
}