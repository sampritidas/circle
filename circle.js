const fs = require('fs');

class ColourCircle {
  constructor(height, width, radius, position, top, left, color) {
    this.height = height;
    this.width = width;
    this.radius = radius;
    this.position = position;
    this.radius = radius;
    this.radius = radius;
    this.color = color;
  }

  rectangle() {
    const refresh = '<meta http-equiv="refresh" content="1" />';
    return `${refresh}<div style="background-color : ${this.color};
     height : ${this.height}px;
      width : ${this.width}px;
      border-radius: 50%;
      position: absolute;
      top: 20px;
      left: 20px;"></div>`;
  }
}

const cir