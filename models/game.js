class Game {
    constructor() {
        let round;
        let p2strategy;

        let p1r1score, p2r1score, p1r1select, p2r1select;
        let p1r2score, p2r2score, p1r2select, p2r2select;
        let p1r3score, p2r3score, p1r3select, p2r3select;
        let p1r4score, p2r4score, p1r4select, p2r4select;
        let p1r5score, p2r5score, p1r5select, p2r5select;

        let p1totalscore, p2totalscore;

    }
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

}

module.exports = Game;