var React = require('react');

require('./App.scss');

var DieList = require('./DieList');
var createDie = require('../models/DieModel').createDie;

var App = React.createClass({
    getInitialState() {
        return {
            dice: []
        }
    },
    
    onAddDie() {
        var newDice = this.state.dice.slice();
        newDice.push(createDie());
        this.setState({ dice: newDice });
    },
    
    onRollDice() {
        var newDice = this.state.dice.map(function(die){
            die.roll();
            return die;
        });
        this.setState({ dice: newDice });
    },
    
    onRollDie(dieId) {
        var index;
        var die = this.state.dice.find(function(die, ind){
            if (die.id === dieId) {
                index = ind;
                return true;
            }
        });
        
        die.roll();
        
        var newDice = new Array().concat(
            this.state.dice.slice(0, index),
            die,
            this.state.dice.slice(index + 1)
        );

        this.setState({ dice: newDice });
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
                <DieList dice={this.state.dice} onRollDie={this.onRollDie} />
            </div>
        );
    }
});

module.exports = App;
