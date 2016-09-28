var React = require('react');

require('./DieList.scss');

var Die = require('./Die');

var DieList = function (props) {
    return (
        <div className="DieList">
            {props.dice.map(function(die){
                return <Die key={die.id} id={die.id} face={die.face} onRollDie={props.onRollDie} />
            })}
        </div>
    );
};

module.exports = DieList;