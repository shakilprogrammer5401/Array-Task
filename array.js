//  T-001: Create an array of 5 elements using the Array Constructor. 

// code start 

const Fname =  new Array("Shakil", "Shamim", "Shakib", "Hasan", "Hossen") 
console.log(Fname)
// output :  [ 'Shakil', 'Shamim', 'Shakib', 'Hasan', 'Hossen' ]

// code end


// T-002: Create an array of 3 empty slots.
// code start 

const empty = new Array(3)    //output: [ <3 empty items> ]
console.log(empty)

// code end


// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

// code start 

const numbers1 = [5, 10, 15, 20, 25, 30] 
const fourthElement = numbers1[numbers1.length - 3] // output : 20
console.log(fourthElement)

// code end


//Use the for loop on the above array to print elements in the odd index

//code start
const numbers2 = [5, 10, 15, 20, 25, 30] 
for(let i = 1; i <numbers2.length; i+=2){
    console.log(`Element at the index ${i} is ${numbers2[i]}`) // you can test
}

//code end



// T-005: Add one element at the front and the end of an array.

//code start

const fName1 = ["Shamim","Shakib"]
fName1.unshift("Shakil");
fName1.push("Minarul");
console.log(fName1)
//code end



// T-006: Remove an element from the front and the end of an array.

//code start
const fName2 = ["Shakil","Shakib", "Shamim", 'Minarul']
fName2.shift()
fName2.pop()
console.log(fName2)
//code end




// T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

//code start
// Names of my ten favourite  Bangladeshi foods or dishes

const fFood = ["Kacchi Biryani", "Bhuna khichuri", "Mutton Curry", " Mutton Biryani", "Shorshe Ilish", "Morog Polao", "Jhalmuri", "Haleem", "Bhapa Pitha", "Sheek Kabab"]


const [ , , , , , sixNoElement, ,  , , ] = fFood
console.log(sixNoElement)

//code end



// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.


//cose start
const fFoods = ["Kacchi Biryani", "Bhuna khichuri", "Mutton Curry", " Mutton Biryani", "Shorshe Ilish", "Morog Polao", "Jhalmuri", "Haleem", "Bhapa Pitha", "Sheek Kabab"]

const [ , , ...rest] = fFoods
console.log(rest)

//code end




// T-009 Clone an Array(Shallow cloning)
//code start
 const villageName = ["Tangrakhali", "Kalinci", "Koikhali", "Manikkhali"]
const cloneVillageName1 = [...villageName]; //spread operator
const cloneVillageName2 = villageName.slice()
const cloneVillageName3 = Array.from(villageName)

console.log(cloneVillageName1)
console.log(cloneVillageName2)
console.log(cloneVillageName3)

//code end



// T-010: Empty an array using its length property

//code start 
const villageNames = ["Tangrakhali", "Kalinci", "Koikhali", "Manikkhali"]
villageName.length = 0;
console.log(villageName)

//code end 




//T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

//code start
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i=0; i<numbers.length; i++){
    if (numbers[i]===5){
       numbers.length =6
        break
    }
   }
   console.log(numbers)

//code end