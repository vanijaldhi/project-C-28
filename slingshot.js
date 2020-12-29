class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    // attach(body){
    //     this.sling.bodyA = body;
    // }
    
    // fly(){
    //     this.sling.bodyA = null;
    // }

    display(){
       // rectangle(200,20,20,20);
      //  recatngle(170,20,20,20);
        //if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            console.log(pointA)
            stroke(48,22,8);
           
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop();
        //}
    }
    
}