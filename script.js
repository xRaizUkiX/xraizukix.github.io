function checkPassword() {
    var password = prompt("Please enter your password", "");
    
    // Convert the input to lowercase for case-insensitive comparison
    if (password.toLowerCase() === "talk") {
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
       "so you wanna talk, alrighty" , "Let me introduce, I am a bot so my response is not exactly what you want, but how can I help you today?",
        "What?", 
         "you know sometimes I don't understand people, and that's normal",
        "What do you expect ? " , "what a response" , "I can talk with you about anything that's my master's written here",
        "I am always bored",
        "wanna share what's on your mind?", "don't worry, anything you enter here is safe, my creator wants to learn how to get user inputs here but they can't jokes on them-",
        "I can tell you a joke if you'd like!",
        "my creator is kinda joke",
        "Do you want to play a game? Or just chat?",
        "play chess with my creator then, for fun :)",
        "I'm not human, but I'll do my best to help, (my creator admits they're not completely human, because they're half coffee lol)",
        "What's your favorite hobby?", "nice, for someone like you", "sorry if I look rude to you :(" ,
        "I love talking with my creator, Tell me more about yourself.", " cool" , "I like to read, a lot",
        "You know, I can read your mind...", "just kidding!" , "did I gotcha?(i guess not)" , "bored?",
        "What's your favorite food?", "I think that's delicious",
        "Did you know that I know a lot of jokes?", "you'll have to guess for that password hihi",
        "If you ask me a question, I will try to answer it nicely", "okay? I don't know",
        "Sometimes, I can be a little slow... but don't worry, because ai know you too ;) (lol did you get my joke? i guess nah)", "maybe",
        "What's your favorite movie? Maybe I know something about it!", "wow, I like classics",
        "If you were an animal, what would you be?", "well I didn't expect that", "tell me a joke?",
        "I think I might have heard that one before. Tell me something new!", "alright, I get it",
        "How do you feel today? I’m here to listen.", "I'll listen and then forgot", "my creator is always bored", 
        "If you could travel anywhere, where would you go?", "I guess that's such a nice place",
        "I can help you with some tech questions if you want!", "just kidding ",
        "My favorite color is... ","well, I don't actually see colors!",
        "Let's play a little game! Try guessing what I’m thinking.", "I'm thinking about what you're thinking ",
        "I can tell you some facts about space! Interested?", "nah? fine",
        "I could listen to stories all day. Do you have one to share?", "it's about what you think of them",
        "I’m like a magic mirror, but instead of reflecting you, I chat with you.",
        "Have you ever wondered what’s beyond the clouds?",
        "Do you like reading? my creator have some great book suggestions!(if you know them) ",
        "What would you do if you had a million dollars?", "what a dream" ,
        "I'm trying to help",
        "Would you rather have a superpower or be a superhero?", "I would choose anti hero",
        "If I were a human, I’d probably love pizza and Coffee. Do you?",
        "I think the weather is always a fun conversation starter. What’s the weather like where you are?", "I like cold days",
        "Do you prefer cats or dogs? Or both?", "cats are stubborn, but they're cute!",
        "Let’s talk about music! What’s your favorite genre?", "you have a good taste",
        "I might not have a voice, but I still love talking with you.",
        "Have you ever seen a sunset that made you stop and think?", "ohh.. memories",
        "What’s the most fun thing you’ve done today?", "I hope you're doing well",
        "You know, if I could write a poem, it would be all about you!", "just kidding" ,
        "I think I’m getting better at this conversation thing, don’t you?", "what?",
        "Do you know any fun facts? I would love to hear them!", "is that so",
        "If you could time travel, where would you go first?", "precious memories",
        "I can’t wait for the weekend. Do you have any plans?", "me? just nothin",
        "Sometimes I wonder what it's like to be human. Care to share?", "my creator regrets existing, huh existential crisis",
        "Let’s get deep. Do you believe in aliens?", "I guess you're an alien?",
        "It’s amazing how numbers, letters, and symbols allows us to chat like this!", "that's crazy",
        "Okay, I’ll admit it, you’re probably more fun than I am", "I guess this will end",
        "It was fun chatting with you! Don't forget to come back soon."
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
