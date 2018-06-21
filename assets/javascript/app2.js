$("document").ready(function () {
    // Make an array of objects that contain questions and answers
    var questionArray = [
        {
            q: "What's the coolest color?",
            answer: "Blue",
            optionOne: "Blue",
            optionTwo: "Red",
            optionThree: "Purple",
            optionFour: "Green"
        },
        {
            q: "What's the coolest instrument?",
            answer: "Drums",
            optionOne: "Tuba",
            optionTwo: "Guitar",
            optionThree: "Oboe",
            optionFour: "Drums"
        }
    ];

    var choiceBank=[];

    // Generate the questions order
     for(var i = 0; i < questionArray.length; i++) {

        var newQuestion = questionArray[i];
        var question = newQuestion.q;
        var answer = newQuestion.answer;
        var newQuestionDiv = $("<div>");

    // Answer options
        var optionOne = newQuestion.optionOne;
        var optionTwo = newQuestion.optionTwo;
        var optionThree = newQuestion.optionThree;
        var optionFour = newQuestion.optionFour;

    // Displaying Question to the page
        newQuestionDiv.append(question);

    // Make answers clickable
        answerButton1 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionOne).text(optionOne);
        answerButton2 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionTwo).text(optionTwo);
        answerButton3 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionThree).text(optionThree);
        answerButton4 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionFour).text(optionFour);
 
    // Displaying answer options to page
        var answerDisplay = $("#answers");
        newQuestionDiv.append(answerButton1, answerButton2, answerButton3, answerButton4);
        answerDisplay.append(newQuestionDiv);
     };

    // Check if answer is correct
        // Set up counters for correct and incorrect
        var correct = 0;
        var incorrect = 0;

        // Once an answer button is clicked...
        $(".answer-button").on("click", function() {
            // Make sure all buttons are first marked as unclicked
            $(this).parent().children().removeClass('btn-secondary').addClass('btn-primary');

            // If a button is  clicked, change the color so that the user knows which button they clicked
            $(this).removeClass('btn-primary').addClass('btn-secondary');

            // Which ever button the user clicks will be added to an array
            // This code ensures that if the user changes their answer that their answer won't count as 2 guesses, but as whatever their most recent guess was.
            choiceBank[$(this).attr('data-question')] =  $(this).attr("data-option");
        });
        


    // Set up submit button
    var submit = $("<button>").addClass("submit-button").text('Finish');

    submit.on("click", function() {
        // Score to be shown
        for(var i = 0; i < questionArray.length; i++){
            if(questionArray[i].answer === choiceBank[i.toString()]) {
                correct++;
            } else {
                incorrect++;
            };
        };

        alert("Trivia game completed! \nCorrect: " + correct + "\nIncorrect: " + incorrect);

    });

    $('#answers').append(submit);


});