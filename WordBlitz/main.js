// Getting elements
let currentWord = document.querySelector("#current-word");
let wordInput = document.querySelector("#word-input");
let time = document.querySelector("#time");
let score = document.querySelector("#score");
let message = document.querySelector("#message");
let actionBtn = document.querySelector("#action-button");
let wpmDisplay = document.querySelector('#wpm')

let timer = 5;
let count = 0;
let interval;
let gameStarted = false;
let startTime; // To track start time
// Word list
const words = [
    "apple",
    "sunset",
    "breeze",
    "ocean",
    "whisper",
    "guitar",
    "jungle",
    "planet",
    "butterfly",
    "shadow",
    "mystery",
    "journey",
    "lighthouse",
    "puzzle",
    "galaxy",
    "volcano",
    "diamond",
    "mirror",
    "horizon",
    "adventure",
    "storm",
    "canyon",
    "river",
    "moonlight",
    "tiger",
    "castle",
    "paradise",
    "nebula",
    "voyage",
    "rainbow",
    "fireworks",
    "lantern",
    "courage",
    "fantasy",
    "serenity",
    "echo",
    "twilight",
    "wizard",
    "infinity",
    "treasure",
    "crystal",
    "miracle",
    "meadow",
    "glacier",
    "universe",
    "tornado",
    "comet",
    "waterfall",
    "phoenix",
    "explore",
    "wisdom",
    "thunder",
    "majestic",
    "whispering",
    "eclipse",
    "gravity",
    "dragonfly",
    "harmony",
    "starlight",
    "adrenaline",
    "mountain",
    "ripple",
    "silhouette",
    "emerald",
    "symphony",
    "boulder",
    "wanderlust",
    "illumination",
    "perception",
    "tranquility",
    "captivate",
    "courageous",
    "paradox",
    "sanctuary",
    "reflection",
    "eternity",
    "serenade",
    "firefly",
    "enigma",
    "tranquil",
    "cosmos",
    "sunbeam",
    "moonstone",
    "cascade",
    "raindrop",
    "sapphire",
    "inspiration",
    "wanderer",
    "labyrinth",
    "buttercup",
    "captivation",
    "ephemeral",
    "elixir",
    "destiny",
    "mirage",
    "mystical",
    "legend",
    "midnight",
    "chronicle",
    "whimsical",
    "enchantment",
    "unravel",
    "cascade",
    "daydream",
    "velocity",
    "imagination",
    "ethereal",
    "charisma",
    "resonance",
    "epiphany",
    "glimpse",
    "nostalgic",
    "silken",
    "luminescence",
    "radiance",
    "phantasm",
    "bewitching",
    "reverie",
    "infinity",
    "whirlwind",
    "adventure",
    "aesthetic",
    "wanderlust",
    "panorama",
    "fascination",
    "crimson",
    "shimmering",
    "evanescent",
    "melancholy",
    "solitude",
    "silence",
    "destiny",
    "twilight",
    "illumination",
    "radiant",
    "aura",
    "eloquence",
    "fable",
    "exquisite",
    "zenith",
    "celestial",
    "voyager",
    "ephemeral",
    "stardust",
    "compass",
    "metaphor",
    "cascade",
    "resilience",
    "aether",
    "vivid",
    "inspire",
    "melody",
    "horizon",
    "tranquil",
    "luminous",
    "glacier",
    "labyrinth",
    "haven",
    "euphoria",
    "nebula",
    "constellation",
    "zephyr",
    "phantom",
    "wilderness",
    "equilibrium",
    "melodic",
    "magnolia",
    "arcane",
    "sonata",
    "aurora",
    "resplendent",
    "seraphic",
    "enchanted",
    "cascade",
    "oasis",
    "crescendo",
    "hypnotic",
    "perennial",
    "soulful",
    "mosaic",
    "labyrinthine",
    "divergent",
    "harmonious",
    "synchronicity",
    "chrysalis",
    "kaleidoscope",
    "serendipity",
    "quixotic",
    "pristine",
    "ambrosia",
    "effervescent",
    "cascade",
    "shroud",
    "ethereal",
    "halcyon",
    "cynosure",
    "incandescence",
    "rapture",
    "resplendent",
    "paragon",
    "enigma",
    "effulgence",
    "reverberation",
    "tranquility",
    "luminary",
    "metamorphosis",
    "synesthesia",
    "catharsis",
    "zenith",
    "paradigm",
    "serendipity",
    "unison",
    "pristine",
    "wanderlust",
    "petrichor",
    "ephemeral",
    "arcadia",
    "quintessence",
    "phantasmagoria",
    "epiphany",
    "labyrinth",
    "penumbra",
    "mellifluous",
    "sonder",
    "paradigm",
    "ineffable",
    "nebulous",
    "sonder",
    "incandescent",
    "mystique",
    "elixir",
    "sanctuary",
    "sonder",
    "ephemeral",
    "paradox",
    "eloquent",
    "labyrinthine",
    "aesthetic",
    "whimsical",
    "luminous",
    "enigma",
    "euphoria",
    "serendipity",
    "crescendo",
    "cascade",
    "quintessential",
    "effervescence",
    "metaphor",
    "zenith",
    "sanctuary",
    "halcyon",
    "exuberant",
    "reverie",
    "panacea",
    "vivid",
    "wanderer",
    "cascade",
    "effervescent",
    "mirage",
    "luminous",
    "vortex",
    "labyrinth",
    "sonorous",
    "resonance",
    "exhilaration",
    "serendipitous",
    "wanderlust",
    "chimerical",
    "radiant",
    "ineffable",
    "fascination",
    "twilight",
    "miraculous",
    "pristine",
    "mythical",
    "vivacious",
    "phantom",
    "soulful",
    "serene",
    "enraptured",
    "phosphorescence",
    "exquisite",
    "cosmic",
    "rhapsody",
    "ephemeral",
    "kaleidoscopic",
    "chivalrous",
    "evanescent",
    "halcyon",
    "reverent",
    "luminous",
    "effervescent",
    "shimmering",
    "fathomless",
    "lyrical",
    "glowing",
    "panoramic",
    "resplendent",
    "sublime",
    "tranquil",
    "cosmic",
    "inspirational",
    "phantasm",
    "mystical",
    "fascination",
    "whispering",
    "majestic",
    "horizon",
    "oceanic",
    "rapture",
    "auroral",
    "sonata",
    "mirage",
    "mystique",
    "resonance",
    "symphony",
    "ethereal",
    "pristine",
    "halcyon",
    "labyrinthine",
    "twilight",
    "aesthetic",
    "moonbeam",
    "chiaroscuro",
    "vivid",
    "euphoric",
    "illuminate",
    "nostalgia",
    "wonderment",
    "eloquence",
    "eclipsing",
    "lullaby",
    "resilience",
    "infinitesimal",
    "rhapsodic",
    "delirium",
    "idyllic",
    "zenith",
    "flourish",
    "opalescent",
    "magnificent",
    "splendor",
    "illuminated",
    "glorious",
    "aura",
    "introspection",
    "brilliant",
    "whisper",
    "mesmerizing",
    "whimsical",
];

window.addEventListener("DOMContentLoaded", setupGame);

function setupGame() {
    wordInput.disabled = true;
    actionBtn.addEventListener('click', startGame)

    // Listen for Enter key press
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            startGame();
        }
    });
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true
        actionBtn.innerHTML = 'Restart'
        wordInput.disabled = false
        wordInput.focus();
        wordInput.value = ''
        wordInput.placeholder = 'Type Here...'
        wordInput.style.border = ''
        wordInput.style.backgroundColor = ''
        count = 0
        timer = 5
        score.innerHTML = count
        timer.innerHTML = timer
        message.innerHTML = ''
        wpmDisplay.innerHTML = "WPM: 0"; // Reset WPM
        startTime = new Date().getTime(); // Set start time
        showWord()
        wordInput.addEventListener('input', startMatch)
        clearInterval(interval)
        interval = setInterval(countDown, 1000)
    } else {
        resetGame()
    }
}

function showWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}

function startMatch() {
    if (matchWords()) {
        message.innerHTML = "Correct!";
        count++;
        score.innerHTML = count;
        wordInput.value = "";
        showWord();
        timer = 5; // Reset time only when a word is matched
        updateWPM(); // update WPM on each correct word 
    } else {
        message.innerHTML = "Typing...";
    }
}

function matchWords() {
    return currentWord.innerHTML === wordInput.value;
}

function countDown() {
    if (timer > 0) {
        timer--;
    } else {
        clearInterval(interval); // Stop the timer
        gameOver();
    }
    time.innerHTML = timer;
}

function updateWPM() {
    let elapsedTime = (new Date().getTime() - startTime) / 60000; // Convert to minutes
    let wpm = elapsedTime > 0 ? Math.round(count / elapsedTime) : 0; // Avoid division by zero
    wpmDisplay.innerHTML = `WPM: ${wpm}`;
}

function gameOver() {
    message.innerHTML = "Game Over!";
    wordInput.disabled = true;
    wordInput.placeholder = "Click Restart";
    wordInput.style.border = "2px solid red";
    wordInput.style.backgroundColor = "#ffcccc";
    wordInput.value = "";
}

// Reset Game Function
function resetGame() {
    count = 0;
    timer = 5;
    score.innerHTML = count;
    time.innerHTML = timer;
    message.innerHTML = "";
    wordInput.disabled = false;
    wordInput.focus();
    wordInput.placeholder = "Type here...";
    wordInput.style.border = "";
    wordInput.style.backgroundColor = "";
    wordInput.value = "";
    showWord();
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
}

let visitorsCount = localStorage.getItem('page_view');
if (visitorsCount === null) {
    visitorsCount = 1;
} else {
    visitorsCount = parseInt(visitorsCount) + 1;
}
localStorage.setItem('page_view', visitorsCount);
document.getElementById('counter').textContent = `Visitors: ${visitorsCount}`;
