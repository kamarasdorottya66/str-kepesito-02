const bookList = [
    { title: 'Don Quixote', isRead: true, author: 'Miguel de Cervantes' },
    { title: 'Lord of the Rings', isRead: false, author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerers Stone', isRead: true, author: ' J.K. Rowling' },
    { title: 'And Then There Were None', isRead: true, author: 'Agatha Christie' },
    { title: 'Alices Adventures in Wonderland', isRead: false, author: 'Lewis Carroll' },
    { title: 'The Lion, the Witch, and the Wardrobe', isRead: true, author: 'C.S. Lewis' },
    { title: 'Love in the Time of Cholera', isRead: true, author: 'Gabriel García Márquez' },
]

function listMyBooks(bookList) {

configStyle();

  const ulEl = document.querySelector('#container');
  bookList.forEach(book=>{
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    
    if(book.isRead == true){
        liEl.innerHTML = '<strong>Ezt a könyvet már olvastad:</strong>' + ' ' +book.title
    }
    else
      liEl.innerHTML = `${book.title}`;
  })
}

function configStyle() {

  const sectionElement = document.querySelector('section');
  sectionElement.style.border = "3px solid red";

  const divEl = document.querySelector('div');
  divEl.style.display = "flex";
  divEl.style.justifyContent = "center";

  const pEl = document.querySelector('p');
  pEl.style.textAlign = "center";
  pEl.style.color = "red";
}

export { listMyBooks, configStyle };