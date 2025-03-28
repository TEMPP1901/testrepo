let books = [];

function addBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookDescription = document.getElementById('bookDescription').value;
  const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber
    };
    books.push(book);
    showbooks();
    clearInputs();
  } else {
    alert('Vui lòng điền đầy đủ các trường và nhập đúng dữ liệu.');
  }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>`);
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = ''; // Xóa nội dung trường "Tên sách"
    document.getElementById('authorName').value = ''; // Xóa nội dung trường "Tên tác giả"
    document.getElementById('bookDescription').value = ''; // Xóa nội dung trường "Mô tả sách"
    document.getElementById('pagesNumber').value = ''; // Xóa nội dung trường "Số trang"
}

function deletebook(index) {
    // Xóa sách trong mảng books
    books.splice(index, 1); // Xóa 1 phần tử tại vị trí index

    // Gọi lại hàm showbooks để cập nhật danh sách sách trên giao diện
    showbooks();
}

function showbooks() {
    const booksDiv = books.map((book, index) => `
        <h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deletebook(${index})">Delete</button>
    `);
    document.getElementById('books').innerHTML = booksDiv.join('');
}