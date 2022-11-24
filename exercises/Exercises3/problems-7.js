/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    const arr = text.split("");
    // loop n times (i<n)
    while(i < n){
        // for each letter in array
        for(){
                //if i divisible by 1 put into string 1
    // if divisible by 0 put into string 2
        }
        i++
    }

    //concat 2 strings
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