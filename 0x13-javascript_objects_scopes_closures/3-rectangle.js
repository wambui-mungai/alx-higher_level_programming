#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let a = '';
      for (let j = 0; j < this.width; j++) {
        a += 'X';
      }
      console.log(a);
    }
  }
}
