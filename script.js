 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	        let area = 0
	        if(radius > 0){
				area = 3.14*(radius**2).toFixed(2)
			}
	        
            return alert(`The area of the circle with radius ${radius} is ${area}`)
}
calculateArea();
