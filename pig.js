class Pig extends Base{
    constructor(x, y,) {
    super(x,y,50,50)
    this.image = loadImage("banana/enemy.png")
    this.visibilidade=255
    }

    display(){
    if(this.body.speed<2){
      super.display()
    }
    else{
World.remove(world,this.body)
push()
this.visibilidade = this.visibilidade-5
tint(255,this.visibilidade)
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop()
      }
    }
  };
  