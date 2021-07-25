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

function shiftElement() {
    let array = ['js', 'css', 'jq'];
    return array.shift();
}

// Задача №6 из второго блока заданий

function popElement() {
    let array = ['js', 'css', 'jq'];
    return array.pop();
}

// Задача №7,8 из второго блока заданий

function getSliceArray() {
    let initialArray = [1,2,3,4,5];
    return [ initialArray.slice(0,3), initialArray.slice(3)];
}

// Задачи №9,10,11,12 из второго блока заданий

function getSpliceArray() {
    let initialArray = [1,2,3,4,5];

    let task9 = initialArray.slice();
    task9.splice(1,2);

    let task10 = initialArray.slice().splice(1,3);

    let task11 = initialArray.slice();
    task11.splice(3, 0, 'a', 'b', 'c');

    let task12 = initialArray.slice();
    task12.splice(1, 0, 'a', 'b');
    task12.splice(6, 0, 'c');
    task12.splice(8, 0, 'e');

    return [ task9, task10, task11, task12 ];
}

// Задача №13 из второго блока заданий

function getSortArray() {
    return [3,4,1,2,7].sort( function(a,b) {
        return a-b;
    });
}

// Задача №14 из второго блока заданий

function getObjectKeys() {
    return Object.keys( {js:'test', jq: 'hello', css: 'world'} );
}