class Ground {
    constructor(x, y, w, h) {
      // save the position and size of the ground
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      var options = {
        isStatic: true
      }
      
      this.body = Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.body);
    }
  
    display() {
      // draw the ground
      rect(this.x, this.y, this.w, this.h);
      var groundPos = this.body.position;
      push();
      translate(groundPos.x, groundPos.y);
      rectMode(CENTER);
      strokeWeight(4)
      fill(255,255,0)
      rect(0, 0, this.w, this.h)
      pop();
  
    }
  }