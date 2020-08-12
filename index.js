
console.log("Hello World!");

// Literal Syntax
const circle1 = {
	radius: 1,
	location: {
		x: 1,
		y:1
	},
	draw: function() {
		console.log('draw');
	}
}

circle1.draw();

// Factory Function
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	};
}

const circle2 = createCircle(1);

// Constructor Function
function Circle(radius){
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
	}
}

const another_circle = new Circle(1);

// Value Type vs Reference Type
// Primitives (Value types) are copied by their value, Objects (Reference types) are copied by their reference

let number = 10;
function increase(number){
	number++;
}
increase(number);
console.log(number);	// the number never changed because the value of number was used for the function and taken as a copy, not changed.

let obj = {value: 10};
function increase_obj(obj){
	obj.value++;
}
console.log(obj);	// the value inside the object obj was changed because obj.value++ was referencing to the same object as obj

// Adding and Removing properties

circle1.location = {x: 1};
console.log(circle1);

//another way of adding properties is using the bracket location
circle2['location'] = { x: 1};
console.log(circle2);

// this becomes useful when accessing properties by holders or propertynames
cons propertyName = 'location'
console.log(circle2[propertyName])
// or when the name of the property has invalid syntax for using with the dot method
cons propertyName2 = 'center-location'

// deleting properties is pretty direct and can be useful when sharing objects with sensible info
delete circle1.location
delete circle2['location']

//Enumerating Properties
for(let key in circle1){	// use a for loop to iterate through the keys of an object (properties and methods)
	if(typeof circle1[key]!=='function')	// the typeof function lets you check types of objects
		console.log(key, circle1[key]);
}

const keys = Object.keys(circle1);	// the Object object has the keys method, which lets you check which keys are in any object
console.log(keys);

if('radius' in circle1)			// the 'in' operator checks if a value is in an array
	console.log('Circle has a radius.');

//Private properties + Getters
function Circle2(radius){
	this.radius = radius;
	
	let defaultLocation = {x: 0, y: 0}; // By defining locally a function inside our constructor function, we create properties that could be seen as private (given that we wont be able to access them from the outside of the function

	this.getDefaultLocation = function(){  // We can create a method that lets us "read" those private properties, that way we can "get" them from the outside without being able to change them.
		return defaultLocation;
	}

	this.draw = function(){
		console.log('draw');
	}

}

const circle4 = new Circle2(10);
circle4.draw();
console.log(circle4.getDefaultLocation());


