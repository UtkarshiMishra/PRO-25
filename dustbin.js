
class d{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.9,
            friction:0.5,
            density: 1.8
        }
        this.body = Bodies.rectangle(x,y,120,190,options);
        this.image = loadImage ("SPRITES/dustbingreen.png")
        this.width = 120;
        this.height = 190;
        World.add(world,this.body) 
    }

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,120,190);
        fill(255);
        //rect(0,0,120,190);
        pop();
    }
}