class Stone{
  constructor(x,y,width,height){
    var options={
      restitution:0.3,
      friction:3,
      density:1
    }
      this.body=Bodies.rectangle(x, y, width, height, options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
  display(){
    var stonepos=this.body.position;		
    push()
    translate(stonepos.x, stonepos.y);
    rectMode(CENTER)
    strokeWeight(4);
    stroke("black");
    rect(0, 0, this.width, this.height);
    pop()
  }
}