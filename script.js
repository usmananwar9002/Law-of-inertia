let spring = document.querySelector("#spring")
let height = 280;
let height2 = 280;
let speed = 0;
let strength = 0.05;
let isClicked = false;
let damping = 0.92;
let holdStart = 0;
let animationSpeed = 1;
let isHolding = false;
let holdTime = 0;
spring.addEventListener("mousedown", () => {
    holdStart = Date.now();
    isHolding = true;
});
spring.addEventListener("mouseup", () => {
    isHolding = false;
})
function animate() {
    
    
    if (isHolding) {
        height += (320 - height) * 0.25;
        let holdSeconds = (Date.now() - holdStart) / 1000;

        if (holdSeconds < 1) {
            animationSpeed = 1;
        }
        else if (holdSeconds < 2) {
            animationSpeed = 1.6;
        }
        else if (holdSeconds < 5) {
            animationSpeed = 2;
        }
        else if (holdSeconds < 7) {
            animationSpeed = 3;
        }
        else if (holdSeconds < 8) {
            animationSpeed = 4;
        }
        else if (holdSeconds < 9) {
            animationSpeed = 5;
        }
        console.log(holdSeconds)
        height = 320;
        speed = 0;
    } else {
        let force = (200 - height) * strength;
        speed += force;
        speed *= damping;
        height += speed * animationSpeed;
    }

    spring.style.height = height + "px"
    requestAnimationFrame(animate);
}
animate()