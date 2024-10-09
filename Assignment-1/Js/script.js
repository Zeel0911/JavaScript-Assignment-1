let selectedOptions = ["", "", "", "", ""];

// Function to cycle through the options
function cycleOptions(columnIndex) {
    const options = [
        ["Swati", "Ramesh", "The wizard", "The Sun", "Suresh"],
        ["sat on", "loves", "makes", "teaches", "is lazy"],
        ["the red", "to play", "piano", "weird face", "under tree"],
        ["bicycle", "and", "danced with", "and arrests", "to make"],
        ["on Saturday", "eats pizza", "crocodile", "Rapunzel", "cocktail"]
    ];
    
    const currentOption = document.getElementById(`part${columnIndex + 1}`).textContent;
    const currentIndex = options[columnIndex].indexOf(currentOption);
    const nextIndex = (currentIndex + 1) % options[columnIndex].length;
    
    document.getElementById(`part${columnIndex + 1}`).textContent = options[columnIndex][nextIndex];
    selectedOptions[columnIndex] = options[columnIndex][nextIndex];
}

// Function to show the complete story
function showStory() {
    const story = selectedOptions.join(" ");
    document.getElementById("storyDisplay").textContent = story;
}

// Function to reset the story
function resetStory() {
    selectedOptions = ["", "", "", "", ""];
    for (let i = 0; i < 5; i++) {
        document.getElementById(`part${i + 1}`).textContent = `Part ${i + 1}`;
    }
    document.getElementById("storyDisplay").textContent = "";
}

// Function to convert the story to speech
function convertToSpeech() {
    const story = selectedOptions.join(" ");
    const speech = new SpeechSynthesisUtterance(story);
    window.speechSynthesis.speak(speech);
}
