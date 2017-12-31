import React, { Component } from 'react';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



class Bottompair extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bet: '---',
            checkCount: 0,
            betCount: 0
        };

        this.randomize = this.randomize.bind(this);
        this.reset = this.reset.bind(this);
    }

    randomize(e) {
        const randomInt = getRandomInt(1,100);
        const betOrCheck = randomInt >= 10 ? 'Check' : 'Bet';
        this.setState({
          bet: betOrCheck
        });
    }

    reset(e){
        this.setState({bet: '---'});
    }


    render(){
        return(
            <div className="mixMain">
                <p> Bet middle and bottom pair 10% of the time </p>
                <p>{this.state.bet}</p>
                <button onClick={this.randomize}>10%</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}


export default Bottompair;