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

let currentQuestion = 0

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selectet answer ist ', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber ist ', selectedQuestionNumber);
    console.log('Current question ist ', question['right_answer']);

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort!!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}