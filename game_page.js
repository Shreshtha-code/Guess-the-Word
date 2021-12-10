var player1NAME= localStorage.getItem("player1_name");
var player2NAME= localStorage.getItem("player2_name");

document.getElementById("Player1_name").innerHTML=player1NAME+":";
document.getElementById("Player2_name").innerHTML=player2NAME+":";

var player_1_score= 0;
var player_2_score= 0;

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question turn:  "+player1NAME;
document.getElementById("player_answer").innerHTML="Answer turn:  "+player2NAME;

function send(){
   get_word=document.getElementById("word").value;
   var word= get_word.toLowerCase();
   console.log(word);

   var charAT1=word.charAt(1);
console.log(charAT1);

lengthdivided2=Math.floor(word.length/2);
var charAT2= word.charAt(lengthdivided2);
console.log(charAT2);

lengthminus=word.length-1;
var charAT3= word.charAt(lengthminus);
console.log(charAT3)


var removecharAT1=word.replace(charAT1, "_");
var removecharAT2=removecharAT1.replace(charAT2, "_");
var removecharAT3=removecharAT2.replace(charAT3, "_");
console.log(removecharAT3);

var questionword="<h4 id='word_display'>Q. "+removecharAT3+"</h4>";
var inputbox="<br><br> Answer: <input type='text' id='input_check_box'>";
var checkbutton="<br><br> <button class='btn btn-danger' onclick='check()'>Check</button>";
var row=questionword+inputbox+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

var question_turn="player1";
var answer_turn="player2";
function check(){
 var input6=document.getElementById("input_check_box").value;
 var answer=input6.toLowerCase();
 console.log(answer);  

if(answer==word){
if(answer_turn=="player1"){
   player_1_score=player_1_score+1;
   document.getElementById("Player1_score").innerHTML=player_1_score;
}
 else{
    player_2_score=player_2_score+1;
    document.getElementById("Player2_score").innerHTML=player_2_score;
 }
}

if(question_turn=="player1"){
question_turn="player2";
document.getElementById("player_question").innerHTML="Question Turn- "+player2NAME;
}

else{
   question_turn="player1";
document.getElementById("player_question").innerHTML="Question Turn- "+player1NAME;
}

if(answer_turn=="player1"){
   answer_turn="player2";
   document.getElementById("player_answer").innerHTML="It is time for "+player2NAME+ " to answer.";
}

else{
   answer_turn="player1";
   document.getElementById("player_answer").innerHTML="It is time for "+player1NAME+" to answer.";
}

document.getElementById("output").innerHTML="";

}
