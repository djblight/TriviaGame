$("#start").on("click",function(){
  for(var i=0; i<question.length;i++){
    $("#subwrapper".append("<h2>" +question[i].question+ "</h2>"));
    for(var j=0;j<questions[i].answers.length;j++){
      $("#subwrapper").append("input type='radio' name='question-"+i+"' value'"+questions[i]+"'>"+questions[i].answers[j]);
      var audiohpottermusic = document.getElementById("hpottermusic");
      audiohpottermusic.play();
    }
  }
})
var pos = 0, test, test_status, question, choice, choices, ChA, chB, chC, chD, correct = 0;
var questions = [
["Who was the gamekeeper?", "Severus Snape", "Rubeus Hagrid", "Susan Bones", "Argus Filch", "B"],
["What was Lord Voldemorts real name?", "Dudley Dursley", "Dean Thomas", "Ron Weasley", "Tom Riddle", "D"],
["What was Argus Filchs cats name?", "Mrs. Norris", "Scabbers", "Hedwig", "Nagini", "A"],
["What was the name of the Wizarding school Harry Potter attended?", "Castelobruxo", "Beauxbatons", "Hogwarts", "Durmstrang", "C"],
["How old was Harry as a first year student at Wizarding school?", "11 Years Old", "9 Years Old", "10 Years Old", "12 Years Old", "A"],
["What was Harry Potters fathers name?", "Albus Potter", "John Potter", "Harry Potter", "James Potter", "D"],
["What was Harry Potters mothers name?", "Bathilda Potter", "Lily Potter", "Hermione Potter", "Amelia Potter", "B"],
["Who killed Professor Dumbledore?", "Ron Weasley", "Amos Diggory", "Draco Malfoy", "Severus Snape", "D"],
["Where was Harry Potters school located?", "England", "Sweden", "Italy", "Canada", "A"],
["What was Beedle the Bards' profession?", "Teacher", "Minister of Magic", "Story Teller", "Student", "C"]
];
		
function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
  	test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed!";
    // resets the test when completed
    pos = 0;
    correct = 0;
    // stops renderQuestion function when test is completed
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  test.innerHTML = "<h3>"+question+"</h3>";
  
  test.innerHTML += "<br><input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer() '>Submit Answer</button>";
}

function checkAnswer(){
  // uses getElementsByName to loop through the array
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks to see if answer matches the correct choice
  if(choice == questions[pos][5]){
    //each correct answer increases this value
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}


window.addEventListener("load", renderQuestion, false);


