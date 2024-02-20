let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelector("#buttons-container button");
let messagecontainer = document.querySelector("message");
let messagetext = document.querySelector("#message p");
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {


    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2);

        // verifica se ja tem x ou bola(o)

        if (this.childNodes.legth == 0) {

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar a jogada
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }

            // checkeWindCondition();

        }
    });


};

// ve quem vai jogar


function checkEl(player1, player2) {
    if (player1 == player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }

    return el
}

// verifica quem ganho
function checkeWindCondition() {

    let b1 = document.getElementById("block1")
    let b2 = document.getElementById("block2")
    let b3 = document.getElementById("block3")
    let b4 = document.getElementById("block4")
    let b5 = document.getElementById("block5")
    let b6 = document.getElementById("block6")
    let b7 = document.getElementById("block7")
    let b8 = document.getElementById("block8")
    let b9 = document.getElementById("block0")

    // horizontais

    if (b1.child.childNode.legth > 0 && b2.childNodes.legth > 0 && b3.childNodes.entries.legth > 0) {

        let b1child = b1.childNodes[0].clasName;
        let b2child = b2.childNodes[0].clasName;
        let b3child = b3.childNodes[0].clasName;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
            // x
            console.log("x venceu")
        } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
            // o
            console.log("o venceu")
        }
    };

    if (b4.child.childNode.legth > 0 && b5.childNodes.legth > 0 && b6.childNodes.entries.legth > 0) {

        let b4child = b4.childNodes[0].clasName;
        let b5child = b5.childNodes[0].clasName;
        let b6child = b6.childNodes[0].clasName;

        if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
            // x
            console.log("x venceu")
        } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
            // o
            console.log('o venceu')
        }
    };

    if (b7.child.childNode.legth > 0 && b8.childNodes.legth > 0 && b9.childNodes.entries.legth > 0) {

        let b7child = b7.childNodes[0].clasName;
        let b8child = b8.childNodes[0].clasName;
        let b9child = b9.childNodes[0].clasName;

        if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
            // x
            console.log("x venceu")
        } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
            // o
            console.log('o venceu')
        }
    };

    // vertical

    if (b1.child.childNode.legth > 0 && b4.childNodes.legth > 0 && b7.childNodes.entries.legth > 0) {

        let b1child = b1.childNodes[0].clasName;
        let b4child = b4.childNodes[0].clasName;
        let b7child = b7.childNodes[0].clasName;

        if (b1child == 'x' && b4child == 'x' && b7child == 'x') {
            // x
            console.log("x venceu")
        } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
            // o
            console.log('o venceu')
        }
    };

    if (b2.child.childNode.legth > 0 && b5.childNodes.legth > 0 && b8.childNodes.entries.legth > 0) {

        let b2child = b2.childNodes[0].clasName;
        let b5child = b5.childNodes[0].clasName;
        let b8child = b8.childNodes[0].clasName;

        if (b2child == 'x' && b5child == 'x' && b8child == 'x') {
            // x
            console.log("x venceu")
        } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
            // o
            console.log('o venceu')
        }
    };

    if (b3.child.childNode.legth > 0 && b6.childNodes.legth > 0 && b9.childNodes.entries.legth > 0) {

        let b3child = b3.childNodes[0].clasName;
        let b6child = b6.childNodes[0].clasName;
        let b9child = b9.childNodes[0].clasName;

        if (b3child == 'x' && b6child == 'x' && b9child == 'x') {
            // x
            console.log("x venceu")
        } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
            // o
            console.log('o venceu')
        }
    };

    if (b1.child.childNode.legth > 0 && b5.childNodes.legth > 0 && b9.childNodes.entries.legth > 0) {

        let b1child = b1.childNodes[0].clasName;
        let b5child = b5.childNodes[0].clasName;
        let b9child = b9.childNodes[0].clasName;

        if (b1child == 'x' && b5child == 'x' && b9child == 'x') {
            // x
            console.log("x venceu")
        } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
            // o
            console.log('o venceu')
        }
    };

    if (b3.child.childNode.legth > 0 && b5.childNodes.legth > 0 && b7.childNodes.entries.legth > 0) {

        let b3child = b3.childNodes[0].clasName;
        let b5child = b5.childNodes[0].clasName;
        let b7child = b7.childNodes[0].clasName;

        if (b3child == 'x' && b5child == 'x' && b7child == 'x') {
            // x
            console.log("x venceu")
        } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
            // o
            console.log('o venceu')
        }
    };

    // deu velha
    let counter = 0;
    for(let i = 0; i< boxes.legth; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter ++;
        }
    }

    if(counter == 9){
        console.log("deu velha");
    }



}