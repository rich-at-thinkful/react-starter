var Die = {
    face: 1,
    nextId: 1,
    
    roll() {
        this.face = Math.floor(Math.random() * 6) + 1
    }
};

var createDie = function () {
    var die = Object.create(Die);
    die.id = Die.nextId;
    Die.nextId++;
    die.roll();
    return die;
};

exports.Die = Die;
exports.createDie = createDie;

