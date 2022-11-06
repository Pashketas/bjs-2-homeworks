function parseCount(goodsNumber) {
  let resultParse = Number.parseInt(goodsNumber);
  if (isNaN(resultParse)) {
    throw error = new Error("Невалидное значение");
  }
  return resultParse;
}

function validateCount(goodsNumber) {
  try {
    return parseCount(goodsNumber);
  } catch(error) {
    return error;
  } 
}

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a){
      throw new Error("Треугольник с такими сторонами не существует");
    } 
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let p = this.getPerimeter() / 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
      let triangle = {
        getArea() {
          return "Ошибка! Треугольник не существует";
        } ,
        getPerimeter() { 
          return "Ошибка! Треугольник не существует";
        }, 
      } 
      return triangle;
    }
}