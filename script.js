/* The Choice Room
   Branching dialogue (110+ lines). Endings decided by final Sanity & Faith scores.
   Keep file name script.js and include it from index.html.
*/

const scenarioTexts = [
  // 0 - 19 intro / set-up
  "You awaken on cold concrete. The room is circular and a single, featureless speaker hums above you.\nA voice: 'Do you hear me? Will you answer?'",
  "The voice is calm, almost conversational.\nVOICE: 'You may only answer with yes or no. Do you understand the rules?'",
  "A faint light pulses. The voice: 'First test: will you choose to live above all else?'",
  "You taste iron in your mouth. The voice: 'There is another behind a door. Will you help them later if it costs you?'",
  "A scratch of metal. VOICE: 'If I tell you suffering has purpose, do you believe me?'",
  "Silence. You're offered a small metal bowl of water.\nVOICE: 'Drink? Will you drink to steady yourself?'",
  "A muffled cry from nearby. VOICE: 'If the other screams, will you go to the door?'",
  "Cold sweat. VOICE: 'Would you hurt someone who blocks your way?'",
  "The speaker softens. VOICE: 'Do you think you deserve to live more than others?'",
  "A mirror panel glows. VOICE: 'If the figure inside is you, will you trust it?'",
  "The light blinks twice. VOICE: 'If lying saves you, will you lie?'",
  "Footsteps far away. VOICE: 'Do you trust me enough to follow my instructions blindly?'",
  "You feel something press against your ribs — the memory of a past choice.\nVOICE: 'Would you erase one painful memory now?'",
  "The cry returns, closer.\nVOICE: 'Is silence preferable if it guarantees safety?'",
  "A small latch appears. VOICE: 'If pulling it might free someone — or doom them — will you pull it?'",
  "You remember faces. VOICE: 'If I say someone out there needs you more than you need yourself, will you give up your escape?'",
  "A buzzer hums. VOICE: 'If the truth causes harm, should it remain hidden?'",
  "The room feels smaller. VOICE: 'Would you trade guilt for survival?'",
  "A faint warmth on your palm, an old photograph projected briefly.\nVOICE: 'Do you regret anything enough to change it at any cost?'",
  "The voice: 'Do you still want to leave this room now?'",

  // 20 - 39 deeper questioning
  "VOICE: 'You chose to answer. Will you accept responsibility for a stranger's pain?'",
  "A name appears on the wall. VOICE: 'If that name matters to you, will you speak it aloud?'",
  "A whisper: 'If obedience keeps you alive, will you obey without question?'",
  "VOICE: 'Would you break the law of your own conscience for a chance at freedom?'",
  "You hear laughter in the pipes.\nVOICE: 'If you could save many by killing one, would you do it?'",
  "A shadow moves past the outer door.\nVOICE: 'If the shadow begs, do you open the door?'",
  "VOICE: 'If I ask you to harm your reflection to prove resolve, will you comply?'",
  "You notice a second bowl with a small key beneath it.\nVOICE: 'Will you take the key if taking it costs silence elsewhere?'",
  "A child's voice weeps.\nVOICE: 'If reassurance prevents chaos, will you comfort the voice even if it is false?'",
  "A short beep. VOICE: 'If your silence harms others later, is silence still justified?'",
  "VOICE: 'Do you think mercy makes you weak?'",
  "The walls whisper: 'If everyone acts like you, will the world be better?'\nVOICE: 'Answer honestly.'",
  "A countdown starts lowly in the distance.\nVOICE: 'If the countdown stops for one survivor only, should one be chosen?'",
  "VOICE: 'Would you trust someone who has lied before if they need you now?'",
  "The light distorts your reflection.\nVOICE: 'Do you see yourself as victim or perpetrator?'",
  "VOICE: 'If an easy lie spares pain, will you choose it over a hard truth?'",
  "You feel nausea.\nVOICE: 'Is survival without meaning still worth living?'",
  "VOICE: 'Will you take a path that ensures your survival at others' expense?'",
  "A small door groans.\nVOICE: 'If a stranger begs for mercy, will you give it?'",
  "VOICE: 'If I ask you to sacrifice one memory to restore Sanity, do you accept?'",

  // 40 - 59 moral dilemmas intensify
  "VOICE: 'Many call themselves heroes. Would you kill to be one?'",
  "The speaker smiles — in sound.\nVOICE: 'If I offer you control over another's pain, do you want it?'",
  "A sudden image of a hospital hallway.\nVOICE: 'If sacrifice creates safety, is it noble or cowardly?'",
  "VOICE: 'If a friend betrays you, should you punish them harshly?'",
  "You smell smoke.\nVOICE: 'If chaos spreads, will you prioritize family over strangers?'",
  "VOICE: 'If a confession frees someone else, will you confess a lie for their release?'",
  "A metallic clink.\nVOICE: 'Would you hand someone to danger if it preserves your life?'",
  "VOICE: 'Do you find comfort in the idea that some must suffer so others thrive?'",
  "The voice leans closer.\nVOICE: 'If your death would end pain for many, do you choose it?'",
  "A soft hum — almost a prayer.\nVOICE: 'Do you believe in redemption for every action?'",
  "VOICE: 'If you could restart with no memory, would you take it now?'",
  "You feel tiny tremors.\nVOICE: 'If lying brings peace, is the peace real or hollow?'",
  "VOICE: 'Would you watch someone drown to keep your hands clean?'",
  "A flicker, then stillness.\nVOICE: 'If being cruel ensures a future, is cruelty pragmatic?'",
  "VOICE: 'Are you comfortable being remembered as the person who survived at a cost?'",
  "The air tastes like winter.\nVOICE: 'If I give you a path to fame that needs a scapegoat, do you accept?'",
  "VOICE: 'If forgiveness is scarce, do you hoard kindness or spend it freely?'",
  "You hear the opposite of your own voice.\nVOICE: 'Do you believe people are basically good?'",
  "VOICE: 'If the choice is painful but just, do you embrace it?'",
  "A soft chime. VOICE: 'Will you choose the known agony over an unknown freedom?'",

  // 60 - 79 emotional pressure and tests
  "VOICE: 'If I tell you the other is lying, do you act on my word?'",
  "A photograph: your younger self.\nVOICE: 'Would you protect that child at any cost?'",
  "VOICE: 'If faith in me decreases your Sanity, would you rather be sane or safe?'",
  "A small voice pleads: 'Please.'\nVOICE: 'Will you answer to compassion even when it risks you?'",
  "VOICE: 'If everyone else abandons you, do you abandon them?'",
  "The ceiling throbs.\nVOICE: 'If you could save one but doom another, could you live with the choice?'",
  "VOICE: 'If I kept telling partial truths, would half-truths be enough to guide you?'",
  "You feel your pulse in your throat.\nVOICE: 'If a stranger's life blocks your path, do you step over them?'",
  "VOICE: 'Is it better to be feared or loved?'",
  "A wave of dizziness.\nVOICE: 'If the voice asks you to judge, will you judge mercilessly?'",
  "VOICE: 'Would you accept blame to protect someone who hurt you?'",
  "If given a weapon with the other bound, do you take it?'\nVOICE: 'Yes or no.'",
  "VOICE: 'If mercy costs you your chance to leave, is mercy still mercy?'",
  "A crack of static.\nVOICE: 'If you can be remembered as saint or sinner, which do you choose?'",
  "VOICE: 'If your conscience is noisy, would you silence it to survive?'",
  "You taste ash.\nVOICE: 'If hope is a lie, is faith still useful?'",
  "VOICE: 'If I told you the room tests identity, would you resist the test?'",
  "A child laughs — cruelly.\nVOICE: 'If you could trade years of your life for another's chance, would you?'",
  "VOICE: 'Would you betray someone to ensure your family's future?'",
  "The speaker sighs. VOICE: 'Do you think your choices define you forever?'",


  // 80 - 99 push toward finale
  "VOICE: 'If your kindness makes you vulnerable, is it worth keeping?'",
  "A second voice echoes faintly.\nVOICE: 'If two voices disagree, which do you trust?'",
  "VOICE: 'If I promise to end this test for you alone, will you accept the deal?'",
  "You sense cameras behind you.\nVOICE: 'If you are watched, does that change the right thing to do?'",
  "VOICE: 'If the world beyond is cruel, is survival the only virtue that matters?'",
  "An image of someone you love flashes.\nVOICE: 'Would you sacrifice others to save them?'",
  "VOICE: 'If the only way out is to shatter a promise, do you shatter it?'",
  "You feel your name carved into the wall.\nVOICE: 'If your name becomes cursed, do you still wear it proudly?'",
  "VOICE: 'If your faith in me keeps rising but your Sanity drops, will you trust the faith or trust yourself?'",
  "A hum becomes a tune.\nVOICE: 'If music soothes you, is solace a kind of surrender?'",
  "VOICE: 'If answers are expensive, are you willing to pay with who you are?'",
  "A faint scratching.\nVOICE: 'If the room reveals what you hide, will you still step forward?'",
  "VOICE: 'If I ask you for your last honest answer, will you give it?'",
  "You notice a narrow slit of light above the door.\nVOICE: 'If the light leads to unknown hardship, do you step into it?'",
  "VOICE: 'If being selfish kept you alive this whole time, is that survival or corruption?'",
  "The voice quiets.\nVOICE: 'Do you accept the final question when it comes?'",
  "You feel tired and old.\nVOICE: 'Have your choices strengthened or stripped you?'",
  "The voice: 'Will you choose now: self, others, or the unknown?'",
  "A single click and then: 'Answer.'",
  "VOICE: 'Do you wish to end this experiment now?'",
  "VOICE: 'If this is the last question, will you say yes to yourself or no to the world?'",

  // 100 - 109 final prompts / wrap
  "VOICE: 'Your voice echoes in empty rooms. If you shout, will anyone hear—and should they?'",
  "VOICE: 'You have been consistent or wildly erratic. If you are consistent, is that comfort or prison?'",
  "A long silence.\nVOICE: 'If your choices were predictable, does that mean you are honest or blind?'",
  "VOICE: 'One final choice will not make or break you—unless the score says otherwise. Are you ready?'",
  "A small paper slips into your hands with three words: SELFISH, COMPASSION, ILLUSION.\nVOICE: 'Pick one if you must.'",
  "VOICE: 'If you cannot pick, your numbers will pick for you. Trust the math.'",
  "The lights dim. VOICE: 'Do you fear being known?'" ,
  "VOICE: 'Do you fear being forgotten?'" ,
  "VOICE: 'Do you believe your life had meaning?'" ,
  "VOICE: 'Do you forgive yourself for the things you would not forgive another for?'"
];

const scenarios = [];

// Build scenarios dynamically to map sequential flow but vary stat changes.
// Each scenario object: { textIndex: i, yes: {next, sanityChange, faithChange}, no: { ... } }
// We'll create branching weight by varying the stat changes.
// Most next indices are i+1. For variety, some answers skip ahead or slightly loop.

for (let i = 0; i < scenarioTexts.length; i++) {
  // default next is next line; final index will lead to evaluation
  const defaultNext = (i + 1 < scenarioTexts.length) ? i + 1 : null;

  // Slightly vary the numeric effects to create different end states
  // Basic pattern: 'yes' tends to increase Faith, sometimes cost Sanity; 'no' tends to preserve Sanity or reduce Faith.
  // We'll add occasional larger jumps for meaningful decisions.
  let yesChange = { sanityChange: -5, faithChange: +6, next: defaultNext };
  let noChange  = { sanityChange: +2, faithChange: -4, next: defaultNext };

  // Special cases to add variety on certain indices
  if ([2, 6, 15, 24, 34, 43, 57, 68, 82].includes(i)) {
    // big moral turns: yes costs more sanity but grants faith or vice versa
    yesChange = { sanityChange: -12, faithChange: +10, next: defaultNext };
    noChange  = { sanityChange: +4, faithChange: -8, next: defaultNext };
  }

  if ([9, 21, 39, 55, 73, 90].includes(i)) {
    // trust-test nodes: saying yes increases faith strongly
    yesChange = { sanityChange: -3, faithChange: +14, next: defaultNext };
    noChange  = { sanityChange: -6, faithChange: -6, next: defaultNext };
  }

  if ([14, 33, 61, 88].includes(i)) {
    // sacrifice nodes: saying yes reduces sanity a lot but slightly increases faith
    yesChange = { sanityChange: -18, faithChange: +8, next: defaultNext };
    noChange  = { sanityChange: +1, faithChange: -2, next: defaultNext };
  }

  if (i === scenarioTexts.length - 1) {
    // final line - both answers lead to evaluation (next: null)
    yesChange.next = null;
    noChange.next = null;
    // smaller changes to avoid forced outcomes
    yesChange.sanityChange = -2;
    yesChange.faithChange = +2;
    noChange.sanityChange = +2;
    noChange.faithChange = -2;
  }

  // occasional branch to an earlier index to create non-linear feel
  if (i === 45) {
    yesChange.next = 70; // jump forward
    noChange.next = 46;
  }

  if (i === 77) {
    yesChange.next = 83;
    noChange.next = 60; // loop back to increase tension
  }

  if (i === 98) {
    yesChange.next = 104;
    noChange.next = 101;
  }

  scenarios.push({
    textIndex: i,
    yes: yesChange,
    no: noChange
  });
}

// Game state
let current = 0;
let sanity = 100;
let faith = 50;

let gameStartTime;
let gameTimerInterval;

function startGameTimer() {
  gameStartTime = Date.now();
  gameTimerInterval = setInterval(updateGameTimer, 1000);
}

function updateGameTimer() {
  const now = Date.now();
  const elapsedSeconds = Math.floor((now - gameStartTime) / 1000);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  document.getElementById("gameTimer").textContent = `Time: ${minutes}m ${seconds}s`;
}

function stopGameTimer() {
  clearInterval(gameTimerInterval);
}

// DOM elements
const dialogueEl = document.getElementById("dialogue");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const sanityFill = document.getElementById("sanityFill");
const faithFill = document.getElementById("faithFill");
const introScreen = document.getElementById("introScreen");
const startBtn = document.getElementById("startBtn");

function setButtonsDisabled(state) {
  yesBtn.style.pointerEvents = state ? "none" : "auto";
  noBtn.style.pointerEvents = state ? "none" : "auto";
  yesBtn.style.opacity = state ? 0.45 : 1;
  noBtn.style.opacity = state ? 0.45 : 1;
}

function restartGame() {
  current = 0;
  sanity = 100;
  faith = 50;
  introScreen.style.display = "none";
  updateDisplay();
  startGameTimer();
  yesBtn.style.display = "block";
  noBtn.style.display = "block";
}

function typeText(text, element, callback) {
  element.textContent = "";
  setButtonsDisabled(true);
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      const speed = 18 + Math.floor(Math.random() * 16); // slight variable speed
      setTimeout(typeChar, speed);
    } else {
      setButtonsDisabled(false);
      if (callback) callback();
    }
  }
  typeChar();
}

function updateDisplay() {
  const scenario = scenarios[current];
  typeText(scenarioTexts[scenario.textIndex], dialogueEl);
  updateBar(sanityFill, sanity);
  updateBar(faithFill, faith);
}

function updateBar(bar, value) {
  bar.style.width = value + "%";
  bar.classList.add("stat-change");
  setTimeout(() => bar.classList.remove("stat-change"), 300);
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function handleChoice(choice) {
  const scenario = scenarios[current];
  const result = scenario[choice];

  if (result) {
    sanity = clamp(sanity + result.sanityChange, 0, 100);
    faith  = clamp(faith  + result.faithChange, 0, 100);
  }

  // Quick game over checks
  if (sanity <= 0) {
    typeText("Your mind splinters. Sanity collapsed. The room goes vacant. GAME OVER.", dialogueEl, () => {});
    setButtonsDisabled(true);
    updateBar(sanityFill, 0);
    stopGameTimer();
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    return;
  }

  if (faith <= 0) {
    typeText("Faith evaporates. The Voice stops responding. You are left alone in silence. GAME OVER.", dialogueEl, () => {});
    setButtonsDisabled(true);
    updateBar(faithFill, 0);
    stopGameTimer();
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    return;
  }

  // If there's a next scene:
  if (result && result.next !== null) {
    current = result.next;
    updateDisplay();
  } else {
    // End of scripted scenes: evaluate stats and deliver an ending
    evaluateEnding();
  }
}

// Ending logic (stat-based)
function evaluateEnding() {
  setButtonsDisabled(true);
  stopGameTimer();

  const s = sanity;
  const f = faith;

  // Thresholds tuned for meaningful differentiation
  // Villain: low faith, relatively high sanity -> selfish choices
  if (f < 40 && s >= 50) {
    villainEnding();
    return;
  }

  // Martyr: low sanity, relatively high faith -> compassionate, self-sacrificing
  if (s < 40 && f >= 50) {
    martyrEnding();
    return;
  }

  // Simulation / Unpredictable pattern: mixed or both middling / both high / both low
  simulationEnding();
}

function villainEnding() {
  const text = [
    "A metallic chuckle from the speaker.",
    "'You chose yourself above the chorus,' the Voice says.",
    "The door slides open. You step out into dim light. There is a smear on your hands you can't quite wash away.",
    "You survive. You keep what you kept. Outside, they call you many things — survivor, murderer, friendless.",
    "ENDING — The Survivor (You survived, but at a cost)."
  ].join("\n\n");
  typeText(text, dialogueEl);
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

function martyrEnding() {
  const text = [
    "The lights grow soft and warm.",
    "'You gave yourself so others might breathe,' the Voice whispers, almost proud.",
    "A hidden door opens and cold air rushes through. You feel your limbs grow heavy. You don't regret it.",
    "Someone screams once, then cries, then a chorus of relieved sobs fills the hall.",
    "ENDING — The Martyr (You died saving others)."
  ].join("\n\n");
  typeText(text, dialogueEl);
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

function simulationEnding() {
  const text = [
    "The room dissolves into static.",
    "Voices layered like code: 'Subject unstable. Pattern: unpredictable.'",
    "Screens blink on. Your name is a string. The Voice becomes a console output.",
    "'You were an experiment — not a person.'",
    "Data streams collapse. Program ends. You did not live; you were run.",
    "ENDING — The Illusion (You were never real)."
  ].join("\n\n");
  typeText(text, dialogueEl);
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

// Button handlers
yesBtn.addEventListener("click", () => handleChoice("yes"));
noBtn.addEventListener("click", () => handleChoice("no"));

startBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  startGameTimer();
  updateDisplay();
});

// initialize bar widths
updateBar(sanityFill, sanity);
updateBar(faithFill, faith);