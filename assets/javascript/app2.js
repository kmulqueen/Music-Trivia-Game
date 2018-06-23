$("document").ready(function () {
    // Make an array of objects that contain questions and answers
    var questionArray = [
        {
            q: "Who is NOT a member of the Wu-Tang Clan?",
            answer: "Redman",
            optionOne: "RZA",
            optionTwo: "GZA",
            optionThree: "Method Man",
            optionFour: "Redman"
        },
        {
            q: "What is Thelonious Monk's middle name?",
            answer: "Sphere",
            optionOne: "Sphere",
            optionTwo: "Jupiter",
            optionThree: "Michael",
            optionFour: "Orb"
        },
        {
            q: "Who played drums in The Beatles BEFORE Ringo Starr, and is known as 'The Fifth Beatle'?",
            answer: "Pete Best",
            optionOne: "Bernard Purdie",
            optionTwo: "Yoko Ono",
            optionThree: "Pete Best",
            optionFour: "Harry Potter"
        },
        {
            q: "What musician won the Nobel Prize for Literature in 2016?",
            answer: "Bob Dylan",
            optionOne: "Paul McCartney",
            optionTwo: "Bob Dylan",
            optionThree: "Eminem",
            optionFour: "Lil Pump"
        },
        {
            q: "Which famous American musician was fatally shot by his father on April 1, 1984?",
            answer: "Marvin Gaye",
            optionOne: "Lee Morgan",
            optionTwo: "Kurt Cobain",
            optionThree: "Marvin Gaye",
            optionFour: "Jimi Hendrix"
        },
        {
            q: "What was Elvis Presley's middle name?",
            answer: "Aaron",
            optionOne: "Aaron",
            optionTwo: "Marcus",
            optionThree: "Theodore",
            optionFour: "Money"
        },
        {
            q: "How many kids does Snoop Dogg have?",
            answer: "Three",
            optionOne: "Five",
            optionTwo: "Two",
            optionThree: "Three",
            optionFour: "Four"
        },
        {
            q: "Who let the dogs out?",
            answer: "The Baha Men",
            optionOne: "We all did",
            optionTwo: "The Baha Men",
            optionThree: "Britney Spears",
            optionFour: "Slayer"
        }
        
    ];

    var choiceBank=[];


    // Functions ==========================================================
    startBtn();
    // Start Button
    function startBtn() {
        $("#timer").empty();
        $("#answers").empty();
        var startButton = $("<button>");
        startButton.addClass("start-button btn btn-primary btn-lg").text("Start");
        $("#answers").append(startButton);
        $(startButton).on("click", function() {
            $("#answers").empty();
            startGame();
        });

    };

    // Timer
    function timeUp() {
        var timerDiv = $("#timer");
     
        setInterval(function() {
            var timer = 60;
            timer--;
            console.log(timer);
            timerDiv.text("Time: " + timer);
        }, 1000);

        if(timer = 0) {
             $("#answers").text("Time's Up! \nCorrect: " + correct + "\nIncorrect: " + incorrect);
        };

    };

    // Start Game
    function startGame() {
        timeUp();
        for(var i = 0; i < questionArray.length; i++) {

            var newQuestion = questionArray[i];
            var question = newQuestion.q;
            var answer = newQuestion.answer;
            var newQuestionDiv = $("<div>").addClass("question-div");
            var newAnswerDiv = $("<div>").addClass("answer-div");
    
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
            newAnswerDiv.append(answerButton1, answerButton2, answerButton3, answerButton4);
            answerDisplay.append(newQuestionDiv, newAnswerDiv);
         };
    
            
    
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
            
    
        // Set up counters for correct and incorrect
            var correct = 0;
            var incorrect = 0;
            
        // Set up submit button
        var submit = $("<button>").addClass("submit-button btn btn-primary btn-lg").text('Finish');
    
        submit.on("click", function() {

            // Score to be shown and Check if answer is correct
            for(var i = 0; i < questionArray.length; i++){
                if(questionArray[i].answer === choiceBank[i.toString()]) {
                    correct++;
                } else {
                    incorrect++;
                };
            };
            $("#answers").text("Trivia game completed! \nCorrect: " + correct + "\nIncorrect: " + incorrect);
            $("#finish").empty();
            $("#timer").empty();
        });
    
        $('#finish').append(submit);
    };




    // Generate the questions order
    //  for(var i = 0; i < questionArray.length; i++) {

    //     var newQuestion = questionArray[i];
    //     var question = newQuestion.q;
    //     var answer = newQuestion.answer;
    //     var newQuestionDiv = $("<div>");

    // // Answer options
    //     var optionOne = newQuestion.optionOne;
    //     var optionTwo = newQuestion.optionTwo;
    //     var optionThree = newQuestion.optionThree;
    //     var optionFour = newQuestion.optionFour;

    // // Displaying Question to the page
    //     newQuestionDiv.append(question);

    // // Make answers clickable
    //     answerButton1 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionOne).text(optionOne);
    //     answerButton2 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionTwo).text(optionTwo);
    //     answerButton3 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionThree).text(optionThree);
    //     answerButton4 = $("<button>").addClass("btn btn-primary btn-lg answer-button").attr('data-question', i).attr("data-option", optionFour).text(optionFour);
 
    // // Displaying answer options to page
    //     var answerDisplay = $("#answers");
    //     newQuestionDiv.append(answerButton1, answerButton2, answerButton3, answerButton4);
    //     answerDisplay.append(newQuestionDiv);
    //  };

    // // Check if answer is correct
    //     // Set up counters for correct and incorrect
    //     var correct = 0;
    //     var incorrect = 0;

    //     // Once an answer button is clicked...
    //     $(".answer-button").on("click", function() {
    //         // Make sure all buttons are first marked as unclicked
    //         $(this).parent().children().removeClass('btn-secondary').addClass('btn-primary');

    //         // If a button is  clicked, change the color so that the user knows which button they clicked
    //         $(this).removeClass('btn-primary').addClass('btn-secondary');

    //         // Which ever button the user clicks will be added to an array
    //         // This code ensures that if the user changes their answer that their answer won't count as 2 guesses, but as whatever their most recent guess was.
    //         choiceBank[$(this).attr('data-question')] =  $(this).attr("data-option");
    //     });
        


    // // Set up submit button
    // var submit = $("<button>").addClass("submit-button").text('Finish');

    // submit.on("click", function() {
    //     // Score to be shown
    //     for(var i = 0; i < questionArray.length; i++){
    //         if(questionArray[i].answer === choiceBank[i.toString()]) {
    //             correct++;
    //         } else {
    //             incorrect++;
    //         };
    //     };
    //     $("#answers").text("Trivia game completed! \nCorrect: " + correct + "\nIncorrect: " + incorrect);
    // });

    // $('#answers').append(submit);


});