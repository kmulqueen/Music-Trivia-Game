$(document).ready(function () {

    // Creating HTML elements




    // set up an objet that holds everything
    var quiz = {
        score: 0,
        numberOfQuestions: 2,
        q1: {
            question: "What's the coolest color?",
            options: [
                "Blue",
                "Red",
                "Yellow"
            ],
            answer: "Blue"
        },
        q2: {
            question: "What's the coolest instrument?",
            opt1: "Drums",
            opt2: "Trumpet",
            opt3: "Triangle"
        },
        submit: function() {
            $("<button>").on("click", function() {
                if($("<button>") === q1.answer) {
                    alert("correct");
                } else {
                    alert("incorrect");
                };
            });
        },






    };
    quiz.submit;
    $("#question").text(quiz.q1.question);
    answerButton1 = $("<button>");
    answerButton2 = $("<button>");
    answerButton3 = $("<button>");
    answerButton1.text(quiz.q1.options[0]);
    answerButton2.text(quiz.q1.options[1]);
    answerButton3.text(quiz.q1.options[2]);
    $("#answers").append(answerButton1, answerButton2, answerButton3);

    // question = $("<div>" + quiz.q1.question + "</div>");


    // answer = $("<div>" + quiz.q1.options.join(" ") +"</div>");

    // $("body").append(question, answer);



    // console.log(quiz.q1);


});