class Estilingue{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:10
        }
        this.pointB= pointB;
        this.cadeia = Constraint.create(options);
        this.estilingue1 = loadImage("banana/sling1.png");
        this.estilingue2 = loadImage("banana/sling2.png");
        this.estilingue3 = loadImage("banana/sling3.png");
        World.add(world,this.cadeia)
    }

    display(){
        image(this.estilingue1,200,20)
        image(this.estilingue2,170,20)
        if(this.cadeia.bodyA){
            var pointA =this.cadeia.bodyA.position
            push()
            stroke(48,22,8);

            if(pointA.x < 220){
                strokeWeight(7);
                line(pointA.x-20,pointA.y,this.pointB.x-10,this.pointB.y)
            } else{
                strokeWeight(3)
                image(this.estilingue3,pointA.x-25,pointA.y-10,15,30)
            }

            line(pointA.x-20,pointA.y,this.pointB.x-10,this.pointB.y)
            line(pointA.x-20,pointA.y,this.pointB.x+30,this.pointB.y-3)
            pop()
        }
    }

    fly(){
        this.cadeia.bodyA= null
    }
}