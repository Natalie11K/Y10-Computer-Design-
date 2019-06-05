// ------- CUSTOM THE CODE BELOW ------
var q1; // question 1 data variable
var q2; // question 2 data variable
var q3; // question 3 data variable
var q4;
var q5;
var q6;

var questionManager = new QuestionManager(3);  // setup 3 questions to be managed
var questionImage1 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
var questionImage2 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
var questionImage3 = new Array(5);  // setup 5 photos to be stored; 1 for the question; 4 for the choices
var questionImage4 = new Array(5);
var questionImage5 = new Array(5);
var questionImage6 = new Array(5);
// ------- CUSTOM THE CODE ABOVE ------



var currentQuestion = 0;
var delayTimer = new Timer(0,0,0,0);

function setup()
{
	createCanvas(500,500);

	// setup all question data; see function at the bottom
	setupQuestions();


	// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
	delayTimer.setMaxTime(10);  // set timer to countdown from 3 seconds
	delayTimer.resetTimer(); 	// reset the timer


	// ------- CUSTOM THE CODE BELOW ------
	// add all questions to the question manager; as you add more questions
	// you will need to add more to the question manager
	questionManager.addQuestionData(q1);
	questionManager.addQuestionData(q2);
	questionManager.addQuestionData(q3);
	questionManager.addQuestionData(q4);
	questionManager.addQuestionData(q5);
	questionManager.addQuestionData(q6);
}

function draw()
{
	background(255,255,255);

	// go to a new .html file when last question is complete
	if (questionManager.isLastQuestion() == true)
	{
		// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
		window.open("mainmenu/mainmenu.html","_self");
	}


	currentQuestion = questionManager.getCurrentQuestionData();


	if (currentQuestion.isQuestionAnswered() == 0)
	{
		// show the current question when no button has been pressed
		currentQuestion.showQuestion();
	}
	else if (currentQuestion.isQuestionAnswered() == 1)
	{
		// ------ START --------- CUSTOM THE CODE BELOW --------------
		fill(0,255,0);
		text("Correct",10,10);
		delayTimer.startTimer();  		// start a delay Timer
		// ------ END ----------- CUSTOM THE CODE ABOVE --------------
	}
	else if (currentQuestion.isQuestionAnswered() == -1)
	{
		// ------ START --------- CUSTOM THE CODE BELOW --------------
		fill(255,0,0);
		text("Incorrect",10,10);
		delayTimer.startTimer();  		// start a delay Timer
		// ------ END ----------- CUSTOM THE CODE ABOVE --------------
	}




	// -------- START ---------- DO NOT TOUCH THIS CODE -----------
	// initiate a delay timer when a question is answered
	if (currentQuestion.isQuestionAnswered() != 0)
	{
		if (delayTimer.isTimerFinished() == false)
		{
			delayTimer.startTimer();
		}
		else {
			questionManager.nextQuestion();
			delayTimer.resetTimer();
		}
		// -------- END ---------- DO NOT TOUCH THIS CODE -----------
	}


}

function setupQuestions()
{
	// START ------- CUSTOM THE CODE BELOW -----------------------------------------
	// setup question 1 below
	questionImage1[0] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q1.png');
	questionImage1[1] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q1a.png');
	questionImage1[2] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q1b.png');
	questionImage1[3] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q1c.png');
	questionImage1[4] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q1d.png');
	q1 = new Question(4);					// set the maximum number of choices; in this case 4 choices
	q1.setCorrectAnswer(4,0,50);  // set the correct answer in the 1st parameter; in this case choice 4
	q1.setQuestion(questionImage1[0]);
	q1.setAnswer(1,questionImage1[1],50,100,239,40);
	q1.setAnswer(2,questionImage1[2],300,100,149,40);
	q1.setAnswer(3,questionImage1[3],50,200,176,40);
	q1.setAnswer(4,questionImage1[4],350,200,184,40);



	// setup question 2 below
	questionImage2[0] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q2.png');
	questionImage2[1] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q2a.png');
	questionImage2[2] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q2b.png');
	questionImage2[3] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q2c.png');
	questionImage2[4] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q2d.png');
	q2 = new Question(4);					// set the maximum number of choices; in this case 4 choices
	q2.setCorrectAnswer(1,0,50);  // set the correct answer in the 1st parameter; in this case choice 2
	q2.setQuestion(questionImage2[0]);
	q2.setAnswer(1,questionImage2[1],150,150,239,40);
	q2.setAnswer(2,questionImage2[2],150,200,149,40);
	q2.setAnswer(3,questionImage2[3],150,250,176,40);
	q2.setAnswer(4,questionImage2[4],150,300,184,40);


	// setup question 3 below
	questionImage3[0] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q3.png');
	questionImage3[1] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q3a.png');
	questionImage3[2] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q3b.png');
	questionImage3[3] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q3c.png');
	questionImage3[4] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q3d.png');
	q3 = new Question(4);				 // set the maximum number of choices; in this case 4 choices
	q3.setCorrectAnswer(1,0,50); // set the correct answer in the 1st parameter; in this case choice 2
	q3.setQuestion(questionImage3[0]);
	q3.setAnswer(1,questionImage3[1],50,150,239,40);
	q3.setAnswer(2,questionImage3[2],50,200,149,40);
	q3.setAnswer(3,questionImage3[3],50,250,176,40);
	q3.setAnswer(4,questionImage3[4],50,300,184,40);


//question 4
	questionImage4[0] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q4.png');
	questionImage4[1] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q4a.png');
	questionImage4[2] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q4b.png');
	questionImage4[3] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q4c.png');
	questionImage4[4] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q4d.png');
	q4 = new Question(4);				 // set the maximum number of choices; in this case 4 choices
	q4.setCorrectAnswer(2,0,50); // set the correct answer in the 1st parameter; in this case choice 2
	q4.setQuestion(questionImage4[0]);
	q4.setAnswer(1,questionImage4[1],50,150,239,40);
	q4.setAnswer(2,questionImage4[2],50,200,149,40);
	q4.setAnswer(3,questionImage4[3],50,250,176,40);
	q4.setAnswer(4,questionImage4[4],50,300,184,40);


//question 5
	questionImage5[0] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q5.png');
	questionImage5[1] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q5a.png');
	questionImage5[2] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q5b.png');
	questionImage5[3] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q5c.png');
	questionImage5[4] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q5d.png');
	q5 = new Question(4);				 // set the maximum number of choices; in this case 4 choices
	q5.setCorrectAnswer(1,0,50); // set the correct answer in the 1st parameter; in this case choice 2
	q5.setQuestion(questionImage5[0]);
	q5.setAnswer(1,questionImage5[1],50,150,239,40);
	q5.setAnswer(2,questionImage5[2],50,200,149,40);
	q5.setAnswer(3,questionImage5[3],50,250,176,40);
	q5.setAnswer(4,questionImage5[4],50,300,184,40);


//question 6
	questionImage6[0] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q6.png');
	questionImage6[1] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q6a.png');
	questionImage6[2] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q6b.png');
	questionImage6[3] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q6c.png');
	questionImage6[4] = loadImage('https://natalie11k.github.io/Y10-Computer-Design-/computerdesignresources/q6d.png');
	q6 = new Question(4);				 // set the maximum number of choices; in this case 4 choices
	q6.setCorrectAnswer(2,0,50); // set the correct answer in the 1st parameter; in this case choice 2
	q6.setQuestion(questionImage6[0]);
	q6.setAnswer(1,questionImage6[1],50,150,239,40);
	q6.setAnswer(2,questionImage6[2],50,200,149,40);
	q6.setAnswer(3,questionImage6[3],50,250,176,40);
	q6.setAnswer(4,questionImage6[4],50,300,184,40);


	// END ------- CUSTOM THE CODE ABOVE -----------------------------------------

}
