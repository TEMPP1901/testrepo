// Biến lưu trữ văn bản mẫu và thời gian bắt đầu/kết thúc
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

// Hàm bắt đầu kiểm tra
function startTest() {
    // Hiển thị đoạn văn bản mẫu trong textarea 'inputText'
    document.getElementById("inputText").value = testText;

    // Xóa kết quả trước đó
    document.getElementById("output").innerHTML = "";

    // Lưu thời gian bắt đầu
    startTime = new Date().getTime();

    // Cập nhật nút Start Test thành End Test
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

// Hàm kết thúc kiểm tra và hiển thị kết quả
function endTest() {
    // Ghi lại thời gian kết thúc
    endTime = new Date().getTime();

    // Ngăn người dùng tiếp tục nhập
    document.getElementById("userInput").readOnly = true;

    // Tính toán thời gian đã trôi qua (giây)
    var timeElapsed = (endTime - startTime) / 1000; // Đơn vị giây

    // Lấy văn bản người dùng đã nhập
    var userTypedText = document.getElementById("userInput").value;

    // Đếm số từ người dùng đã gõ
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== ""; // Loại bỏ các khoảng trắng thừa
    }).length;

    // Tính tổng số ký tự đã nhập
    var textLength = userTypedText.length; // Bao gồm cả khoảng trắng và dấu câu

    // Tính tốc độ gõ (Words Per Minute - WPM)
    var wpm = 0; // Giá trị mặc định
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60); // Quy đổi sang phút
    }

    // Hiển thị kết quả
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Characters Typed: " + textLength + "</p>" + // Hiển thị tổng số ký tự
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Đặt lại nút End Test thành Start Test
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}