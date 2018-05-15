dashRect = function (x, y, w, h, d) {
  //draw top and bottom
  for (let i = 0; i < w; i += d * 2) {
    let end = x + i + d;
    if (end > w) {
      end = w;
    }
    line(i + x, y, end, y);
    line(i + x, h, end, h);
  }
  //draw sides
  for (let i = 0; i < h; i += d * 2) {
    let end = i + y + d;
    if (end > h) {
      end = h;
    }
    line(w, i + y, w, end);
    line(x, i + y, x, end);
  }
}
