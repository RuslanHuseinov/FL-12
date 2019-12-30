var prizes = {
    0: 100,
    1: 50,
    2: 25
};

let maxAttemps = 3;


if (confirm('Do you want to play a game')) {
    let playGame = true,
        prize = 0,
        maxNum = 8,
        prizeMultiplier = 1;

    while (playGame) {
        let pocketNum = Math.floor(Math.random() * maxNum),
            userVar;

         alert(`Choose a roulete pocket number from 0 to ${ maxNum }`);
         alert(`Total prize ${ prize }`);
         alert(`Possible prize on current attemp: ${ prizes[0] * prizeMultiplier }`);


        for (let attemp = 0; attemp < maxAttemps; attemp++) {
            alert(`Attemps left = ${ maxAttemps - attemp }`);
            userVar = parseInt(prompt("enter a number of pocket"), 10);
            if (userVar === pocketNum) {
                prize += prizes[attemp] * prizeMultiplier || 0;
                alert(`Congratulations you won ${ prize }`);
                playGame === !!confirm('Do you want to play again?');
                break;
            } else if (attemp === 2) {
                playGame = !!confirm('Do you want to play again?');
            }
        }

        if (playGame) {
            maxNum += 4;
            prizeMultiplier += 1;
        }
    }
} else {
    alert('You did not become a billionaire, but can');
}