class Firework{
	
	constructor(){
		this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    this.f = new Particle(random(width), height, this.red, this.green, this.blue, true, null);
    this.hasExploded = false;
    this.particles = [];
	}
	
	show(){
		if(!this.hasExploded){
		  this.f.show();
	  }
	  for(let j = 0; j < this.particles.length; j++){
      this.particles[j].show();
	  }
	}

	update(){
    if(!this.hasExploded){
	    this.f.applyForce(gravity);
      this.f.update();  
	    if(this.f.vel.y >= 0){
	      this.hasExploded = true;
	      this.explode();
	    }
    }
    for(let j = this.particles.length-1; j >= 0 ; j--){
      this.particles[j].applyForce(gravity);
      this.particles[j].update();
      if(this.particles[j].done()){
      	this.particles.splice(j, 1);
      }
	  }
	}

	explode(){
    let choice = random();
    if(choice < 0.5){
      for(let j = 0; j < 100; j++){
        this.particles.push(new Particle(this.f.pos.x, this.f.pos.y, this.red, this.green, this.blue, false, null));
      }
    }
    else if(choice < 0.6){
      /******** Hearts Formula ********/
      for(let angle = 0; angle < 360; angle += 1){
       let x = 16 * pow(sin(angle), 3);
        let y = 13*cos(angle) - 5*cos(2*angle) - 2*cos(3*angle) - cos(4*angle);
        let v = createVector(x, -y);
        this.particles.push(new Particle(this.f.pos.x, this.f.pos.y, this.red, this.green, this.blue, false, v));
      }
    }
    else{
      /******** Flowers Formula *******/
      let petals = random(3, 25);
      for(let f = 0; f < 360; f+=1){
        let v = createVector(15*cos(petals*f)*cos(f), 15*cos(petals*f)*sin(f));
        this.particles.push(new Particle(this.f.pos.x, this.f.pos.y, this.red, this.green, this.blue, false, v));
      }
    }
	}

	done(){
    if(this.hasExploded && this.particles.length === 0){
    	return true;
    }
		return false;
	}

}