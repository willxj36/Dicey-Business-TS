var Die = /** @class */ (function () {
    function Die() {
        $('#dice-container').append("<div class=\"dice border border-3 border-dark rounded-3 m-3\" id=\"" + counter + "\"></div>");
        this.div = $("#" + counter);
        this.value = this.roll();
        this.div.click(function () {
            dice[counter - 1].value = dice[counter - 1].roll();
        });
        this.div.dblclick(function () {
            $(this).remove();
            dice.splice(counter - 1, 1);
        });
    }
    ;
    Die.prototype.roll = function () {
        var value = Math.floor(Math.random() * 6) + 1;
        this.div.text(value);
        return value;
    };
    return Die;
}());
var value;
var counter = 0;
var dice = [];
$('#generate').click(function () {
    counter++;
    var newDie = new Die;
    dice.push(newDie);
});
$('#roll').click(function () {
    dice.forEach(function (i) {
        i.value = i.roll();
    });
    console.log(dice);
});
$('#sum').click(function () {
    $('#sumbox').empty();
    var valueArr = dice.map(function (i) { return i.value; });
    var sum = valueArr.reduce(function (a, b) { return a + b; });
    $('#sumbox').text(sum);
});
