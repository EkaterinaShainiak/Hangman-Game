$(document).ready(function () {
    document.addEventListener("keypress", keyPressed)
    var options = [
        ["MADONNA", "A PIC", "A SONG"],
        ["BEATTLES", "A PIC", "A SONG"]
    ];
    var word = "";
    var wins = 0;
    var hidden_word = "";
    var inGame = false;
    var indxCharInHidden = 0;
    var charsCounter = 0;
    var charsRevealed = "";
    var guesses_remaining = 10;

    function keyPressed() {
        var char = event.key.toUpperCase();
        if (isLetter(char) && (!inGame)) {
            reset();
            initialize();
            inGame = true;
        }
        // ifWin();

        if (charsRevealed.indexOf(char) == -1) {
            charsRevealed += char
            guesses_remaining -= 1;


        };
        $("#guessed").text(charsRevealed);
        $("#guesses_num").text(guesses_remaining);

        indxCharInHidden = word.indexOf(char);
        if (indxCharInHidden != -1) {
            hidden_word = revealChar(word, hidden_word, char);
            $("#hidden_word").html(hidden_word);

        }

        function ifWin() {
            if (charsRevealed.length == word.length) {
                console.log("TEST");
                console.log(charsRevealed.length);
                console.log(word.length);
                wins += 1;
                $("#Wins:").text(wins);
                reset();
                initialize();
            };



        }

        function revealChar(word, hidden_word, char) {
            var tempStr = "";

            if (charsRevealed.indexOf(char) == -1) {
                charsRevealed += char
            };
            $("#guessed").text(charsRevealed);

            for (i = 0; i < word.length; i++) {

                // if (i === indxCharInHidden) {
                //     tempStr += char
                //     charsCounter += 1;
                //     charsRevealed += char;
                // }
                // else { tempStr += hidden_word[i] }

                if (char === word[i]) {
                    charsCounter += 1;
                    tempStr += char;

                }
                else { tempStr += hidden_word[i] };

            };
            return tempStr;
        };
        function isLetter(char) {
            return true
        }

        function reset() {
            var random_word_inx = Math.floor((Math.random() * 2));
            word = options[random_word_inx][0];
            $("#hidden_word").html();
            ifWin();

        }

        function initialize() {
            hidden_word = "";
            for (i = 0; i < word.length; i++) {

                hidden_word += '-';
                $("#hidden_word").html(hidden_word);
            }
            $("#wins").text(wins);
        }
    }
});
