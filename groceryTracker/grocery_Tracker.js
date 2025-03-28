function groceryTracker() {
  // Lấy giá trị từ các ô nhập liệu
  let grocery1 = parseFloat(document.getElementById('grocery1').value) || 0; // Giá trị mặc định 0 nếu ô nhập trống
  let grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
  let grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;

  // Tính tổng số tiền
  let total = grocery1 + grocery2 + grocery3;

  // Hiển thị kết quả
  document.getElementById('total').innerText = `Total grocery amount: ${total}`;
}