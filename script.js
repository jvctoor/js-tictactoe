
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

for(let i = 0; i < buttons.length ; i++) {

    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id");
        
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(() => {
            let tabuleiro = document.querySelector("#tabuleiro-container");
            tabuleiro.classList.remove("hide");
        }, 500);

    })

}

for(let i = 0 ; i <= boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let el = checkPlayer(player1, player2);
        if(this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            if(player1 == player2) {
                player1++;
                if(secondPlayer == "vs-ia") {
                    iaPlay();
                    player2++;
                }
            } else {
                player2++;
            }
            checkWin();
        }
    });
}


function checkPlayer(player1, player2) {
    if(player1 == player2) {
        el = x;
    } else {
        if(secondPlayer == "vs-ia"){
            el = x;
        } else {
            el = o;
        }
    }
    return el;
}

function checkWin() {
    b1 = document.getElementById("box-1");
    b2 = document.getElementById("box-2");
    b3 = document.getElementById("box-3");
    b4 = document.getElementById("box-4");
    b5 = document.getElementById("box-5");
    b6 = document.getElementById("box-6");
    b7 = document.getElementById("box-7");
    b8 = document.getElementById("box-8");
    b9 = document.getElementById("box-9");

    //vitórias horizontais
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        b1Child = b1.childNodes[0].className;
        b2Child = b2.childNodes[0].className;
        b3Child = b3.childNodes[0].className;
        if(b1Child == "x" && b2Child == "x" && b3Child == "x") {
            declareWinner("x");
        } else if(b1Child == "o" && b2Child == "o" && b3Child == "o") {
            declareWinner("o");
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        b4Child = b4.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b6Child = b6.childNodes[0].className;
        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {
            declareWinner("x");
        } else if(b4Child == "o" && b5Child == "o" && b6Child == "o") {
            declareWinner("o");
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        b7Child = b7.childNodes[0].className;
        b8Child = b8.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b7Child == "x" && b8Child == "x" && b9Child == "x") {
            declareWinner("x");
        } else if(b7Child == "o" && b8Child == "o" && b9Child == "o") {
            declareWinner("o");
        }
    }

    //verticais

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        b1Child = b1.childNodes[0].className;
        b4Child = b4.childNodes[0].className;
        b7Child = b7.childNodes[0].className;
        if(b1Child == "x" && b4Child == "x" && b7Child == "x") {
            declareWinner("x");
        } else if(b1Child == "o" && b4Child == "o" && b7Child == "o") {
            declareWinner("o");
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        b2Child = b2.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b8Child = b8.childNodes[0].className;
        if(b2Child == "x" && b5Child == "x" && b8Child == "x") {
            declareWinner("x");
        } else if(b2Child == "o" && b5Child == "o" && b8Child == "o") {
            declareWinner("o");
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        b3Child = b3.childNodes[0].className;
        b6Child = b6.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b3Child == "x" && b6Child == "x" && b9Child == "x") {
            declareWinner("x");
        } else if(b3Child == "o" && b6Child == "o" && b9Child == "o") {
            declareWinner("o");
        }
    }

    //diagonais 

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        b1Child = b1.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b1Child == "x" && b5Child == "x" && b9Child == "x") {
            declareWinner("x");
        } else if(b1Child == "o" && b5Child == "o" && b9Child == "o") {
            declareWinner("o");
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        b3Child = b3.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b7Child = b7.childNodes[0].className;
        if(b3Child == "x" && b5Child == "x" && b7Child == "x") {
            declareWinner("x");
        } else if(b3Child == "o" && b5Child == "o" && b7Child == "o") {
            declareWinner("o");
        }
    }

    //deu velha
    let cont = 0;

    for (let i = 0; i < boxes.length ; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            cont++;
        }
    }

    if(cont == 9) {
        declareWinner("deu velha");
    }

}

//limpa o jogo, declara o vencedor e atualiza o placar

function declareWinner(winner) {
    let placarX = document.querySelector("#placar-1");
    let placarO = document.querySelector("#placar-2");
    let msg = "";

    if(winner == "x") {
        placarX.textContent = parseInt(placarX.textContent) + 1;
        msg = "X venceu!";
    } else if (winner == "o") {
        placarO.textContent = parseInt(placarO.textContent) + 1;
        msg = "O venceu!";
    } else {
        msg = "Deu velha!";
    }

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    setTimeout(() => {
        messageContainer.classList.add("hide");
        

    }, 2000);

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}

function iaPlay() {
    let cloneO = o.cloneNode(true);
    cont = 0;
    filled = 0;

    for(let i = 0 ; i< boxes.length ; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                cont++;
                break;
            }
        } else {
            filled++;
        }
    }

    if(cont == 0 && filled < 9) {
        iaPlay();
    }
}
