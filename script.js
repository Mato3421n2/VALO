const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

// Move the "No" button randomly when hovered
noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

// Display the popup when "Yes" button is clicked
yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    
    // Drop multiple "mhm" texts
    for (let i = 0; i < 100; i++) {
        setTimeout(dropMhm, i * 100); // Delay between each drop for a confetti-like effect
    }

    // Redirect after 5 seconds to the provided link
    setTimeout(() => {
        window.location.href = "https://i.pinimg.com/236x/1d/c6/9d/1dc69de60ce2cf2f0ec5d9d43dc0d173.jpg";
    }, 5000); // 5-second delay
});

// Function to create and drop "mhm" text
function dropMhm() {
    const mhm = document.createElement("div");
    mhm.innerText = "mhm";
    mhm.style.position = "absolute";
    mhm.style.fontSize = Math.random() * 20 + 20 + "px"; // Random font size
    mhm.style.color = "#134e13"; // Color for the "mhm" text
    mhm.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    mhm.style.top = "-50px"; // Start from above the viewport
    mhm.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation
    mhm.style.transition = `top ${Math.random() * 2 + 3}s ease-in`; // Falling duration

    document.body.appendChild(mhm);

    // Animate falling
    setTimeout(() => {
        mhm.style.top = "100vh"; // Fall to the bottom of the screen
    }, 100);

    // Remove the element after it falls
    setTimeout(() => {
        mhm.remove();
    }, 5000);
}

// Hide the popup when clicked
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";

// Function to select an option (used in future steps)
function selectOption(option) {
    // Store the selected option in localStorage
    localStorage.setItem('selectedOption', option);

    // Redirect to the result page
    // window.location.href = 'result.html'; // Commented out to prevent redirection
}
