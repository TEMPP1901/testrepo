let length; // Biến chiều dài
let width;  // Biến chiều rộng

function calculateArea() { // Hàm tính diện tích
    length = parseFloat(document.getElementById('length').value); // Lấy giá trị chiều dài từ người dùng
    width = parseFloat(document.getElementById('width').value);   // Lấy giá trị chiều rộng từ người dùng
    let area = length * width; // Tính diện tích
    document.getElementById('result').innerText = `Diện tích hình chữ nhật là: ${area}`; // Hiển thị kết quả lên giao diện
}