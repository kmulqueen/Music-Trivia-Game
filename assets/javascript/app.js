$("document").ready(function () {
    // Make an array of objects that contain questions and answers
    var questionArray = [
        {
            q: "1. Who is NOT a member of the Wu-Tang Clan?",
            answer: "Redman",
            optionOne: "RZA",
            optionTwo: "GZA",
            optionThree: "Method Man",
            optionFour: "Redman"
        },
        {
            q: "2. What is Thelonious Monk's middle name?",
            answer: "Sphere",
            optionOne: "Sphere",
            optionTwo: "Jupiter",
            optionThree: "Michael",
            optionFour: "Orb"
        },
        {
            q: "3. Who played drums in The Beatles BEFORE Ringo Starr, and is known as 'The Fifth Beatle'?",
            answer: "Pete Best",
            optionOne: "Bernard Purdie",
            optionTwo: "Yoko Ono",
            optionThree: "Pete Best",
            optionFour: "Harry Potter"
        },
        {
            q: "4. What musician won the Nobel Prize for Literature in 2016?",
            answer: "Bob Dylan",
            optionOne: "Paul McCartney",
            optionTwo: "Bob Dylan",
            optionThree: "Eminem",
            optionFour: "Lil Pump"
        },
        {
            q: "5. Which famous American musician was fatally shot by his father on April 1, 1984?",
            answer: "Marvin Gaye",
            optionOne: "Lee Morgan",
            optionTwo: "Kurt Cobain",
            optionThree: "Marvin Gaye",
            optionFour: "Jimi Hendrix"
        },
        {
            q: "6. What was Elvis Presley's middle name?",
            answer: "Aaron",
            optionOne: "Aaron",
            optionTwo: "Marcus",
            optionThree: "Theodore",
            optionFour: "Money"
        },
        {
            q: "7. How many kids does Snoop Dogg have?",
            answer: "Three",
            optionOne: "Five",
            optionTwo: "Two",
            optionThree: "Three",
            optionFour: "Four"
        },
        {
            q: "8. Who let the dogs out?",
            answer: "The Baha Men",
            optionOne: "We all did",
            optionTwo: "The Baha Men",
            optionThree: "Britney Spears",
            optionFour: "Slayer"
        }
        
    ];
// Array to store the user's answer
var choiceBank=[];
// Set up counters for correct and incorrect
var correct = 0;
var incorrect = 0;
     
 // Set up submit button
 var submit = $("<button>").addClass("submit-button btn btn-primary btn-lg").text('Finish').attr("clicked", "false");
 submit.on("click", function() {
     // Change clicked to true
     submit.attr("clicked", "true");
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
     clearInterval(interval);
     $("#timer").text("You Finished!")
     console.log("You Finished! Game Over");
 });

//  $('#finish').append(submit);


    // Functions ==========================================================
    startBtn();
    // Start Button
    function startBtn() {
        $("#timer").empty();
        $("#answers").empty();
        $("#finish").empty();
        var startButton = $("<button>");
        startButton.addClass("start-button btn btn-primary btn-lg").text("Start");
        $("#answers").append(startButton);
        $(startButton).on("click", function() {
            $("#answers").empty();
            // $("#finish").append(submit);
            startGame();
        });

    };

    // Timer
    var interval;
    
    
    // Function
    function timer() {
    // Create display for timer
        var timerDiv = $("#timer");
    // Set time limit
        var time = 40;
    // Decrease by 1 every 1 second
        interval = setInterval(function() {
        // Decrease 1 from time every 1000 milliseconds (1 second).
        time--;
        // If time reaches 0, display results of quiz
        // create variable to store display
        var display = $("#answers");
        if(time === 0) {
            clearInterval(interval);
            timerDiv.text("Ran Out of Time! Game Over");
            console.log("0! Ran out of time.");
            display.text("Ran Out of Time! Score: \nCorrect: " + correct + "\nIncorrect: " + incorrect);
            $("#finish").empty();
        } else if($(".submit-button").attr("clicked") === "true"){
            clearInterval(interval);
            timerDiv.text("You Finished In Time!");
            display.text("Trivia game completed! \nCorrect: " + correct + "\nIncorrect: " + incorrect);
            console.log("You Finished In Time!");
        } 
        else {
            timerDiv.text(time);
        };
                           
        
        console.log("set interval working");
    }, 1000);
     
    };

    // Start Game
    function startGame() {
        $("#timer").text("40");
        timer();
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
        
            // Finish button
            $('#finish').append(submit);
            
    };

});