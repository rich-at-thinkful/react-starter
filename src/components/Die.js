var React = require('react');

require('./Die.scss');

var Die = function (props) {
    return (
        <div onClick={() => props.onRollDie(props.id)} className="Die">
            <p>
                {props.face}
            </p>
        </div>
    );
};

Die.defaultProps = {
    face: Math.floor(Math.random() * 6) + 1
}

module.exports = Die;