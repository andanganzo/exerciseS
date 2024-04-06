let scores = {
ties: 0,
wins: 0,
loses: 0
};

scores = JSON.parse(localStorage.getItem('resultCountSave'));

        let results = '';
        var randomNum = Math.random();
        let randomNum2 = Math.random();

    function picks (icon) {
        document.querySelector('.You')
                    .innerHTML = 'You: ';
        document.querySelector('.picks-User')
        .innerHTML = `${icon}`;
}

    function resetButton() {
        document.querySelector('.resetButton-div')
        .innerHTML  =
        `<button onclick = "
        resetScore();
        ">Reset Scores</button>
        `
}



function rock() {
           picksInside(); 
    if (picks) {
        
    if (randomNum === '✊') {
        results = 'Tie'
        scores.ties++;
 }
        else if (randomNum === '✌️') {
            results = 'You win'
            resultColorScore();
            scores.wins++;       
        }
        else if (randomNum === '✋') {
            results = 'You lose'
            
            scores.loses++;
        resultColorScore();
        }
    }   document.querySelector('.results-Div')
            .innerHTML = results;
            document.querySelector('.scores-Div')
            .innerHTML = `Wins: ${scores.wins}, Ties: ${scores.ties}
            Loses: ${scores.loses}`; 
            localStorage.setItem('resultCountSave', JSON.stringify(scores));
    }

function resultColorScore() {
  
    if (randomNum === '✊') {
            // results = 'Tie';
            // scores.wins++;
            document.querySelector('.results-Div')
            .innerHTML =` 
            <p style = "color: yellow">${results}</p>`;
            
    } else if (randomNum === '✌️') {
        // results = 'You win';
        // scores.wins++;
        document.querySelector('.results-Div')
        .innerHTML =` 
        <p style = "color: green">${results}</p>`;
        
    } else if (randomNum === '✋') {
        // results = 'You lose';
        // scores.wins++;
        document.querySelector('.results-Div')
        .innerHTML =` 
        <p style = "color: rgb(147, 25, 25)">${results}</p>`;
        
    }
 // document.querySelector('.scores-Div')
    // .innerHTML = `Wins: ${scores.wins}, Ties: ${scores.ties}
    // Loses: ${scores.loses}`; 
    // localStorage.setItem('resultCountSave', JSON.stringify(scores));
}

    function paper() {
        // picksInside();
        if (picks) {
            picks('✋');
    if (randomNum === '✋') {
        results = 'Tie'
        scores.ties++;
        }else if (randomNum === '✊') {
            results = 'You win'
            scores.wins++;
        }else if (randomNum === '✌️') {
            console.log(`${randomNum}`);
            results = 'You lose'
            scores.loses++;
        }}document.querySelector('.results-Div')
            .innerHTML = results; 
            document.querySelector('.scores-Div')
            .innerHTML = `Wins: ${scores.wins}, 
            Ties: ${scores.ties}
            Loses: ${scores.loses}`; 
            localStorage.setItem('resultCountSave', 
            JSON.stringify(scores));
        }

        
        // function picksInside() {
            
        //     if (rock) {
        //         picks('✊');
        //     }
        //     else if (paper) {
        //         picks('✋');
        //     }
        //     else if (scissor) {
        //         picks('✌️');
        //     }
        // }
    

    function scissor() {
        // picksInside();
        if (picks) {
    if (randomNum === '✌️') {
        results = 'Tie'
        scores.ties++;
        } else if (randomNum === '✋') {
            results = 'You win'
            scores.wins++;
       
        }else if (randomNum === '✊') {
            console.log(`${randomNum}`);
            results = 'You lose'
            scores.loses++;
        }
        
    }document.querySelector('.results-Div')
            .innerHTML = results; 
            document.querySelector('.scores-Div')
            .innerHTML = `Wins: ${scores.wins}, 
            Ties: ${scores.ties}
            Loses: ${scores.loses}`; 
            localStorage.setItem('resultCountSave', 
            JSON.stringify(scores));  
        }
             

        function resetScore() {
            results = '';
            scores.wins = 0;
            scores.ties = 0;
            scores.loses = 0;

            document.querySelector('.results-Div')
            .innerHTML = results;
            document.querySelector('.scores-Div')
            .innerHTML = `Wins: ${scores.wins}, Ties: ${scores.ties}
            Loses: ${scores.loses}`; 
            localStorage.setItem('resultCountSave', JSON.stringify(scores));
        }

        function pcMoves() {
            randomNum = Math.random();
            if (randomNum < 0.3199999999999999) {
            randomNum = '✊'  
            }
            else if (randomNum > 0.3199999999999999 && randomNum < 0.6999999999999999) {
                randomNum = '✋'  
            }
            else if (randomNum > 0.6999999999999999 && randomNum <= 0.9999999999999999) {
            randomNum = '✌️'
            }
            document.querySelector('.pc')
                .innerHTML = 'Pc: ';
                document.querySelector('.picks-Pc')
                .innerHTML = ` ${randomNum}`
        }




 





        function randomNum2f() {
            randomNum2 = Math.random();
            if (randomNum2 < 0.3199999999999999) {
            randomNum2 = '✋';
            picks('✋');
            if (randomNum === '✋') {
                results = 'Tie'
                scores.ties++;

                }else if (randomNum === '✊') {
                    results = 'You win'
                    scores.wins++;

                }else if (randomNum === '✌️') {
                    console.log(`${randomNum}`);
                    results = 'You lose'
                    scores.loses++;

                } document.querySelector('.scores-Div')
                    .innerHTML = `Wins: ${scores.wins}, 
                    Ties: ${scores.ties}
                    Loses: ${scores.loses}`; 
                    localStorage.setItem('resultCountSave', 
                    JSON.stringify(scores))
                }

            
            else if (randomNum2 > 0.3199999999999999 && randomNum2 <= 0.6999999999999999) {
                randomNum2 = '✊';
                picks('✊');
                if (randomNum === '✊') {
                    results = 'Tie'
                    scores.ties++;
             }
                    else if (randomNum === '✌️') {
                        results = 'You win'
                        resultColorScore();
                        scores.wins++;       
                    }
                    else if (randomNum === '✋') {
                        results = 'You lose'
                        scores.loses++;
                    }document.querySelector('.results-Div')
                        .innerHTML = results;
                        document.querySelector('.scores-Div')
                        .innerHTML = `Wins: ${scores.wins}, Ties: ${scores.ties}
                        Loses: ${scores.loses}`; 
                        localStorage.setItem('resultCountSave', JSON.stringify(scores));
                }   
                


            
            else if (randomNum2 > 0.6999999999999999 && randomNum2 <= 0.9999999999999999) {
            randomNum2 = '✌️';
            picks('✌️');
            if (randomNum === '✌️') {
                results = 'Tie'
                scores.ties++;
                } else if (randomNum === '✋') {
                    results = 'You win'
                    scores.wins++;
               
                }else if (randomNum === '✊') {
                    console.log(`${randomNum}`);
                    results = 'You lose'
                    scores.loses++;
                }
                document.querySelector('.results-Div')
                    .innerHTML = results; 
                    document.querySelector('.scores-Div')
                    .innerHTML = `Wins: ${scores.wins}, 
                    Ties: ${scores.ties}
                    Loses: ${scores.loses}`; 
                    localStorage.setItem('resultCountSave', 
                    JSON.stringify(scores)); 
            }
            

        }

        