class Doodle{
constructor(){
    this.x = width/2;
    this.y = height - 100; 
    this.height = 90
    this.width = 65 
    this.vy = 0 
}
draw(){
    image(jackImg, this.x, this.y, this.width, this.height)
}

update(){

    this.velocityY = -5 

        if(keyDown("LEFT_ARROW")){
          this.x = this.x - 5
        }
        if(keyDown("RIGHT_ARROW")){
            this.x = this.x + 5
          }
}

}

