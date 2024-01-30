const textures = [];


function preload() {
    for(let textureNumber = 1; textureNumber <= 4; textureNumber++){
        //get the path of the current texture
        const pathToTexture = 'Textures/texture-trans' + textureNumber + '.png';
        //load the images using the loadImage p5.js function and add it to the texture list
        textures.push(loadImage(pathToTexture));
    }
}

function setup() {

    //size of each square
    const squareSize = 50;
    //number of cells of the grid
    const cellNumber = 10;
    //canvas size in pixels
    const canvasSize = squareSize * cellNumber;
    //maximum offset
    const maxOffsetPosition = 5;
    const maxOffsetSize = 10;

    // noStroke(0);
    createCanvas(canvasSize, canvasSize);
    background(220);

    for(let row=0; row < cellNumber; row++) {
        for(let column=0; column < cellNumber; column++) {
            const red = random(225);
            const blue = random(225);
            const green = random(225);

            const myColor = color(red, green, blue);
            //get a random texture
            const texture = random(textures);

            //use fill to fill all the squares with one color
            // fill(myColor)

            //tint the square
            tint(myColor);

            //calculate a random offset
            const randomOffsetHorizontal = random(-maxOffsetPosition, maxOffsetPosition);
            const randomOffsetVerticle = random(-maxOffsetPosition, maxOffsetPosition);
            

            //calculate horizontal and vertical position in pixels
            const x = row * squareSize + randomOffsetHorizontal;
            const y = column * squareSize + randomOffsetVerticle;

            const randomOffsetWidth = random(-maxOffsetSize, maxOffsetSize)
            const randomOffsetHeight = random(-maxOffsetSize, maxOffsetSize)

            //set/calculate width and height
            const width = squareSize + randomOffsetWidth;
            const height = squareSize + randomOffsetHeight;

            //image(background, x position, y position, width, height)
            //will draw an image the given background at the given position and width / height
            image(texture, x, y, width, height)
            
            //square (x,y,s)
            //x = position of the left of the square
            //y = position of the top of the square
            //s = size of the side of the square
            // square(x, y, squareSize)
        }
    }
}

