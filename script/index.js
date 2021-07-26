// Задача №1 из первого блока заданий

function getMinNumber() {
    let answer;

    for(let i = 0; i < arguments.length; i++) {
        if ( i === 0) {
            answer = arguments[i];
        }

        if( answer > arguments[i] ) {
            answer = arguments[i];
        }
    }

    return answer;
}

function getMaxNumber() {
    let answer;

    for(let i = 0; i < arguments.length; i++) {
        if ( i === 0) {
            answer = arguments[i];
        }

        if( answer < arguments[i] ) {
            answer = arguments[i];
        }
    }

    return answer;
}

// Задача №2 из первого блока заданий

function getAverage(arr) {
    return arr.reduce( function (sum, current) {
        return sum+current;
    }, 0) / arr.length;
}

// Задача №3 из первого блока заданий

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задача №4 из первого блока заданий

function randomArray() {
    let array = [];

    for (let i = 0; i < 10; i++) {
        array[i] = getRandomNumber(1, 100);
    }

    return array;
}

// Задача №1 из второго блока заданий

function getConcatArray(array1, array2) {
    return array1.concat(array2);
}

// Задача №2 из второго блока заданий

function gerReversedArray(array) {
    return array.slice().reverse();
}

// Задача №3 из второго блока заданий

function pushElements() {
    let array = [1,2,3];
    array.push(4,5,6);
    return array;
}

// Задача №4 из второго блока заданий

function unshiftElements() {
    let array = [1,2,3];
    array.unshift(4,5,6);
    return array;
}

// Задача №5 из второго блока заданий

function shiftElement(array) {
    return array.shift();
}

// Задача №6 из второго блока заданий

function popElement(array) {
    return array.pop();
}

// Задача №7,8 из второго блока заданий

function getSliceArray(array) {
    return [ array.slice(0,3), array.slice(3)];
}

// Задачи №9,10,11,12 из второго блока заданий

function getSpliceArray(array) {

    let task9 = array.slice();
    task9.splice(1,2);

    let task10 = array.slice().splice(1,3);

    let task11 = array.slice();
    task11.splice(3, 0, 'a', 'b', 'c');

    let task12 = array.slice();
    task12.splice(1, 0, 'a', 'b');
    task12.splice(6, 0, 'c');
    task12.splice(8, 0, 'e');

    return [ task9, task10, task11, task12 ];
}

// Задача №13 из второго блока заданий

function getSortArray(array) {
    return array.sort( function(a,b) {
        return a-b;
    });
}

// Задача №14 из второго блока заданий

function getObjectKeys(object) {
    return Object.keys( object );
}