class Polygon {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.2

        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.trajectory = [];
        this.image = loadImage("polygon.png");

        World.add(world, this.body);



    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        ellipseMode(RADIUS);
        rotate(angle);
        translate(pos.x, pos.y);
        fill(0);
        stroke(255);


        strokeWeight(1);
        ellipse(0, 0, this.r, this.r);

        pop();

        if (this.body.velocity.x > 10 && this.body.position.x > 200) {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);

        }
        for (var i = 0; i < this.trajectory.length; i++) {
            image(this.polygon_img, this.trajectory[i][0], this.trajectory[i][1]);


        }




    }


}