class Particle{
	
  constructor(x, y, red, green, blue, isFirework, tukraVel){
    this.pos = createVector(x, y);
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.isFirework = isFirework;
    this.lifespan = 255;
    let fv = -sqrt(2*gravity.y*height);
    let hv = -sqrt(2*gravity.y*height/3);
    if(this.isFirework)
    { 
      this.vel = createVector(random(-2, 2), random(hv, fv));
    }
    else
    {
      if(tukraVel != null){
        this.vel = tukraVel;
      }else{
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(sqrt(2*gravity.y*width)));
      }
    }
    this.acc = createVector(0, 0);
	}
  
  applyForce(force){
  	this.acc.add(force);
  }
	
	update(){
	  if(!this.isFirework){
      this.vel.mult(0.9);
      this.lifespan -= 7;
	  }
		this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
	}

  show(){
  	if(!this.isFirework){
  		strokeWeight(2);
      stroke(this.red, this.green, this.blue, this.lifespan);
	  }
	  else{
	  	strokeWeight(5);
	  	stroke(this.red, this.green, this.blue);
	  }
  	point(this.pos.x, this.pos.y);
  }

  done(){
    if(this.lifespan < 0){
      return true;
    }
    return false;
  }

}