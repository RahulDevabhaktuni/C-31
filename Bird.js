class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage ("sprites/smoke.png")
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var birdPos = this.body.position
    super.display();
    if (this.body.velocity.x>10 && birdPos.x>200){
      var position = [birdPos.x, birdPos.y]
      this.trajectory.push(position)  
    }
    

    for(var i = 0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
