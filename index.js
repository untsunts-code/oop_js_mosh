
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
