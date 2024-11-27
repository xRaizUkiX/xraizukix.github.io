let kudosCount = 0; // Initialize kudos count
let hasClickedKudos = false; // Track if the user has clicked the Kudos button

function incrementKudos() {
    // Check if the user has already clicked the Kudos button
    if (hasClickedKudos) {
        // Show the message that they have already left kudos
        document.getElementById("kudosMessage").style.display = "block";
        return; // Prevent further execution
    }

    // Increment the kudos count and update display
    kudosCount++;
    document.getElementById("kudosCount").textContent = "Kudos Count: " + kudosCount;

    // Mark that the user has clicked the Kudos button
    hasClickedKudos = true;

    // Optionally, you could save this information in localStorage so it persists across page reloads
    // localStorage.setItem("hasClickedKudos", "true");
}


function checkPassword() {
    var password = prompt("Please enter your password", "");
    
    // Convert the input to lowercase for case-insensitive comparison
    if (password.toLowerCase() === "can i talk to you") {
        chatbot();
    } else if (password === "1519") {
        alert("Access granted. Press OK to continue.");
        alert("This page will end in");
        alert("3");
        alert("2");
        alert("1");
    } else if (password === "Girlfriend") {
        alert("Hi stranger");
        alert("And bye.");
    } else {
        alert("Access denied. Incorrect password.");
    }
}

function chatbot() {
    let responses = [
        "Hello, Let me introduce, I am a bot so my response is not exactly what you want, but how can I help you today?",
        "What?", 
        "You know, sometimes I don't understand people, and that's normal.",
        // ... (Other responses) 
    ];

    let currentResponseIndex = 0;

    function nextResponse() {
        let userInput = prompt(responses[currentResponseIndex]);

        if (userInput !== null) {
            currentResponseIndex++;

            if (currentResponseIndex < responses.length) {
                nextResponse();
            } else {
                alert("Thanks for chatting, see you next time.");
            }
        } else {
            alert("It seems like you want to leave. Bye for now!");
        }
    }

    nextResponse();
}

function playchesswm() {
    alert("You're bored aren't you? Anyways, beat me if you can! (don't worry I'm noob)");
    window.open("https://www.chess.com/member/doesntknowhow2win", "_blank");
}

function openNoteApp() {
    document.getElementById("noteApp").style.display = "block";
}

function saveNote() {
    var noteText = document.getElementById("noteInput").value;
    if (noteText === "") {
        alert("Please write something to save.");
        return;
    }

    var noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.textContent = noteText;

    document.getElementById("savedNotes").appendChild(noteDiv);
    document.getElementById("noteInput").value = "";
}

// Kudos Button Functionality
function incrementKudos() {
    kudosCount++; // Increment the kudos counter
    document.getElementById("kudosCount").textContent = "Kudos Count: " + kudosCount; // Update the display
}
