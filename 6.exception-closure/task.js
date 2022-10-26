function parseCount(goodsNumber) {
  if (isNaN(Number.parseInt(goodsNumber))) {
    const error = new Error("Невалидное значение");
    throw error;
  }
  return Number.parseInt(goodsNumber);
}

function validateCount(goodsNumber) {
  try {
    parseCount(goodsNumber);
  } catch(error) {
    console.error(error);
  } finally {
    return parseCount(goodsNumber);
  }
}

class Triangle {
  constructor(a, b, c) {
    if ( a + b <= c || a + c <= b || b + c <= a){
      const error = new Error("Треугольник с такими сторонами не существует");
      throw error;
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  getPerimetr() {
    let perimetr = this.a + this.b + this.c;
    return perimetr;
  }

  getArea() {
    let p = this.getPerimetr() / 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    let trian = new Triangle(a, b, c);
    return trian;
  } catch(error) {
    console.log(error);
  } 
}

