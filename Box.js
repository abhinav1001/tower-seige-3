class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }
display(){
  
    if(this.body.speed<4){
     super.display();
    }
    else{
  push();
      this.Visibility=this.Visibility-10;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,20,height);
      pop();
      World.remove(world,this.body)
    }
    text("SCORE:"+score,750,40);
    if(this.Visibility<10){
     SCORE=SCORE+10;
    }
   /* function score(){
      box1.score();
      box2.score();
      box3.score();
      box4.score();
    }*/
    
}
};
