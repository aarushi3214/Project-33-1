class Snow {
    constructor(x,y,r) {
      var options = {
        restitution: 0.4,
        density: 0.001
         }

      this.r = r;
      this.body = Bodies.circle(x,y,this.r,options);
      this.image= loadImage("snow4.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      this.image(this.image,this.body.position.x,this.body.position.y,50,50);     
       pop();
    }
  };
