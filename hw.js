window.addEventListener('load', ()=>{

var passGenerate = document.querySelector("#passGenerate");

passGenerate.addEventListener('click', function(e){  
    
    }
 
    
    //  all the letters, numbers and symbols used for the new password

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "?"];

    //  the variables that randomize the letters numbers and symbols

var randomLetter = letters[Math.floor(Math.random()*letters.length)];
var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
var randomSpecialChar = specialChar[Math.floor(Math.random()*specialChar.length)];


    //  the numerical values that are entered into the forms you need to fill out, so you know how many of 
    //  each random element you need to produce, and how many are left over in the total needed to complete 
    //  the password

var input1 = document.querySelector("#totalChars").value
var input2 = document.querySelector("#capitals").value
var input3 = document.querySelector("#lowers").value
var input4 = document.querySelector("#numbers").value
var input5 = document.querySelector("#specialChars").value

input1 = parseInt(input1)
input2 = parseInt(input2)
input3 = parseInt(input3)
input4 = parseInt(input4)
input5 = parseInt(input5)


charLeft.textContent = input1 - input2 - input3 - input4 - input5



//function randomLetter (letters){
    // letter[Math.floor(Math.random() * letters.length)];
    // 
 //}

 //function randomNumber(numbers){
   // number[Math.floor(Math.random() * numbers.length)];
//}

//function randomChar (specialChar){
//    specialChar[Math.floor(Math.random() * specialChar.length)];
//}

