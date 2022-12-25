/**
 * Doesn't have access to type after compile
 */

/*
interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        // ~~~~~~~~~ 'Rectangle' only refers to a type,
        // but is being used as a value here
        return shape.width * shape.height;
        // ~~~~~~ Property 'height' does not exist
        // on type 'Shape'
    } else {
        return shape.width * shape.width;
    }
}
*/

/**
 * Access to type after compile
 */

/*interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if ('height' in shape) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    } else {
        shape; // Type is Square
        return shape.width * shape.width;
    }
}*/

/**
 * Example with tagged union
 */

/*interface Square {
    kind: 'square';
    width: number;
}
interface Rectangle {
    kind: 'rectangle';
    height: number;
    width: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape.kind === 'rectangle') {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    } else {
        shape; // Type is Square
        return shape.width * shape.width;
    }
}*/


/**
 * Example with classes
 */

class Square {
    constructor(
        public width: number
    ) {}
}
class Rectangle extends Square {
    constructor(
        public width: number,
        public height: number
    ) {
    super(width);
}
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    } else {
        shape; // Type is Square
        return shape.width * shape.width; // OK
    }
}
