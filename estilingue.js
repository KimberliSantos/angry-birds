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
        World.add(world,this.cadeia)
    }

    display(){

        if(this.cadeia.bodyA){
            strokeWeight(3);
            line(this.cadeia.bodyA.position.x,this.cadeia.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
        
    }
    fly(){
        this.cadeia.bodyA= null
    }
}