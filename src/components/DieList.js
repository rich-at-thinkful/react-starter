var React = require('react');

require('./DieList.scss');

var Die = require('./Die');

var DieList = function (props) {
    return (
        <div className="DieList">
            {props.dice.map(function(die, index){
                return <Die onRollDie={props.onRollDie} diceIndex={index} key={die.id} die={die} />
            })}
        </div>
    );
};

module.exports = DieList;