class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            density:7.8,
            friction:0

        }
        this.x=x
        this.y=y
        this.r=r
        this.body= Bodies.circle(this.x, this.y,this.r,options);
        World.add(world,this.body);
       

    }
    

    display(){
        push();
        translate(this.body. position.x, this.body. position.y)
    ellipseMode(RADIUS);
    fill(254,0,255);
        ellipse(0,0, this,r. this,r);
        pop();
    }
}