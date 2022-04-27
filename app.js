//#1 Pig Latin
function translate(str){
    //Break original string into an array of characters 
var letter = str.split('');
//Rexex for strings that contain 'aeiou'
var vowel = /[aeiou]/;
//test the first character of the array
    if(vowel.test(letter[0])){
//upon matching adds way to the end of the string
        return letter.join('') + "way"
    }
//For cases not matching vowels
    while(true){
//if Regex doesn't contain a vowel at first char
        if(!vowel.test(letter[0])){
// Push it to the end and splice the first letter
            letter.push(letter.splice(0,1));
        } else {
//Breaks upon finding a vowel
            break;
        }
    }
//Adds ay to the end and joins string back together
    str = letter.join('') + 'ay';
    return str;
}

translate('HotDog')



//#2 Boo Hoo
function boo(bool){
//checks if typeof returns boolean
    if(typeof(bool)==='boolean'){
        return true;
    } else{
//type is not a boolean
        return false
    }

}
boo(null);



//#3 Drop It
function drop(arr, func){
//While our function returns false on the 0 index
    while(!func(arr[0])) {
//Shift left until it is true
        arr.shift();
    }
return arr;
}

drop([1, 2, 3], function(n) {return n < 3;});