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

    function keyPressed() {
        var char = event.key.toUpperCase();
        if (isLetter(char) && (!inGame)) {
            reset();
            initialize();
            inGame = true;
        }
        indxCharInHidden = word.indexOf(char);

        if (indxCharInHidden != -1) {
            hidden_word = revealChar(word, hidden_word, char);

            console.log(char);
            $("#hidden_word").html(hidden_word);
        }
        else { console.log("out") };




        function revealChar(word, hidden_word, char) {
            var tempStr = "";
            for (i = 0; i < word.length; i++) {

                // if (i === indxCharInHidden) {
                //     tempStr += char
                //     charsCounter += 1;
                //     charsRevealed += char;
                // }
                // else { tempStr += hidden_word[i] }

                if (char === word[i]) {
                    console.log(char);
                    console.log(word[i])
                    charsCounter += 1;
                    if (charsRevealed.indexOf(char) != -1) {
                        
                    }
                    else {
                        charsRevealed += char;
                        tempStr += char;
                    }
                    

                }
                else { tempStr += hidden_word[i] }
            }
            $("#guessed").text(charsRevealed);
            return tempStr;
        };

        function isLetter(char) {
            return true
        }

        function reset() {
            var random_word_inx = Math.floor((Math.random() * 2));
            word = options[random_word_inx][0];
            $("#hidden_word").html();

            console.log(word);
        }

        function initialize() {
            hidden_word = "";
            for (i = 0; i < word.length; i++) {

                hidden_word += '-';
                $("#hidden_word").html(hidden_word);
            }
        }

    }
});