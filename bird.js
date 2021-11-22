class Bird extends Base {
  constructor(x, y) {
    super(x,y,50,50)
    
    this.image = loadImage("banana/bird.png");
    this.imageSmoke = loadImage("banana/smoke.png");
    this.trajetoria = []
  };
  
  display(){
    super.display()
   console.log(this.body.velocity.x)
    if(this.body.position.x>210){
      var posicao = [this.body.position.x,this.body.position.y]
      this.trajetoria.push(posicao)
    }

    for (var i = 0; i < this.trajetoria.length; i++) {
      image(this.imageSmoke,this.trajetoria[i][0],this.trajetoria[i][1])
      
    }
  }


};
