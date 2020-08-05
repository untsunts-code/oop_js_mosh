
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
