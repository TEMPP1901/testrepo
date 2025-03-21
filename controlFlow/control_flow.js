let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true; // Khởi tạo biến isLoggedIn với giá trị true
let userMessage; // Khai báo biến userMessage nhưng chưa gán giá trị

if (isLoggedIn) { // Kiểm tra xem người dùng đã đăng nhập chưa
    if (userRole === "admin") { // Nếu vai trò là admin
        userMessage = "Welcome, Admin!";
    } else { // Nếu không phải admin
        userMessage = "Welcome, User!";
    }
} else { // Nếu chưa đăng nhập
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage); // Xem thông báo trong bảng console


let userType = "subscriber"; // Khởi tạo biến userType với giá trị "subscriber"
let userCategory; // Khai báo biến userCategory nhưng chưa gán giá trị

switch (userType) { // Kiểm tra giá trị của userType
    case "admin": // Trường hợp userType là "admin"
        userCategory = "Administrator";
        break; // Thoát khỏi câu lệnh switch
    case "manager": // Trường hợp userType là "manager"
        userCategory = "Manager";
        break; // Thoát khỏi câu lệnh switch
    case "subscriber": // Trường hợp userType là "subscriber"
        userCategory = "Subscriber";
        break; // Thoát khỏi câu lệnh switch
    default: // Trường hợp không khớp với bất kỳ giá trị nào ở trên
        userCategory = "Unknown";
}

console.log("User Category:", userCategory); // Xem đầu ra trong console