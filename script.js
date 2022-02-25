
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

for(let i = 0 ; i <= boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let el = checkPlayer(player1, player2);
        if(this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            if(player1 == player2) {
                player1++;
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
        el = o;
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
            
        } else if(b1Child == "o" && b2Child == "o" && b3Child == "o") {
            
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        b4Child = b4.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b6Child = b6.childNodes[0].className;
        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {
            
        } else if(b4Child == "o" && b5Child == "o" && b6Child == "o") {
            
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        b7Child = b7.childNodes[0].className;
        b8Child = b8.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b7Child == "x" && b8Child == "x" && b9Child == "x") {
            
        } else if(b7Child == "o" && b8Child == "o" && b9Child == "o") {
            
        }
    }

    //verticais

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        b1Child = b1.childNodes[0].className;
        b4Child = b4.childNodes[0].className;
        b7Child = b7.childNodes[0].className;
        if(b1Child == "x" && b4Child == "x" && b7Child == "x") {
            
        } else if(b1Child == "o" && b4Child == "o" && b7Child == "o") {
            
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        b2Child = b2.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b8Child = b8.childNodes[0].className;
        if(b2Child == "x" && b5Child == "x" && b8Child == "x") {
            
        } else if(b2Child == "o" && b5Child == "o" && b8Child == "o") {
            
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        b3Child = b3.childNodes[0].className;
        b6Child = b6.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b3Child == "x" && b6Child == "x" && b9Child == "x") {
            
        } else if(b3Child == "o" && b6Child == "o" && b9Child == "o") {
            
        }
    }

    //diagonais 

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        b1Child = b1.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b9Child = b9.childNodes[0].className;
        if(b1Child == "x" && b5Child == "x" && b9Child == "x") {
            
        } else if(b1Child == "o" && b5Child == "o" && b9Child == "o") {
            
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        b3Child = b3.childNodes[0].className;
        b5Child = b5.childNodes[0].className;
        b7Child = b7.childNodes[0].className;
        if(b3Child == "x" && b5Child == "x" && b7Child == "x") {
            
        } else if(b3Child == "o" && b5Child == "o" && b7Child == "o") {
            
        }
    }
}

