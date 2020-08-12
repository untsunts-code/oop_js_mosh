
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

// Private properties + Getters 2 + Setters
function Circle3(radius){
	this.radius = radius;

	this.draw = function(){
		console.log('draw');
	};

	let defaultLocation = { x: 0, y:0 };

	Object.defineProperty(this, 'defaultLocation', {  // this is a safe way to "get"(read) and "set"(change) values from our private properties, if we only define a get function, our property will only be a 'read only' property
		get : function() {    // this function lets us read the property in the second argument from the outside of our function
			return defaultLocation;
		},
		set : function(value) {  // one interesting thing about defining setters is that, given that they are functions, we can add certain functionality to those methods (like verifying data before we change the values of our properties)
			
			if(!value.x || !value.y)
				throw new Error('Invalid location.');  // Error objects will come in handy to avoid mistakes from user inputs or letting us know where something is going wrong, use them

			defaultLocation = value;
		}
	});
}


const cirlce5 = Circle3(15);
console.log(circle.defaultLocation);	// thanks to the get method
circle.defaultLocation = 1;		// this will throw an error thanks to the set method


