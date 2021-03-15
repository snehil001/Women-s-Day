//variables for initial photo display
let sound;
let images=[];
let started=false;
let index=0;


//variables for text display
let myFont;
let r, g, b;
let mkb1=0, mkb2=0, mkb3=0;
let tsize=0;
let ltsize=0;
let imgw;


//varibles for fireworks
let fireworks=[];
let gravity;


//variables for html audio
let playing=false;
let aud=document.getElementById("myaud");




function preload(){
	images[0] = loadImage('images/Amrit_Kaur.jpg');
	images[1] = loadImage('images/Babita_Kumari.jpg');
	images[2] = loadImage('images/Gaura_Devi.jpg');
	images[3] = loadImage('images/Geeta_Phogat.png');
	images[4] = loadImage('images/Indira_Gandhi.jpg');
	images[5] = loadImage('images/Jhansi_Ki_Rani.jpg');
	images[6] = loadImage('images/Kalpana_Chawla.jpg');
	images[7] = loadImage('images/Lata_Mangeshkar.jpg');
	images[8] = loadImage('images/Mary_Kom.jpg');
	images[9] = loadImage('images/Medha_Patkar.jpg');
	images[10] = loadImage('images/Mother_Teresa.jpg');
	images[11] = loadImage('images/PT_Usha.jpg');
	images[12] = loadImage('images/Saina_Nehwal.jpg');
	images[13] = loadImage('images/Saniya_Mirza.jpg');
	images[14] = loadImage('images/Sarojini_Naidu.jpg');
  myFont = loadFont('font/DancingScript.ttf');
}


function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  gravity = createVector(0, 0.2);
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
  textFont(myFont);
	textAlign(CENTER, CENTER);
  imageMode(CENTER);
  imgw=width/3;
  if(width >= 1200){
  	tsize = 60;
  	ltsize=30;
  }else if(width >= 700 && width < 1200){
  	tsize=45;
  	ltsize=15;
  }else if(width < 700){
  	tsize=25;
  	ltsize=10;
  }
  textSize(tsize);
  fill(r, g, b);
	text('Tap', width/2, height/2);
	noLoop();
	cnv.mousePressed(pressed);
}



function draw(){
	if(started){
		background(0, 25);
		if(index < images.length){
		 	background(0);
		 	image(images[index], width/2, height/2, imgw, imgw * (images[index].height/images[index].width));
		 	if(frameCount % 60 == 0){
		 	 		index++;
		 	}
		}
		else if(frameCount >= (images.length+0) * 60 && frameCount < (images.length+1) * 60){
			background(0);
		}
		else if(frameCount >= (images.length+1) * 60 && frameCount < (images.length+3) * 60){ 
		  push();
		  fill(r,g,b,mkb1+=1);
		  text('To my Mummy', width/2, height/2);
		  pop();
		}
		else if(frameCount >= (images.length+4) * 60 && frameCount < (images.length+6) * 60){
		  push();
		  fill(r,g,b,mkb2+=1);
		  text('And to all the women in this world', width/2, height/2);
		  pop();
		}
		else if(frameCount >= (images.length+9) * 60){
			if(mkb3 < 255){
				mkb3++;
			}
			push();
			fill(r, g, b, mkb3);
			textSize(tsize+ltsize);
		  text("HAPPY WOMEN'S DAY", width/2, height/2);
		  pop();
		  if(frameCount >= (images.length+12) * 60)
		  {
		    //Then Start Fireworks
			  if(random() < 0.05){
			    fireworks.push(new Firework());
			  }
			  for(let i = fireworks.length-1; i >= 0 ; i--){
			  	fireworks[i].show();
			  	fireworks[i].update();
			    if(fireworks[i].done()){
			      fireworks.splice(i, 1);
			    }
			  }
		  }
		}
	}
}



function pressed(){
	if(!started){
	  loop();
	  started = true;
	}else{
	  isLooping() ? noLoop() : loop();
	}
	if(!playing){
		aud.play();
		playing = true;
	}
	else{
		aud.pause();
		playing = false;
	}
}