class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          'debug':true,
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipse(0,0,this.radius);
      pop(); 
    }
  };