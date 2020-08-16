window.onload = start;

export function start() {
    const columnA = document.getElementById("A");
    console.log(columnA.firstElementChild);
    columnA.firstElementChild.appendChild(createPiece("Black Rook", "https://upload.wikimedia.org/wikipedia/commons/f/fe/Chess_piece_-_White_rook.JPG"));
    columnA.lastElementChild.appendChild(createPiece("White Rook", ""));

    const columnB = document.getElementById("B");
    columnB.firstElementChild.appendChild(createPiece("Black Knight", ""));
    columnB.lastElementChild.appendChild(createPiece("White Knight", ""));

    const columnC = document.getElementById("C");
    columnC.firstElementChild.appendChild(createPiece("Black Bishop", ""));
    columnC.lastElementChild.appendChild(createPiece("White Bishop", ""));

    const columnD = document.getElementById("D");
    columnD.firstElementChild.appendChild(createPiece("Black King", ""));
    columnD.lastElementChild.appendChild(createPiece("White King", ""));

    const columnE = document.getElementById("E");
    columnE.firstElementChild.appendChild(createPiece("Black Queen", ""));
    columnE.lastElementChild.appendChild(createPiece("White Queen", ""));

    const columnF = document.getElementById("F");
    columnF.firstElementChild.appendChild(createPiece("Black Bishop", ""));
    columnF.lastElementChild.appendChild(createPiece("White Bishop", ""));

    const columnG = document.getElementById("G");
    columnG.firstElementChild.appendChild(createPiece("Black Knight", ""));
    columnG.lastElementChild.appendChild(createPiece("White Knight", ""));

    const columnH = document.getElementById("H");
    columnH.firstElementChild.appendChild(createPiece("Black Rook", ""));
    columnH.lastElementChild.appendChild(createPiece("White Rook", ""));

    Array.from(document.getElementsByClassName("column")).reduce(function(acc, col, i) {
        col.children[6].appendChild(createPiece("White Pawn"));
        col.children[1].appendChild(createPiece("Black Pawn"));
    });
}

function createPiece(name, imagePath) {
    const piece = document.createElement("div");
    piece.className = name;
    piece.style.background = "none";
    const image = document.createElement("img");
    image.width = 100;
    image.height = 100;
    image.src = imagePath;

    piece.appendChild(image);

    return piece;
}