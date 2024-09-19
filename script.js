 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	        radius = parseFloat(radius)
	        let area = Math.PI*(radius**2)
	        area = area.toFixed(2)
	        
            return alert(`The area of the circle with radius ${radius} is ${area}`)
}
calculateArea();
