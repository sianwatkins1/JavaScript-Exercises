/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    let textArray = text.split("");
    let i = 0

    while(i < n){
        let str1 = []
        let str2 = []
        for(let letter = 0; letter <textArray.length; letter++){

            if(letter %2 == 0 || letter == 0){
            // if divisible by 2 or equal 0 put into string 2 (to be stuck on the end)
                str2.push(textArray[letter])
            }
            else if (letter %2 !==0){
            //if i not divisible by 2 or put into string 1 (to be put at the front)
                str1.push(textArray[letter])
            }
            
        }    
        textArray = str1.concat(str2).join("")   
        i++
    }
    return textArray
}





/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt