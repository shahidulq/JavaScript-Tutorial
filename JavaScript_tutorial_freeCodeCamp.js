//JavaScript codes written here were followed from a YouTube video uploaded by freeCodeCamp

// javascript
console.log("Hello World")
var myArray = [[1,2,3], [4,5,6], [1,2,3], [[7,8,9], 2,3]]
console.log(myArray)					//will return the whole array
var myData = myArray[3][0][1]
console.log(myData)						//will return 8

//push to add item to list
var ourArray = ["Stimson", "J", "cat"]
ourArray.push(["happy", "joy"])         // different
console.log(ourArray)					//will return [ 'Stimson', 'J', 'cat', [ 'happy', 'joy' ] ]

var ourArray2 = [["John", 23], ["cat", 2]]
ourArray2.push(["dog", 3])
console.log(ourArray2)					//will return [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]

//pop to remove last item
var ourArray3 = [1,2,3]
var removeFromOurArray3 = ourArray3.pop()
console.log(removeFromOurArray3)		//will return 3
console.log(ourArray3)					//will return [ 1, 2 ]

//shift to remove first item
var ourArray3 = [1,2,3]
var removeFromOurArray3 = ourArray3.shift()
console.log(removeFromOurArray3)		//will return 1
console.log(ourArray3)					//will return [ 2, 3 ]

//unshift to add as first item
var ourArray3 = [1,2,3]
ourArray3.unshift("Happy")
console.log(ourArray3)					//will return [ 'Happy', 1, 2, 3 ]

//list within a list -- shoppin list
var myList = [["Mango", 5],["Potato", 4],["Egg", 12],]
console.log(myList)						//will return the whole list

//parameters 	are variable that act as placeholder for the values that are input to functions when called

function addTwoNumbers (a, b) {
console.log(a + b)
}
addTwoNumbers(10, 5)					//will return 15

function addTwoNumbersv2 (a, b) {
var c = 10			//scope of this variable is local
var d = 20			//I cannot declare variable without var keyword like the video
var result = a + b + c + d
return result
}
console.log(addTwoNumbersv2(2, 5))		//will return 37


function wordBanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = ""
result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
return result
 }
console.log(wordBanks("dog", "big", "ran", "quickly"))
console.log(wordBanks("bike", "slow", "flew", "slowly"))



// // if same variable is declared as both local and global variable in different places then 
// // 	local variable takes precedent over the global variable

var x = "Shirt"
function clothe() {
return x
}
console.log(clothe())		//will return 	Shirt

var x = "Shirt"
function clothe2() {
var x = "Shoe"
return x
}
console.log(clothe2())		//will return 	Shoe
// // local variable “Shoe” takes precedent over the global variable “Shirt” 

var myGlobal 	= 10;		//scope global	as declared outside of function

function func1() {
	var oopsGlobal = 5;     // i cannot declare variable here without "var" keyword to make it                              global, as scrimba.com won't allow it
    return oopsGlobal
}
var oopsGlobal2 = 5;        // as i could not declare global variable within function, hence                                     declaring it here
function func2() {
	var output = "";
	if (	typeof myGlobal 	!=	"Undefined") {
		output += 	"myGlobal: " + myGlobal
	}
	if (typeof 	oopsGlobal2 	!= 	"undefined") {
		output +=   " oopsGlobal2: " + oopsGlobal2
	}
	console.log(output)
}
console.log(func1())        // will return 5
func2()                     // will return myglobal: 10 oopsGlobal2: 5

//Variables that are declared within a function as well as function parameters have local scope
	// that means it only visible in the function
function myLocalScope () {
	var myVar = 5
	console.log(myVar)
}
//but 
// function myLocalScope2 () {
// 	var myVar = 5
// 	console.log(myvar)
// }
myLocalScope()		    //will return 	5
//console.log(myVar)		//will return 	error 	as scope gone out of function area

//we can return a value from a function with return statement
function minusSeven (num) {
	return num - 7
}
console.log(minusSeven(10))	//will return 	3

//understanding undefined value returned from function
	//- functions can have no return statement too
var sum = 0
function addThree () {
	sum += 3
}
console.log(sum)            //will return   0
console.log(addThree())		//will return nothing	that is undefined value

//value assignment of a variable with a return value of a function
var changed = 0
function change(num) {
	return (num + 5 ) / 3
}
changed = change(10)		// assigning “change function” as “value for variable changed”
console.log(changed)		//will return	5


//Queue 	abstract data structure in computer science	where items are kept in order
		//New items	are added in the back	of the queue
		//Old items 	are taken from front	of the queue
function nextInLine(arr, item) {
    arr.push(item)			    //add item to the last
    return arr.shift()			//remove item from the first
}
var testArray = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArray))		//will return	Before: 1,2,3,4,5
console.log(nextInLine(testArray, 6))	    			//will return	1
console.log("After: " + JSON.stringify(testArray)) 		//will return	After: 2,3,4,5,6

//Boolean & if statement
function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {              //first part (true part) of the if statement
	return "Yes, that was true"
	}
	return "No, that was false"     //second part (false part) of the if statement
}
console.log(trueOrFalse(true))      //very interesting
                                    //it is accepting true in the console log as it is the first part of if logical statement
console.log(trueOrFalse(false))

/* var assignment operator	=
comparison operators
Equality operator		    ==		//will allow automatic type conversion
Strict equality operator	===		//will not allow type conversion
Inequality operator		    !=		//will allow automatic type conversion
Strict inequality operator	!==		//will not allow type conversion
Greater than operator 	>	less than operator	< */
/*
3 == 3		true		3 === 3		true
3 == “3”	true		3 === “3” 	not true
*/

function testStrictNotEqual (val) {
	if (val !== 10) {                       //does not accept type conversion
	return "Not Equal"
	}
	return "Equal"
}
console.log(testStrictNotEqual ("10"))		//will return	Not Equal
//however,
function testSimpletNotEqual (val) {
	if (val != 10) {                        //accept type conversion
	return "Not Equal"
	}
	return "Equal"
}
console.log(testSimpletNotEqual ("10"))		//will return	Equal

function compareEquality (a, b) {
	if (a === b) {
	return "Equal"
	}
	"Not Equal"
}
console.log(compareEquality (10, 10))		//will return		Equal
console.log(compareEquality (10, "10"))		//will return		undefined   ??Not Equal??

//Nested if statement		and logical And		&&
function nestedIf (val) {
	if (val <= 50) {
		if (val >= 25) {
		return "Yes"
		}
	}
	return "no"
}
//alternative and easier way of nested if		with logical And 	&&
function nestedIfAndLogicalAnd (val) {
	if (val <= 50 && val >= 25) {
		return "Yes"
	}
	return "no"
}

console.log(nestedIf(40))			        //will return	true
console.log(nestedIfAndLogicalAnd(55))		//will return	false

//logical Or	||
function logicalOr (val) {			// instead of nested If
	if (val < 10 || val > 20) {
		return "Yes"
	}
	return "no"
}
console.log(logicalOr(40))			//will return	true

//else 	instead of 	multiple / last If block
function multipleIf (val) {
	if (val < 5) {
	return "less than 5"
	}
	if (val >= 5 ) {
	return "not less than 5"
	}
}

function elseInsteadOfMultipleIf (val) {
    if (val < 5) {
	return "less than 5"
	} else { 
	return "not less than 5"
	}
}
console.log(multipleIf (40))			        //will return	more than 5
console.log(elseInsteadOfMultipleIf (40))		//will return		more than 5

// else if 		instead of 	more than 2 if statements	condition order is very important
function moreThanTwoIfStatementWrongOrder (val) {
	if (val < 25) {
	return "less than 25"
	} else if (val < 5) { 
	return "less than 5"
	} else { 
	return "not between 5 and 25"
	}
}
//console.log(moreThanTwoIfStatementWrongOrder (1))	
		//will return	less than 25	but it is less than 5
//so, condition order should be
function moreThanTwoIfStatementCorrectOrder (val) {
	if (val < 5) {
	return "less than 5"
	} else if (val < 25) { 
	return "less than 25"
	} else { 
	return "not between 5 and 25"
	}
}
console.log(moreThanTwoIfStatementWrongOrder (1))	//will return	less than 25    wrong result
console.log(moreThanTwoIfStatementCorrectOrder (1))	//will return	less than 55    correct result

//Chanied if and else if statement
function chainedElseIfStatement (val) {
	if (val < 5) {
	return "small"
	} else if (val < 10) { 
	return "medium"
	} else if (val < 15) { 
	return "large"
	} else { 
	return "huge"
	}
}
console.log(chainedElseIfStatement(12))		//will return	large

//Golf Score Code
/*
Strokes		return
1		“Hole-in-one”
<= par -2	“Eagle”
par -1		“Birdie”
par		“Par”
par + 1		“Bogey”
par + 2		“Double Bogey”
par + 3		“Go Home!”
*/
function golfScore (par, stroke ) {
	if (stroke == 1) { return "Hole-in-one"
	} else if (stroke <= par -2) { return "Eagle"
	} else if (stroke == par -1) { return "Birdie"
	} else if (stroke == par) { return "Par"
	} else if (stroke == par + 1) { return "Bogey"
	} else if (stroke == par + 2) { return "Double Bogey"
	} else if (stroke >= 3){ return "Go Home!" }
}
console.log (golfScore(5, 10))      // will return  Go Home!

// Alternativeley

var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScoreAlt (par, stroke ) {
	if (stroke == 1) { return names[0]
	} else if (stroke <= par -2) { return names[1]
	} else if (stroke == par -1) { return names[2]
	} else if (stroke == par) { return names[3]
	} else if (stroke == par + 1) { return names[4]
	} else if (stroke == par + 2) { return names[5]
	} else if (stroke >= 3){ return names[6] }
}
console.log(golfScoreAlt(5, 2)) 		//will return 	Go Home!

//switch	case	return	break 		instead of multiple if blocks
function switchFunction (val) {
	var answer = ""
	switch (val) {
		case 1: 
			answer = "alpha"; 
			break;
		case 2: 
			answer = "beta"; 
			break;
		case "n":
			answer = "gamma"; 
			break;
	}
	return answer
}
console.log(switchFunction(2))		    //will return		beta
console.log(switchFunction("n"))		//will return		gamma

// switch       multiple case with same return      like logical or
function switchFunction2 (val) {
	var answer = ""
	switch (val) {
		case 1: 
		case 2: 
			answer = "beta"; 
			break;
		case "n":
			answer = "gamma"; 
			break;
        default :
            answer = "none"
            break;
	}
	return answer
}

console.log(switchFunction2(1))			//will return		beta
console.log(switchFunction2(2))			//will return		beta
console.log(switchFunction2("k"))		//will return		none

//boolean expression 		instead of 	if statements
function isless (a, b) {
	if (a < b ) { 
        return true
        } else {
        return  false}
}
//can be replaced with
function isless2 (a, b) {
	return a < b
}
console.log(isless (10, 15))		//will return	true
console.log(isless2 (20, 15))		//will return	false

//test parameters for condition before final return calculation
function testParameters (a, b) {
	if (a < 0 || b < 0) {
	return undefined
	}
	return a*b
}
console.log(testParameters(2,2))		//will return	4
console.log(testParameters(-2,2))		//will return	undefined or null

//Card Counting	cc

var count = 0
function cc(card) {
	switch(card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count ++		//for the above cases incrementing the count value 
			break
		case 10:
		case ("J"):
		case ("K"):
		case ("Q"):
		case ("A"):
			count--			// for the above cases incrementing the count value
			break
	}					//for cases 7, 8, 9 there will be no change in count
	var holdbet = "Hold"
	if (count > 0) {
		holdbet = "bet"
	} 
	return	count + " " + holdbet
}

cc(2); cc(3); cc(7); cc("K"); cc("A");
console.log(cc(4));             //will return 1 bet
cc(2); cc(10); cc("K"); cc("K"); cc("A");
console.log(cc(4))              //will return -1 hold   (it includes prevous results counting)

//Example
var testObject = {			    //Object features
	"name": "Camper",		    //property: value
	"legs": 4,			        //value can be strings, number, array & any data type in js.
	"tails": "1",			    //access to objects is through properties
	"friends": ["everything"]	//both dot and bracket notations are used for properties
}
var testObject2 = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
}

//access objects
	//with dot notation
var nameValue = testObject.name
var friendsValue = testObject.friends

console.log(nameValue)                  //will return Camper
console.log(friendsValue)               //will return [“everything”]

	//with bracket notation
var entreeValue = testObject2["an entree"]      //[ ]notation cab be used anytime
var drinkValue = testObject2["the drink"]       //[ ]notation is a must
var friendsValueAgain = testObject["friends"]       //if there is a space in property
console.log(entreeValue)			    //will return hamburger
console.log(drinkValue) 				//will return water
console.log(friendsValueAgain)          //will return [“everything”]

	//access objects with variables using bracket notation
var objectName = "name"
var objectNameVarOutput = testObject[objectName]    //bracket notation is a must
console.log(objectNameVarOutput)        //will return Camper

//Update object properties	with dot notations
testObject.name = "Happy Camper"
console.log(testObject.name)			//will return 	Happy Camper

testObject.name = "Camper"
console.log(testObject.name)

//Add properties to object 	with dot notation 	or bracket notation
testObject.gender = "M"
testObject["height"] = "36 inches"
console.log(testObject.gender)			//will return	M
console.log(testObject.height)			//will return	36 inches

//Delete properties from object		with dot notation 	or bracket notation
delete testObject.gender
delete testObject["height"]
console.log(testObject.gender)			//will return	undefined or nothing
console.log(testObject.height)			//will return	undefined or nothing

function switchFunctionToReplace (val) {
	var answer = ""
	switch (val) {
		case 1: 
			answer = "alpha"; 
			break;
		case 2: 
			answer = "beta"; 
			break;
		case "n":
			answer = "gamma"; 
			break;
	}
	return answer
}
console.log(switchFunctionToReplace("n"))		//will return		gamma

function switchReplacedWtihObject (val) {
	var answer = ""
	var repalcedByOBject = {
		1 : "alpha",
		2 : "beta",
		"n" : "gamma"
	};
    answer = repalcedByOBject[val]      //Special ATTENTION: include varName[valueProperty] -in []
	return answer                               // or return repalcedByOBject[val]
}
console.log(switchReplacedWtihObject(2))		//will return		beta
console.log(switchReplacedWtihObject("n"))		//will return		gamma

//Check if the object has a property 	.hasOwnProperty
function checkObjectHasProperty (propertyName) {        //no quote in parameter decleration
	if (testObject.hasOwnProperty("tails")) {
		return testObject["tails"];
	} else {
		return "Not Fount"
	}
}
console.log(checkObjectHasProperty("propertyName"))     //quote must -param-output  - will return 1

//Complex Objects	like JSONA 
//JavaScript object can store 	strings, numbers, arrays, and even other objects
var myMusic = [					//outer array starts	starts with [ bracket
	{			//1st object starts (within array)		starts with { curly braces
		"artist": "Billy Joel",		//string
		"title": "Piano Man",
		"release_year": 1973,		//number
		"formats": [			//array within 1st object
			"CD",
			"LP"
		],
		"gold": true			//boolean
	},			//1st object ends (within array)
	{			//2nd object starts (within array)
		"artist": "Beau Carnes",		//string
		"title": "Cereal Man",
		"release_year": 2003,		//number
		"formats": [			//array within 2nd object
			"YouTube video"
		],
	}			//2nd object ends (within array)
]						//outer array ends
var myMusicContent = myMusic[0]["title"]      //array index - object notation   -return Piano Man
var myMusicContent2 = myMusic[0].formats[1]     //index-dot-index   will return LP
var myMusicContent3 = myMusic[1]["title"]		//index-bracket		will return Cereal Man

console.log(myMusicContent)                     //will return   Piano Man
console.log(myMusicContent2)                    //will return   LP
console.log(myMusicContent3)                    //will return   Cereal Man

//access nested objects
var myStorage = {				//object # 1
	"car": {					//object # 2		within object 1
		"inside": {			    //object # 3		within object 2
			"glove box": "maps",
			"passenger seat": "crumbs" 
		},
		"outside" : {			//object # 4		within object 2
			"trunk": "jack"
		}
	}
}
var gloveBoxContents = myStorage.car.inside["glove box"]        //accessing nested objects
var gloveBoxContents2 = myStorage["car"]["inside"]["glove box"]     //accessing nested objects
var gloveBoxContents3 = myStorage.car.inside
var gloveBoxContents4 = myStorage.car

console.log(gloveBoxContents)		//will return 	maps
console.log(gloveBoxContents2)		//will return 	maps
console.log(gloveBoxContents3)		//will return 	a whole object {prop:value, prop:value}
console.log(gloveBoxContents4)

//Coding challenge	update record in object

var collection = {
	"2548" : {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let It Rock",
			"You Give Love a Bad Name"
			]
		},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
			"1999",
			"Little Red Corvette"
			]
		},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": [ ]
		},
	"5439": {
		"album": "ABBA Gold"
		}
}
//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	if (value === "") {                 //???? how id, prop and value are connected ???? 
	delete collection[id][prop]
	} else if (prop === "tracks") {
	collection[id][prop] = collection[id][prop] || []
	collection[id][prop].push(value)
	} else {
	collection[id][prop] = value
	}
	return collection
}
console.log(updateRecords(5439, "artist", "ABBA"))      //will return revised collection
console.log(collection[5439].artist)                    //will return ABBA

function updateRecords2(a, b, c) {
	if (c === "") {                 //???? how id, prop and value are connected ???? 
	delete collection[a][b]
	} else if (b === "tracks") {
	collection[a][b] = collection[a][b] || []
	collection[a][b].push(c)
	} else {
	collection[a][b] = c
	}
	return collection
}
console.log(updateRecords2(1245, "album", "New Data"))      //will return revised collection
console.log(collection[1245].album)                         //will return   New Data

/*          *** very important  ***
mapping of parameteres with object data        in the above 2 functions
the first parameter  -  1st element of the object   declared above as id and a
the second parameter  - 2nd element of the object   declared above as prop and b
the third parameter  -  3rd element of the object   declared above as value and c

it's like   - [a][b][c]
            - [id][prop][value]
            - [2548].tracks[1]      see in the below example
var exampleOfParameterMapping = collection[2548]["tracks"][1]
console.log(exampleOfParameterMapping)
*/





