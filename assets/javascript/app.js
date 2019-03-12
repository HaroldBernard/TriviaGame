
    var number = 0;
    var intervalId;
    var triviaArray = []
    var button = $("<button class='start'>")
    var insert = $(".jumbotron");
    var winMessage = $("<h3 class='replace' data-value=" + number + ">").text("Correct! Get ready for next question")
    var loseMessage = $("<h3 class='replace' data-value=" + number + ">").text("Wrong! Get ready for next question")
    var gameOverMessage = $("<h1 class='replace' data-value=" + number + ">").text("Game Over! Check out how you did")
    var noTime = $("<h3 class='replace' data-value=" + number + ">").text("Out of time! get ready for next question")
    var correct = 0
    var wrong = 0
    //var nextQ = solution(clickMe1, QandA[1], loseMessage)
    //var nextQ = clickMe1;
    var nextA = 1;
    var nextI = "<img class='image' src='assets/images/bear.gif'>"

    // object containing questions, choices, and answers
    var QandA = [{
        question: "In The Jungle Book, who teaches Mowgli about The Bare Necesseties of life?",
        answers: {
            a: "Kaa",
            b: "Baloo",
            c: "Bagheera",
            d: "Shere Khan"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is not a name of one of donald ducks nephews?",
        answers: {
            a: "Dewey",
            b: "Louie",
            c: "Stewie",
            d: "Huey"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the name of the person who terrorizes the toys in Toy Story",
        answers: {
            a: "Sid",
            b: "Andy",
            c: "Hannah",
            d: "Troll"
        },
        correctAnswer: "a"
    },
    {
        question: "In Peter Pan, what is the name of Captain Hook's side kick",
        answers: {
            a: "Smee",
            b: "Nibs",
            c: "Rufio",
            d: "Curly"
        },
        correctAnswer: "a"
    },
    {
        question: "In the Goofy Movie, how does Goofy create his iconic dance",
        answers: {
            a: "Mowing the lawn",
            b: "Bowling",
            c: "Washing dishes",
            d: "Fishing"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the name of Bambi's rabbit friend?",
        answers: {
            a: "Thumper",
            b: "Trumpet",
            c: "Tango",
            d: "Trigger"
        },
        correctAnswer: "a"
    },
    {
        question: "Which god is not featured in Disney's Hercules?",
        answers: {
            a: "Hades",
            b: "Appolo",
            c: "Hermes",
            d: "Ares"
        },
        correctAnswer: "d"
    },
    {
        question: "Which Disney princess wears pants instead of a dress?",
        answers: {
            a: "Snow White",
            b: "Aurora",
            c: "Rapunzel",
            d: "Jasmine"
        },
        correctAnswer: "d"
    },
    {
        question: "In Snow White, which is not one of the seven dwarfs ",
        answers: {
            a: "Bashful",
            b: "Lazy",
            c: "Sneezy",
            d: "Doc"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the Name of the dragon from mulan",
        answers: {
            a: "Shamu",
            b: "Komodo",
            c: "Mushu",
            d: "Pyro"
        },
        correctAnswer: "c"
    }
    ];


    //creating start button and appending it to the page
    var start = button.text("Start");
    insert.append(start);

    //creating variables to the question and choices so that I can reference them in the parameters of my click functions in order to change the options
    var clickMe = 'clickMe'
    var clickMe1 = 'clickMe1'
    var clickMe2 = 'clickMe2'
    var clickMe3 = 'clickMe3'
    var clickMe4 = 'clickMe4'
    var clickMe5 = 'clickMe5'
    var clickMe6 = 'clickMe6'
    var clickMe7 = 'clickMe7'
    var clickMe8 = 'clickMe8'
    var clickMe9 = 'clickMe9'
    //function to display question and choices to page
    function solution(clickMe, QandA) {
        game()
        insert.append($("<div class=" + clickMe + ">").text(QandA.question));
        var answer1 = insert.append($("<button class=" + clickMe + " data-answer='a'>").text(QandA.answers.a));
        var answer2 = insert.append($("<button class=" + clickMe + " data-answer='b'>").text(QandA.answers.b));
        var answer3 = insert.append($("<button class=" + clickMe + " data-answer='c'>").text(QandA.answers.c));
        var answer4 = insert.append($("<button class=" + clickMe + " data-answer='d'>").text(QandA.answers.d));
    }
    // countdown function 
    function countdown() {
        number--
        if (number !== 0) {
            timer = $("<div class='replace' data-value=" + number + ">").text("Time Remaining: " + number + " Seconds");
            $(".replace").replaceWith(timer);
        }
        else {
            clearInterval(intervalId)
            timesUp('clickMe' + nextA, QandA[nextA])
        }
    }
    // game timer function
    function game() {
        clearInterval(intervalId);
        number = 16
        countdown()
        intervalId = setInterval(countdown, 1000);

    }
    // function for what happens if you click on the right answer
    function rightAnswer(clickMe, QandA) {
        $(".replace").replaceWith(winMessage);
        clearInterval(intervalId);
        setTimeout(function () { $(".image").remove() }, 4900);
        setTimeout(function () { solution(clickMe, QandA) }, 5000);
        correct++;
    }
    // function for what happens if you click on the wrong answer
    function wrongAnswer(clickMe, QandA) {
        $(".replace").replaceWith(loseMessage);
        clearInterval(intervalId);
        setTimeout(function () { $(".image").remove() }, 4900);
        setTimeout(function () { solution(clickMe, QandA) }, 5000);
        wrong++;
    }
    // function for running out of time (in progress)
    function timesUp(clickMe, QandA) {
        var clickMeClass = nextA - 1;
        nextA++;
        // solution(clickMe, QandA)
        wrong++;
        $(".replace").replaceWith(loseMessage);
        
        if(clickMeClass === 0) {
            clickMeClass = "";

        }
        
        $(".clickMe" + clickMeClass).remove()
        insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
        setTimeout(function () {
            $(".image").remove()
            solution(clickMe, QandA)
        }, 4900);
        //setTimeout(function () { solution(clickMe, QandA) }, 5000);


    }
    // end game function
    function results() {
        $(".replace").replaceWith(gameOverMessage);
        clearInterval(intervalId);
        insert.append($("<h1 data-value=" + number + ">").text("You answered " + correct + " right"))
        insert.append($("<h1 data-value=" + number + ">").text("You answered " + wrong + " wrong"))
        setTimeout(function () { $("<h1>").remove() }, 9000);
        setTimeout(function () { $("<img>").remove() }, 9000);
        setTimeout(function () { insert.append(start) }, 10000);
    }


    //when you click start it brings up the timer, 1st question, and answer choices
    $(document).on("click", ".start", function () {
        start.replaceWith(game);
        $(".replace2").append(solution(clickMe, QandA[0]));
    })
    // click functions below
    $(document).on("click", ".clickMe", function () {
        nextA = 2;
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe").remove()

        console.log(answerValue)
        if (answerValue === "b") {
            insert.append($("<img class='image' src='assets/images/bear.gif'>"))
            rightAnswer(clickMe1, QandA[1]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe1, QandA[1]);
        }

    })
    $(document).on("click", ".clickMe1", function () {
        //nextQ = clickMe2;
        nextA = 3;
        nextI = "<img class='image' src='assets/images/huedewlou.gif'>"
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe1").remove()

        console.log(answerValue)
        if (answerValue === "c") {
            insert.append($("<img class='image' src='assets/images/huedewlou.gif'>"))
            rightAnswer(clickMe2, QandA[2]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe2, QandA[2]);
        }

    })
    $(document).on("click", ".clickMe2", function () {
        //nextQ = clickMe3;
        nextA = 4;
        nextI = "<img class='image' src='assets/images/sid.gif'>"
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe2").remove()

        console.log(answerValue)
        if (answerValue === "a") {
            insert.append($("<img class='image' src='assets/images/sid.gif'>"))
            rightAnswer(clickMe3, QandA[3]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe3, QandA[3]);
        }

    })
    $(document).on("click", ".clickMe3", function () {
        nextA = 5;
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe3").remove()

        console.log(answerValue)
        if (answerValue === "a") {
            insert.append($("<img class='image' src='assets/images/smee.gif'>"))
            rightAnswer(clickMe4, QandA[4]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe4, QandA[4]);
        }

    })
    $(document).on("click", ".clickMe4", function () {
        nextA = 6;
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe4").remove()

        console.log(answerValue)
        if (answerValue === "d") {
            insert.append($("<img class='image' src='assets/images/goofy.gif'>"))
            rightAnswer(clickMe5, QandA[5]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe5, QandA[5]);
        }

    })
    $(document).on("click", ".clickMe5", function () {
        nextA = 7;
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe5").remove()

        console.log(answerValue)
        if (answerValue === "a") {
            insert.append($("<img class='image' src='assets/images/thumper.gif'>"))
            rightAnswer(clickMe6, QandA[6]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe6, QandA[6]);
        }

    })
    $(document).on("click", ".clickMe6", function () {
        nextA = 8;
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe6").remove()

        console.log(answerValue)
        if (answerValue === "d") {
            insert.append($("<img class='image' src='assets/images/hercules.gif'>"))
            rightAnswer(clickMe7, QandA[7]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe7, QandA[7]);
        }

    })
    $(document).on("click", ".clickMe7", function () {
        nextA = 9;
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe7").remove()

        console.log(answerValue)
        if (answerValue === "d") {
            insert.append($("<img class='image' src='assets/images/jasmine.gif'>"))
            rightAnswer(clickMe8, QandA[8]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe8, QandA[8]);
        }

    })
    $(document).on("click", ".clickMe8", function () {
        nextA = 10;
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe8").remove()

        console.log(answerValue)
        if (answerValue === "b") {
            insert.append($("<img class='image' src='assets/images/dwarfs.gif'>"))
            rightAnswer(clickMe9, QandA[9]);
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            wrongAnswer(clickMe9, QandA[9]);
        }

    })
    $(document).on("click", ".clickMe9", function () {
        var answerValue = ($(this).attr("data-answer"));
        $(".clickMe9").remove()

        console.log(answerValue)
        if (answerValue === "c") {
            insert.append($("<img class='image' src='assets/images/mushu.gif'>"))
            results();
        }
        else {
            insert.append($("<img class='image' src='assets/images/wrong.gif'>"))
            results()
        }

    })