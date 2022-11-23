/*
    return the only unique number from an array.
    All numbers in the input array are present twice, except for one.

    Example:
    In the array [ 1, 8, 4, 4, 6, 1, 8 ], all numbers are present twice except 6
    You should return 6
*/

function findUnique(input) {
    let outputArray = [];
    for(let i = 0; i <input.length; i++) 
    { 
      isUnique = true;
      count = 1; //Updates the count again to 1 for every new character
      
          for(let j = i+1; j <input.length; j++) 
          {
              if(input[i] == input[j]) 
              { 
                  count++; 
                  isUnique=false;
              }
              
  
          }
              if(isUnique == true){
                //push onto array
                outputArray.push(input[i])
              }

      }
  
  return outputArray;
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.findUnique = findUnique