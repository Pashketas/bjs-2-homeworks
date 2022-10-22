class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else this._state = value;
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100,  type = "book") {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } 
  }

  findBookBy(type, value) {
    let book = this.books.filter(item => item[type] === value);
    return book[0] || null
  }

  giveBookByName(bookName) {
    let bookIndex = this.books.findIndex(item => item.name === bookName);
    let book = this.books[bookIndex];
    this.books.splice(bookIndex, 1);
    return book || null;
    }
}


//Задача № 3
class Student {
  constructor(name, gender, age, subjects = []){
    this.name = name;
    this.geder = gender;
    this.age = age;
    this.subjects = subjects;
  }
  
  addMark(mark, subjectName) {
    if (mark < 1 || mark > 5) {
      return console.log('Ошибка, оценка должна быть числом от 1 до 5')
    }
    let subjectIndex = this.subjects.findIndex(item => item.subjectName === subjectName)
    if (subjectIndex !== -1) {
      this.subjects[subjectIndex].marks.push(mark);
    } else {
      this.subjects.push(new Subject(subjectName));
      subjectIndex = this.subjects.length - 1;
      this.subjects[subjectIndex].marks.push(mark);
    }
  }

  getAverageBySubject(subjectName) {
    let subjectIndex = this.subjects.findIndex(item => item.subjectName === subjectName);
    if (this.subjects.some(item => item.subjectName === subjectName)) {
      let avg = this.subjects[subjectIndex].getAverage();
      return avg; //console.log(`Средний бал по предмету ${subjectName} ${avg}`);
    } else {
      return console.log('Несущуствующий предмет'); 
    }
  }

  getAverage() {
    let allSum = this.subjects.reduce((acc, item)=> acc + item.getAverage(), 0)
    return allSum / this.subjects.length; //console.log(`Средний балл по всем предметам ${(allSum / this.subjects.length)}`);
  }

  exclude(reason) {
    delete this.subjects;
    return console.log(`Исключен за ${reason}`)
  }
}


class Subject{
  constructor(subjectName, marks = []){
    this.subjectName = subjectName;
    this.marks = marks;
  }
  getAverage() {
    let sum = this.marks.reduce((acc, item)=> acc + item, 0);
    return (sum / this.marks.length);
  }
}
