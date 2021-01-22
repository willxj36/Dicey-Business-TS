class Die {
    constructor() {
        $('#dice-container').append(`<div class="dice border border-3 border-dark rounded-3 m-3" id="${counter}"></div>`);
        this.div = $(`#${counter}`);
        this.value = this.roll();
        this.div.click(function() { //roll only die clicked on
            dice[this.id - 1].value = dice[this.id - 1].roll();
        })
        this.div.dblclick(function(e) { //delete die double clicked
            $(this).remove();
            dice.splice(this.id - 1, 1);
        })
    };

    roll() {
        let value = Math.floor(Math.random() * 6) + 1;
        this.div.text(value);
        return value;
    }
}

let value;
let counter = 0;
let dice = [];

$('#generate').click(function() {
    counter++;
    let newDie = new Die;
    dice.push(newDie);
});

$('#roll').click(function() {
    dice.forEach(function(i) {
        i.value = i.roll();
    });
    console.log(dice);
});

$('#sum').click(function() {
    $('#sumbox').empty();
    let valueArr = dice.map(i => i.value);
    let sum = valueArr.reduce((a, b) => a + b);
    $('#sumbox').text(sum);
});