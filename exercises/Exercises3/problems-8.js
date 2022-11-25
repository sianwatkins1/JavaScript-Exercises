/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    sequence = sequence.toLowerCase()
    sequence = sequence.split('');
    for(let i = 0; i < sequence.length; i++){
        let j = i + 1 
        if (j < sequence.length - 1){
            if (sequence[i] == sequence [j]){
                removedElement = sequence.splice(i, 1)
                removedElement = sequence.splice(i, 1)
            }
        }else{
            i = -1;
            j = 1;
        }
    }
    sequence=sequence.join("");
    console.log(sequence)
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react