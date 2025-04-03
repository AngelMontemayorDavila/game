import Vector from "@/vector.js";


export default class Box {
    constructor(x, y, width, height, color) {
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocity = new Vector(0, 0);
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    move(dx, dy) {
        this.position = this.position.add(new Vector(dx, dy));
    }

    update(deltaTime, canvas) {
        this.move(this.velocity.x * deltaTime, this.velocity.y * deltaTime);

        if (this.position.x < 0 || this.position.x + this.width > canvas.width) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.position.y < 0 || this.position.y + this.height > canvas.height) {
            this.velocity.y = -this.velocity.y;
        }
    }
}
