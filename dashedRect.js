dashRect = function (x, y, w, h, d) {
  //draw top
  for (let i = 0; i < w; i += d * 2) {
    let end = x + i + d;
    if (end > w) {
      end = w;
    }
    line(i + x, y, end, y);
  }
  //draw right
  for (let i = 0; i < h; i += d * 2) {
    let end = i + y + d;
    if (end > h) {
      end = h;
    }
    line(w, i + y, w, end);
  }
  //draw bottom
  for (let i = 0; i < w; i += d * 2) {
    let end = i + x + d;
    if (end > w) {
      end = w;
    }
    line(i + x, h, end, h);
  }
  //draw left
  for (let i = 0; i < h; i += d * 2) {
    let end = i + x + d;
    if (end > h) {
      end = h;
    }
    line(x, i + y, x, end);
  }
}
