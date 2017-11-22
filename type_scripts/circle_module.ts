
let myModule = {
    drawSquare: function drawSquare(length: number) { console.log("length: ", length) },
    drawCircle: function drawCircle(radius: number) { console.log("radius: ", radius) },
    drawText: function drawText(text: string) {console.log("text: ", text)},
};

let { drawText, drawSquare} = myModule;  // the keys need to match.

drawSquare(5);
drawText('using TS');

drawCircle(4); 