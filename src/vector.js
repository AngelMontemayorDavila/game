export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    sub(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    times(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    toString() {
        return `${this.x}, ${this.y}`;
    }
}