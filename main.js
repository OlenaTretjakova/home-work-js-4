

let game = startGame();


function turn(id) {
   
    userTurn(id);
    if (!checkWin('user') ) {
        return;
    }
    setTimeout(compTurn, 1000);
    if (!checkWin('computer')) {
        return;
    }

}

function userTurn(id) {


    const img = document.createElement('img');

    img.src = 'aa.svg';
    img.width = 100;
    img.height = 100;
    if (isCellFree(id)) {

        document.getElementById(id).appendChild(img);

        changCellField(id, 'user');
        console.log(game.field);
    }


    if (!checkWin('user')) {
        winerMessage('user');
    }

}


function getComputerId(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

function compTurn() {
    let num;

    while (true) {
        num = getComputerId(1, 9);

        if (isCellFree(num)) {
            const id = num.toString();
            let img = document.createElement('img');
            img.src = 'q.svg';
            img.width = 100;
            img.height = 100;
            document.getElementById(id).appendChild(img);
            changCellField(id, 'computer');
            console.log(game.field);

            if (!checkWin('computer')) {
                winerMessage('computer');
            }
            break;
        }
    }
}


function fieldInitial() {
    let array = new Array(3);
    for (let i = 0; i < 3; i++) {
        array[i] = new Array(3).fill(0);
    }
    return array;
}

function isCellFree(id) {
    let count = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (id == count) {
                return (game.field[i][j] === 0) ? true : false;
            }
            else {
                count += 1;


            }

        }
    }
    return false;

}

function changCellField(id, player) {
    let value = (player === 'user') ? 1 : 2;


    let count = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (count == id) {
                game.field[i][j] = value;
                return game.field;
            }
            else {
                count++;
            }
        }
    }
    return game.field

}

function checkWin(player) {

    let value = player === 'user' ? 1 : 2;

    for (let i = 0; i < 3; i++) {
        if (game.field[i][0] === value && game.field[i][1] === value && game.field[i][2] === value) {
            return false;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (game.field[0][j] === value && game.field[1][j] === value && game.field[2][j] === value) {
            return false;
        }
    }

    if (game.field[0][0] === value && game.field[1][1] === value && game.field[2][2] === value) {
        return false;
    }
    if (game.field[0][2] === value && game.field[1][1] === value && game.field[2][0] === value) {
        return false;
    }


    return true;
}

function winerMessage(player) {
    const message = document.createElement('h2');
    message.textContent = `${player} is winner !!!`;
    message.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    message.style.fontSize = "70px";
    message.style.color = "blueviolet";
    message.style.textAlign = "center";

    document.querySelector('body').appendChild(message);
}



function startGame() {
    return {

        field: fieldInitial(),

    };
}
