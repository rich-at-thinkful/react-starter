var React = require('react');

require('./Die.scss');

var Die = function (props) {
    return (
        <div onClick={() => props.onRollDie(props.die, props.diceIndex)} className="Die">
            <p>
                {props.die.face}
            </p>
        </div>
    );
};

module.exports = Die;