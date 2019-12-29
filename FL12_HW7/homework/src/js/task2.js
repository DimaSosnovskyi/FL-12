let totalPrize = 0; 
let lifes = 3;
let play = confirm('Do you want to play a game?');
let guess;
let possiblePrize = 100;
let number;
if (play === false) {
    alert('You did not become a billionaire, but can.');
} else {
    while (lifes > 0) {
        guess = prompt(`Choose a ruolette number of pocket 0 to 8
Attempts left: ${lifes}
Total prize: ${totalPrize}
Possible prize on current attempt: ${possiblePrize}`);
        guess = +guess;
        number = Math.floor(Math.random() * 8);
        number= +number;
        console.log(number);
        if(guess === number && lifes === 3) {
            totalPrize = totalPrize + 100;
            play = confirm("Congratulation, you won!   Your prize is: " + totalPrize +'$'+ 'Do you want to continue?');
            if(play === false) {
                play = confirm('Thank you for your participation. Do you want to play again?');
                if (play === false) {
                    alert('Your prize is: ' + totalPrize + '$');
                    break;
                } else {
                    lifes = 3;
                    totalPrize = 0;
                    possiblePrize = 100;
                }
            } else {
                number = Math.floor(Math.random() * 12);
                lifes = 3;
                possiblePrize = possiblePrize * 2;
            } 
        } else if (guess !== number && lifes === 3) {
            lifes--;
            possiblePrize = possiblePrize - 50;
        } else if (guess === number && lifes === 2 ) {
            totalPrize = totalPrize + 50;
            play = confirm("Congratulation, you won!   Your prize is: " + totalPrize +'$'+ 'Do you want to continue?');
            if(play === false) {
                play = confirm('Thank you for your participation. Do you want to play again?');
                if (play === false) {
                    alert('Your prize is: ' + totalPrize + '$');
                    break;
                } else {
                    lifes = 3;
                    totalPrize = 0;
                    possiblePrize = 50;
                }
            } else {
                number = Math.floor(Math.random() * 12);
                lifes = 2;
                possiblePrize = possiblePrize * 2;
            } 
        } else if (guess !== number && lifes === 2) {
            lifes--;
            possiblePrize = possiblePrize - 25;
        } else if (guess === number && lifes === 1) {
            totalPrize =totalPrize + 25;
            play = confirm("Congratulation, you won!   Your prize is: " + totalPrize +'$'+ 'Do you want to continue?');
            if(play === false) {
                play = confirm('Thank you for your participation. Do you want to play again?');
                if (play === false) {
                    alert('Your prize is: ' + totalPrize + '$');
                    break;
                } else {
                    lifes = 3;
                    totalPrize = 0;
                    possiblePrize = 25;
                }
            } else {
                number = Math.floor(Math.random() * 12);
                lifes = 1;
                possiblePrize = possiblePrize * 2;
            } 
        } else if (guess !== number && lifes === 1) {
            play = confirm('Would you want to play again?');
            if (play === false) {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                lifes--;
            } else {
                lifes = 3;
                possiblePrize = 100;
                totalPrize = 0;
            }
        }

    }
}
