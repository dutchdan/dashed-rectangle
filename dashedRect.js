dashRect = function (x, y, w, h, d) {
  push();
  translate(x, y);
  //draw top and bottom
  for (let i = 0; i < w; i += d * 2) {
    let end = i + d;
    if (end > w) {
      end = w;
    }
    line(i, 0, end, 0);
    line(i, h, end, h);
  }
  //draw sides
  for (let i = 0; i < h; i += d * 2) {
    let end = i + d;
    if (end > h) {
      end = h;
    }
    line(w, i, w, end);
    line(0, i, 0, end);
  }
  pop();
}