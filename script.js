document.addEventListener("DOMContentLoaded", function(event) {
    // Get car element
    var car = document.getElementById("car");

    // Function to move the car
    function moveCar() {
        // Set new position
        var newPosition = window.innerWidth;

        // Reset car position to the initial position
        car.style.left = "-100px";

        // Use setTimeout to delay the transition to give the illusion of continuous movement
        setTimeout(function() {
            // Move the car to the new position
            car.style.left = newPosition + "px";
        }, 100);
    }

    // Call moveCar function initially and then every 5 seconds
    moveCar();
    setInterval(moveCar, 50000);
});
