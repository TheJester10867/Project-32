class Satellite{
    constructor(x, y, width, height){
        var sat_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, sat_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Space/satellite.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width*2, this.height*2);
    }
}