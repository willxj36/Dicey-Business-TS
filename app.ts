class Die {

    constructor() {
        $('#dice-container').append(`<div class="dice border border-3 border-dark rounded-3 m-3" id="${counter}"></div>`);
        this.div = $(`#${counter}`);
        this.value = this.roll();
        this.div.click(function() { //roll only die clicked on
            dice[counter - 1].value = dice[counter - 1].roll();
        })
        this.div.dblclick(function() { //delete die double clicked
            $(this).remove();
            dice.splice(counter - 1, 1);
        })
    };

    div: JQuery
    value: number

    roll() {
        let value: number = Math.floor(Math.random() * 6) + 1;
        this.div.text(value);
        return value;
    }
}

let value: number;
let counter: number = 0;
let dice: Die[] = [];

$('#generate').click(function() {
    counter++;
    let newDie: Die = new Die;
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
    let valueArr: number[] = dice.map(i => i.value);
    let sum: number = valueArr.reduce((a, b) => a + b);
    $('#sumbox').text(sum);
});