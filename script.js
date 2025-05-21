let questions = [ 
  {
    "question": "Wer hat die Figur Mario erschaffen?",
    "answer_1": "Shigeru Miyamoto",
    "answer_2": "Hideo Kojima",
    "answer_3": "Markus Persson",
    "answer_4": "Gabe Newell",
    "right_answer": 1
  },
  {
    "question": "Welches Unternehmen entwickelte das Spiel Fortnite?",
    "answer_1": "Electronic Arts",
    "answer_2": "Ubisoft",
    "answer_3": "Epic Games",
    "answer_4": "Activision Blizzard",
    "right_answer": 3
  },
  {
    "question": "Was ist die meistverkaufte Spielkonsole aller Zeiten?",
    "answer_1": "PlayStation 2",
    "answer_2": "Nintendo Switch",
    "answer_3": "Xbox 360",
    "answer_4": "Game Boy",
    "right_answer": 1
  },
  {
    "question": "Wofür steht die Abkürzung 'NPC' im Gaming?",
    "answer_1": "Nicht spielbarer Charakter",
    "answer_2": "Netzwerk-Player-Controller",
    "answer_3": "Nationaler Pokémon-Champion",
    "answer_4": "Neue Player-Connection",
    "right_answer": 1
  },
  {
    "question": "Welches war das erste Pokémon-Spiel für den Game Boy?",
    "answer_1": "Pokémon Gold und Silber",
    "answer_2": "Pokémon Rubin und Saphir",
    "answer_3": "Pokémon Rot und Blau",
    "answer_4": "Pokémon Schwarz und Weiß",
    "right_answer": 3
  },
  {
    "question": "Wie heißt der Hauptcharakter in der 'The Legend of Zelda'-Reihe?",
    "answer_1": "Zelda",
    "answer_2": "Link",
    "answer_3": "Ganondorf",
    "answer_4": "Epona",
    "right_answer": 2
  },
  {
    "question": "In welchem Jahr erschien das Spiel Minecraft erstmals offiziell?",
    "answer_1": "2009",
    "answer_2": "2011",
    "answer_3": "2013",
    "answer_4": "2015",
    "right_answer": 2
  }
]

let rightQuestions = 0
let currentQuestion = 0
let AUDIO_SUCCESS = new Audio('audio/success.wav');
let AUDIO_FAIL = new Audio('audio/fail.wav');

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody'). style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/trophy.png';
  } else {

   let percent = (currentQuestion + 1) / questions.length;
   percent = Math.round(percent * 100);

   document.getElementById('progress-bar').innerHTML = `${percent} %`;
   document.getElementById('progress-bar').style = `width: ${percent}%`;

   let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
   }
 }

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let = idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        console.log('Falsche Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/brainbg.jpg';
    document.getElementById('questionBody'). style = '';
    document.getElementById('endScreen'). style = 'display: none';

    rightQuestions = 0
    currentQuestion = 0
    init();
}
