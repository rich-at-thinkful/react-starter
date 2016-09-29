var React = require('react');
var update = require('react-addons-update');

require('./App.scss');

var DieList = require('./DieList');
var createDie = require('../models/DieModel').createDie;

var App = React.createClass({
    getInitialState() {
        return {
            dice: []
        }
    },
    
    onReset() {
        this.setState({ dice: [] });
    },
    
    onAddDie() {
        var newDice = this.state.dice.slice();
        newDice.push(createDie());
        this.setState({ dice: newDice });
    },
    
    onRollDice() {
        this.state.dice.forEach((die, index) => this.onRollDie(die, index));
    },
    
    onRollDie(die, index) {
        var loop = 0;
        var randEnd = Math.floor(Math.random() * 20) + 10;
    
        var intervalId = setInterval(() => {
            loop++;
    
            die.roll();
            var newDice = update(this.state.dice, { $splice: [[index, 1, die]] });

            this.setState({ dice: newDice });
    
            if (loop === randEnd) clearInterval(intervalId); 
        }, 90);
    },
    
    render() {
        return (
            <div className="App">
                <h3>Instructions:</h3>
                <p>
                    Add as many dice as you want, then click "Roll All Dice".<br />
                    Click an individual die to re-roll just that one.
                </p>
                <button onClick={this.onAddDie}>Add Die</button>
                <button onClick={this.onRollDice}>Roll All Dice</button>
                <button onClick={this.onReset}>RESET</button>
                <DieList dice={this.state.dice} onRollDie={this.onRollDie} />
            </div>
        );
    }
});

module.exports = App;
