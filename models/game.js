/*****************************************************
 * Description:   Defines Game object and functionality for Prisoner's Dilemma game
 * Version:   2.3   
*****************************************************/
class Game {
    constructor() {
        let round;  // current round
        let totalRounds;    // total # of rounds to play
        let p1strategy, p2strategy, p3strategy, p4strategy, p5strategy;

        this.p1Plays = [], this.p2Plays = [], this.p3Plays = [], this.p4Plays = [], this.p5Plays = [], this.p6Plays = [];
        this.p1Scores = [], this.p2Scores = [], this.p3Scores = [], this.p4Scores = [], this.p5Scores = [], this.p6Scores = [];
    }

    // obsolete function - not used
    playGame(round, p1select, p2select) {
        this.round = round;
        if (this.p2strategy == 'Always Cooperate') {
            if (round == 1) {
                this.p1r1select = p1select;
                this.p2r1select = 'Cooperate';
                if (p1select == 'Cooperate') {
                    this.p1r1score = 3;
                    this.p2r1score = 3;
                } else if (p1select == 'Betray') {
                    this.p1r1score = 5;
                    this.p2r1score = 0;
                }
                this.p1totalscore = this.p1r1score;
                this.p2totalscore = this.p2r1score;   
            }
            else if (round == 2) {
                this.p1r2select = p1select;
                this.p2r2select = 'Cooperate';
                if (p1select == 'Cooperate') {
                    this.p1r2score = 3;
                    this.p2r2score = 3;
                } else if (p1select == 'Betray') {
                    this.p1r2score = 5;
                    this.p2r2score = 0;
                }
                this.p1totalscore += this.p1r2score;
                this.p2totalscore += this.p2r2score;
            }
            else if (round == 3) {
                this.p1r3select = p1select;
                this.p2r3select = 'Cooperate';
                if (p1select == 'Cooperate') {
                    this.p1r3score = 3;
                    this.p2r3score = 3;
                } else if (p1select == 'Betray') {
                    this.p1r3score = 5;
                    this.p2r3score = 0;
                }
                this.p1totalscore += this.p1r3score;
                this.p2totalscore += this.p2r3score;
            }
            else if (round == 4) {
                this.p1r4select = p1select;
                this.p2r4select = 'Cooperate';
                if (p1select == 'Cooperate') {
                    this.p1r4score = 3;
                    this.p2r4score = 3;
                } else if (p1select == 'Betray') {
                    this.p1r4score = 5;
                    this.p2r4score = 0;
                }
                this.p1totalscore += this.p1r4score;
                this.p2totalscore += this.p2r4score;
            }
            else if (round == 5) {
                this.p1r5select = p1select;
                this.p2r5select = 'Cooperate';
                if (p1select == 'Cooperate') {
                    this.p1r5score = 3;
                    this.p2r5score = 3;
                } else if (p1select == 'Betray') {
                    this.p1r5score = 5;
                    this.p2r5score = 0;
                }
                this.p1totalscore += this.p1r5score;
                this.p2totalscore += this.p2r5score;
            }
        } else if (this.p2strategy == 'Always Betray') {
            if (round == 1) {
                this.p1r1select = p1select;
                this.p2r1select = 'Betray';
                if (p1select == 'Cooperate') {
                    this.p1r1score = 0;
                    this.p2r1score = 5;
                } else if (p1select == 'Betray') {
                    this.p1r1score = 1;
                    this.p2r1score = 1;
                }
                this.p1totalscore = this.p1r1score;
                this.p2totalscore = this.p2r1score;   
            }
            else if (round == 2) {
                this.p1r2select = p1select;
                this.p2r2select = 'Betray';
                if (p1select == 'Cooperate') {
                    this.p1r2score = 0;
                    this.p2r2score = 5;
                } else if (p1select == 'Betray') {
                    this.p1r2score = 1;
                    this.p2r2score = 1;
                }
                this.p1totalscore += this.p1r2score;
                this.p2totalscore += this.p2r2score;
            }
            else if (round == 3) {
                this.p1r3select = p1select;
                this.p2r3select = 'Betray';
                if (p1select == 'Cooperate') {
                    this.p1r3score = 0;
                    this.p2r3score = 5;
                } else if (p1select == 'Betray') {
                    this.p1r3score = 1;
                    this.p2r3score = 1;
                }
                this.p1totalscore += this.p1r3score;
                this.p2totalscore += this.p2r3score;
            }
            else if (round == 4) {
                this.p1r4select = p1select;
                this.p2r4select = 'Betray';
                if (p1select == 'Cooperate') {
                    this.p1r4score = 0;
                    this.p2r4score = 5;
                } else if (p1select == 'Betray') {
                    this.p1r4score = 1;
                    this.p2r4score = 1;
                }
                this.p1totalscore += this.p1r4score;
                this.p2totalscore += this.p2r4score;
            }
            else if (round == 5) {
                this.p1r5select = p1select;
                this.p2r5select = 'Betray';
                if (p1select == 'Cooperate') {
                    this.p1r5score = 0;
                    this.p2r5score = 5;
                } else if (p1select == 'Betray') {
                    this.p1r5score = 1;
                    this.p2r5score = 1;
                }
                this.p1totalscore += this.p1r5score;
                this.p2totalscore += this.p2r5score;
            }
        }
        else if (this.p2strategy == 'Tit4Tat') {
            if (round == 1) {
                this.p1r1select = p1select;
                this.p2r1select = 'Cooperate';  //tit-4-tat always starts with cooperate
                if (p1select == 'Cooperate') {
                    this.p1r1score = 3;
                    this.p2r1score = 3;
                } else if (p1select == 'Betray') {
                    this.p1r1score = 5;
                    this.p2r1score = 0;
                }
                this.p1totalscore = this.p1r1score;
                this.p2totalscore = this.p2r1score;  
            }
            else if (round == 2) {
                this.p1r2select = p1select;
                this.p2r2select = this.p1r1select; 
                if (p1select == 'Cooperate' && this.p2r2select == 'Cooperate') {
                    this.p1r2score = 3;
                    this.p2r2score = 3;
                } else if (p1select == 'Cooperate' && this.p2r2select == 'Betray') {
                    this.p1r2score = 0;
                    this.p2r2score = 5;
                } else if (p1select == 'Betray' && this.p2r2select == 'Cooperate') {
                    this.p1r2score = 5;
                    this.p2r2score = 0;
                } else if (p1select == 'Betray' && this.p2r2select == 'Betray') {
                    this.p1r2score = 1;
                    this.p2r2score = 1;
                }
                this.p1totalscore += this.p1r2score;
                this.p2totalscore += this.p2r2score;
            } 
            else if (round == 3) {
                this.p1r3select = p1select;
                this.p2r3select = this.p1r2select; 
                if (p1select == 'Cooperate' && this.p2r3select == 'Cooperate') {
                    this.p1r3score = 3;
                    this.p2r3score = 3;
                } else if (p1select == 'Cooperate' && this.p2r3select == 'Betray') {
                    this.p1r3score = 0;
                    this.p2r3score = 5;
                } else if (p1select == 'Betray' && this.p2r3select == 'Cooperate') {
                    this.p1r3score = 5;
                    this.p2r3score = 0;
                } else if (p1select == 'Betray' && this.p2r3select == 'Betray') {
                    this.p1r3score = 1;
                    this.p2r3score = 1;
                }
                this.p1totalscore += this.p1r3score;
                this.p2totalscore += this.p2r3score;
            }
            else if (round == 4) {
                this.p1r4select = p1select;
                this.p2r4select = this.p1r3select; 
                if (p1select == 'Cooperate' && this.p2r4select == 'Cooperate') {
                    this.p1r4score = 3;
                    this.p2r4score = 3;
                } else if (p1select == 'Cooperate' && this.p2r4select == 'Betray') {
                    this.p1r4score = 0;
                    this.p2r4score = 5;
                } else if (p1select == 'Betray' && this.p2r4select == 'Cooperate') {
                    this.p1r4score = 5;
                    this.p2r4score = 0;
                } else if (p1select == 'Betray' && this.p2r4select == 'Betray') {
                    this.p1r4score = 1;
                    this.p2r4score = 1;
                }
                this.p1totalscore += this.p1r4score;
                this.p2totalscore += this.p2r4score;
            }
            else if (round == 5) {
                this.p1r5select = p1select;
                this.p2r5select = this.p1r4select; 
                if (p1select == 'Cooperate' && this.p2r5select == 'Cooperate') {
                    this.p1r5score = 3;
                    this.p2r5score = 3;
                } else if (p1select == 'Cooperate' && this.p2r5select == 'Betray') {
                    this.p1r5score = 0;
                    this.p2r5score = 5;
                } else if (p1select == 'Betray' && this.p2r5select == 'Cooperate') {
                    this.p1r5score = 5;
                    this.p2r5score = 0;
                } else if (p1select == 'Betray' && this.p2r5select == 'Betray') {
                    this.p1r5score = 1;
                    this.p2r5score = 1;
                }
                this.p1totalscore += this.p1r5score;
                this.p2totalscore += this.p2r5score;
            }
        }
        else if (this.p2strategy == 'Grudger') {
            let betrayed = false;
            if (round == 1) {
                this.p1r1select = p1select;
                this.p2r1select = 'Cooperate';
                if (p1select == 'Cooperate') {
                    this.p1r1score = 3;
                    this.p2r1score = 3;
                } else if (p1select == 'Betray') {
                    this.p1r1score = 5;
                    this.p2r1score = 0;
                }
                this.p1totalscore = this.p1r1score;
                this.p2totalscore = this.p2r1score;  
            } else if (round == 2) {
                this.p1r2select = p1select;
                if (this.p1r1select == 'Betray') {
                    this.p2r2select = 'Betray';
                    betrayed = true;
                } else {
                    this.p2r2select = 'Cooperate';
                }
                
                if (p1select == 'Cooperate') {
                    if (betrayed == true) {
                        this.p1r2score = 0;
                        this.p2r2score = 5;
                    } else {
                        this.p1r2score = 3;
                        this.p2r2score = 3;
                    }
                } else if (p1select == 'Betray') {
                    if (betrayed == true) {
                        this.p1r2score = 1;
                        this.p2r2score = 1;
                    } else {
                        this.p1r2score = 5;
                        this.p2r2score = 0;
                    }
                }
            } else if (round == 3) {
                this.p1r3select = p1select;
                if (this.p1r1select == 'Betray' || this.p1r2select == 'Betray') {
                    this.p2r3select = 'Betray';
                    betrayed = true;
                } else {
                    this.p2r3select = 'Cooperate';
                }

                if (p1select == 'Cooperate') {
                    if (betrayed == true) {
                        this.p1r3score = 0;
                        this.p2r3score = 5;
                    } else {
                        this.p1r3score = 3;
                        this.p2r3score = 3;
                    }
                } else if (p1select == 'Betray') {
                    if (betrayed == true) {
                        this.p1r3score = 1;
                        this.p2r3score = 1;
                    } else {
                        this.p1r3score = 5;
                        this.p2r3score = 0;
                    }
                }
            } else if (round == 4) {
                this.p1r4select = p1select;
                if (this.p1r1select == 'Betray' || this.p1r2select == 'Betray' || this.p1r3select == 'Betray') {
                    this.p2r4select = 'Betray';
                    betrayed = true;
                } else {
                    this.p2r4select = 'Cooperate';
                }

                if (p1select == 'Cooperate') {
                    if (betrayed == true) {
                        this.p1r4score = 0;
                        this.p2r4score = 5;
                    } else {
                        this.p1r4score = 3;
                        this.p2r4score = 3;
                    }
                } else if (p1select == 'Betray') {
                    if (betrayed == true) {
                        this.p1r4score = 1;
                        this.p2r4score = 1;
                    } else {
                        this.p1r4score = 5;
                        this.p2r4score = 0;
                    }
                }
            } else if (round == 5) {
                this.p1r5select = p1select;
                if (this.p1r1select == 'Betray' || this.p1r2select == 'Betray' || this.p1r3select == 'Betray' || this.p1r4select == 'Betray' ) {
                    this.p2r5select = 'Betray';
                    betrayed = true;
                } else {
                    this.p2r5select = 'Cooperate';
                }

                if (p1select == 'Cooperate') {
                    if (betrayed == true) {
                        this.p1r5score = 0;
                        this.p2r5score = 5;
                    } else {
                        this.p1r5score = 3;
                        this.p2r5score = 3;
                    }
                } else if (p1select == 'Betray') {
                    if (betrayed == true) {
                        this.p1r5score = 1;
                        this.p2r5score = 1;
                    } else {
                        this.p1r5score = 5;
                        this.p2r5score = 0;
                    }
                }
            }

        }
        else if (this.p2strategy == 'Hard Majority') {
            let totalBetray = 0, totalCooperate = 0;
            if (round == 1) {
                this.p1r1select = p1select;
                this.p2r1select = 'Betray';
                if (p1select == 'Cooperate') {
                    this.p1r1score = 0;
                    this.p2r1score = 5;
                } else if (p1select == 'Betray') {
                    this.p1r1score = 1;
                    this.p2r1score = 1;
                }
                this.p1totalscore = this.p1r1score;
                this.p2totalscore = this.p2r1score;  
            }
            else if (round == 2) {
                if (this.p1r1select == 'Cooperate') totalCooperate += 1;
                if (this.p1r1select == 'Betray') totalBetray += 1;
                this.p1r2select = p1select;
                if (p1select == 'Cooperate') {
                    if (totalCooperate > totalBetray) {
                        this.p2r2select = 'Cooperate';
                        this.p1r2score = 3;
                        this.p2r2score = 3;
                    } else {
                        this.p2r2select = 'Betray';
                        this.p1r2score = 0;
                        this.p2r2score = 5;
                    }
                } else if (p1select == 'Betray') {
                    if (totalCooperate > totalBetray) {
                        this.p2r2select = 'Cooperate';
                        this.p1r2score = 5;
                        this.p2r2score = 0;
                    } else {
                        this.p2r2select = 'Betray';
                        this.p1r2score = 1;
                        this.p2r2score = 1;
                    }
                }
                this.p1totalscore += this.p1r2score;
                this.p2totalscore += this.p2r2score;  
            }
            else if (round == 3) {
                if (this.p1r1select == 'Cooperate') totalCooperate += 1;
                if (this.p1r2select == 'Cooperate') totalCooperate += 1;
                if (this.p1r1select == 'Betray') totalBetray += 1;
                if (this.p1r2select == 'Betray') totalBetray += 1;
                this.p1r3select = p1select;
                if (p1select == 'Cooperate') {
                    if (totalCooperate > totalBetray) {
                        this.p2r3select = 'Cooperate';
                        this.p1r3score = 3;
                        this.p2r3score = 3;
                    } else {
                        this.p2r3select = 'Betray';
                        this.p1r3score = 0;
                        this.p2r3score = 5;
                    }
                } else if (p1select == 'Betray') {
                    if (totalCooperate > totalBetray) {
                        this.p2r3select = 'Cooperate';
                        this.p1r3score = 5;
                        this.p2r3score = 0;
                    } else {
                        this.p2r3select = 'Betray';
                        this.p1r3score = 1;
                        this.p2r3score = 1;
                    }
                }
                this.p1totalscore += this.p1r3score;
                this.p2totalscore += this.p2r3score;  
            }
            else if (round == 4) {
                if (this.p1r1select == 'Cooperate') totalCooperate += 1;
                if (this.p1r2select == 'Cooperate') totalCooperate += 1;
                if (this.p1r3select == 'Cooperate') totalCooperate += 1;
                if (this.p1r1select == 'Betray') totalBetray += 1;
                if (this.p1r2select == 'Betray') totalBetray += 1;
                if (this.p1r3select == 'Betray') totalBetray += 1;
                this.p1r4select = p1select;
                if (p1select == 'Cooperate') {
                    if (totalCooperate > totalBetray) {
                        this.p2r4select = 'Cooperate';
                        this.p1r4score = 3;
                        this.p2r4score = 3;
                    } else {
                        this.p2r4select = 'Betray';
                        this.p1r4score = 0;
                        this.p2r4score = 5;
                    }
                } else if (p1select == 'Betray') {
                    if (totalCooperate > totalBetray) {
                        this.p2r4select = 'Cooperate';
                        this.p1r4score = 5;
                        this.p2r4score = 0;
                    } else {
                        this.p2r4select = 'Betray';
                        this.p1r4score = 1;
                        this.p2r4score = 1;
                    }
                }
                this.p1totalscore += this.p1r4score;
                this.p2totalscore += this.p2r4score;  
            }
            else if (round == 5) {
                if (this.p1r1select == 'Cooperate') totalCooperate += 1;
                if (this.p1r2select == 'Cooperate') totalCooperate += 1;
                if (this.p1r3select == 'Cooperate') totalCooperate += 1;
                if (this.p1r4select == 'Cooperate') totalCooperate += 1;
                if (this.p1r1select == 'Betray') totalBetray += 1;
                if (this.p1r2select == 'Betray') totalBetray += 1;
                if (this.p1r3select == 'Betray') totalBetray += 1;
                if (this.p1r4select == 'Betray') totalBetray += 1;
                this.p1r5select = p1select;
                if (p1select == 'Cooperate') {
                    if (totalCooperate > totalBetray) {
                        this.p2r5select = 'Cooperate';
                        this.p1r5score = 3;
                        this.p2r5score = 3;
                    } else {
                        this.p2r5select = 'Betray';
                        this.p1r5score = 0;
                        this.p2r5score = 5;
                    }
                } else if (p1select == 'Betray') {
                    if (totalCooperate > totalBetray) {
                        this.p2r5select = 'Cooperate';
                        this.p1r5score = 5;
                        this.p2r5score = 0;
                    } else {
                        this.p2r5select = 'Betray';
                        this.p1r5score = 1;
                        this.p2r5score = 1;
                    }
                }
                this.p1totalscore += this.p1r5score;
                this.p2totalscore += this.p2r5score;  
            }
        }
    }

    /*****************************************************
     * Description: performs the Always Cooperate strategy 
     * Input: play to evaluate
     * Output: none
     * Version: 2.0
     *****************************************************/
    playAlwaysCooperate(p1PlaySelected) {
        if (this.p1Plays.length > this.totalRounds) return;

        this.p1Plays.push(p1PlaySelected);  // push player's selected play
        this.p2Plays.push('Cooperate');     // push this strategy's play (always cooperate)

        this.p1Scores.push(this.getScore(this.p1Plays[this.round], this.p2Plays[this.round]));
        this.p2Scores.push(this.getScore(this.p2Plays[this.round], this.p1Plays[this.round]));
    }

    /*****************************************************
     * Description: performs the Always Betray strategy 
     * Input: play to evaluate
     * Output: none
     * Version: 2.0
     *****************************************************/
    playAlwaysBetray(p1PlaySelected) {
        if (this.p1Plays.length > this.totalRounds) return;

        this.p1Plays.push(p1PlaySelected);  // push player's selected play
        this.p2Plays.push('Betray');        // push this strategy's play (always defect)

        this.p1Scores.push(this.getScore(this.p1Plays[this.round], this.p2Plays[this.round]));
        this.p2Scores.push(this.getScore(this.p2Plays[this.round], this.p1Plays[this.round]));
    }
    
    /*****************************************************
     * Description: performs the Tit-4-Tat strategy 
     * Input: play to evaluate
     * Output: none
     * Version: 2.0
     *****************************************************/    
    playTit4Tat(p1PlaySelected) {
        if (this.p1Plays.length > this.totalRounds) return;

        this.p1Plays.push(p1PlaySelected);  // push player's selected play
        if (this.p2Plays.length == 0) this.p2Plays.push('Cooperate');   // start with cooperate
        else {
            this.p2Plays.push(this.p1Plays[this.round-1]);  // if betray, selct the player's past play
        }

        this.p1Scores.push(this.getScore(this.p1Plays[this.round], this.p2Plays[this.round]));
        this.p2Scores.push(this.getScore(this.p2Plays[this.round], this.p1Plays[this.round]));
    }

    /*****************************************************
     * Description: performs the Grudger strategy 
     * Input: play to evaluate
     * Output: none
     * Version: 2.0
     *****************************************************/    
    playGrudger(p1PlaySelected) {
        if (this.p1Plays.length > this.totalRounds) return;

        if (this.p2Plays.length == 0) this.p2Plays.push('Cooperate');
        else {
            let betrayFlag = false;
            for (let i=0; i<this.p1Plays.length; i++) {
                if (this.p1Plays[i] == 'Betray') betrayFlag = true;
            }
            if (betrayFlag == true) this.p2Plays.push('Betray');
            else this.p2Plays.push('Cooperate');
        }
        this.p1Plays.push(p1PlaySelected);

        this.p1Scores.push(this.getScore(this.p1Plays[this.round], this.p2Plays[this.round]));
        this.p2Scores.push(this.getScore(this.p2Plays[this.round], this.p1Plays[this.round]));
    }

    /*****************************************************
     * Description: performs the Hard Majority strategy 
     * Input: play to evaluate
     * Output: none
     * Version: 2.0
     *****************************************************/       
    playHardMajority(p1PlaySelected) {
        if (this.p1Plays.length > this.totalRounds) return;
        let totalBetray =0, totalCooperate = 0;

        if (this.p2Plays.length == 0) this.p2Plays.push('Betray');
        else {
            for (let i=0; i<this.p1Plays.length; i++) {
                if (this.p1Plays[i] == 'Cooperate') totalCooperate++;
                else totalBetray++;
            }

            if (totalBetray >= totalCooperate) this.p2Plays.push('Betray');
            else this.p2Plays.push('Cooperate');
        }        
        this.p1Plays.push(p1PlaySelected);

        this.p1Scores.push(this.getScore(this.p1Plays[this.round], this.p2Plays[this.round]));
        this.p2Scores.push(this.getScore(this.p2Plays[this.round], this.p1Plays[this.round]));
    }

    /*****************************************************
     * Description: runs a multi-player simulation 
     * Input: strategy to simulate
     * Output: none
     * Version: 2.0
     *****************************************************/    
    simulateMultiplayerGame(strategy) {
        this.p2strategy = 'Always Cooperate';
        this.p3strategy = 'Always Betray';
        this.p4strategy = 'Tit4Tat';
        this.p5strategy = 'Grudger';
        this.p6strategy = 'Hard Majority';

        if (strategy == 'Always Cooperate') {
            for (let i=0; i<6; i++) {
                this.p1Plays == 
                playAlwaysCooperate('Cooperate')
            }
        }
    }

    /*****************************************************
     * Description: calculate game score
     * Input: play 1, play 2
     * Output: score (int)
     * Version: 2.0
     *****************************************************/        
    getScore(turn1, turn2) {
        let score = 0;
        if (turn1 == 'Cooperate' && turn2 == 'Cooperate') score = 3;
        else if (turn1 == 'Cooperate' && turn2 == 'Betray') score = 0;
        else if (turn1 == 'Betray' && turn2 == 'Cooperate') score = 5;
        else if (turn1 == 'Betray' && turn2 == 'Betray') score = 1;

        return score;
    }

    /*****************************************************
     * Description: calculate total score for player 1
     * Input: 
     * Output: total score (int)
     * Version: 2.0
     *****************************************************/       
    getP1TotalScore() {
        let score = 0;
        for (let i=0; i<this.p1Scores.length; i++) {
            score += this.p1Scores[i];
        }
        return score;
    }

    /*****************************************************
     * Description: calculate total score for player 2
     * Input: 
     * Output: total score (int)
     * Version: 2.0
     *****************************************************/          
    getP2TotalScore() {
        let score = 0;
        for (let i=0; i<this.p2Scores.length; i++) {
            score += this.p2Scores[i];
        }
        return score;
    }

    /*****************************************************
     * Description: produce a game summary description
     * Input: 
     * Output: game summary
     * Version: 2.0
     *****************************************************/          
    getGameSummary() {
        let summary = '';
        if (this.round >= 5 ) {
            let p1totalscore =0 , p2totalscore = 0;
            p1totalscore = this.getP1TotalScore();
            p2totalscore = this.getP2TotalScore();
            if (p1totalscore > p2totalscore) summary = 'Your WON! '
            if (p1totalscore == p2totalscore) summary = 'You TIED! '
            if (p1totalscore < p2totalscore) summary = 'You LOST! '
            
            summary += 'Your opponent was using the <b>' + this.p2strategy + '</b> strategy';
            summary += '<br>Select Restart Game to play against another opponent';
        }
        return summary;
    }
}

module.exports = Game;