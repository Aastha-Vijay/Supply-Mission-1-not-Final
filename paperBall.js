class paperBall{
    constructor(x,y,diameter){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,diameter,options);
        this.diameter=diameter//I have tried using radius also instead of diameter, but still it didn't work....
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("purple");
        circle(pos.x,pos.y,this.diameter);
    }
}