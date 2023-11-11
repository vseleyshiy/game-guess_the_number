let input = document.getElementById('input');
let btn = document.getElementById('btn');
let result = document.getElementById('result');

let numbersLength = [
    {
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    }
];

let correctNum = 0; //правильное число
let currentNum = 0; //счетчик правильных ответов

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random(i) * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

let shuffleNumber = shuffleArray(numbersLength[0].numbers);

function correctResult() {
    currentNum++
    if (input.value === shuffleNumber[0]) {
        result.innerHTML = 'Поздравляю! Ты угадал число ' + shuffleNumber[0] + ' за ' + currentNum + ' попыток!';
    };
};
