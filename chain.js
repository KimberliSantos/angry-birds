class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:10
        }

        this.cadeia = Constraint.create(options);
        World.add(world,this.cadeia)
    }

    display(){
        strokeWeight(3);
        line(this.cadeia.bodyA.position.x,this.cadeia.bodyA.position.y,this.cadeia.bodyB.position.x,this.cadeia.bodyB.position.y)
    }
}