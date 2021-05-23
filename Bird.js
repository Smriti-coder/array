class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png"); 
       //this is an array
      this.smoke = []; 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
      
    //smaller array that contains x and y positions
    
    if(this.body.velocity.x > 10 && this.body.position.x > 200){

      var position = [this.body.position.x , this.body.position.y];
      
      //push makes smaller array go into bigger one
      this.smoke.push(position); 

    } 
   
//  for(var i = 0; i<end ; i++)
    //i++ = i+1 
     for( var i= 0; i<this.smoke.length ; i++ ){

          image(this.image1, this.smoke[i][0],this.smoke[i][1] )
     }
     
    super.display();
  }
}
