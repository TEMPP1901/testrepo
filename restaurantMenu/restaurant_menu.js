// Cập nhật các mảng thực đơn với tên món ăn và giá
const breakfastMenu = ['Bánh kếp - 12$', 'Trứng Benedict - 22.99$', 'Cháo yến mạch - 21.99$', 'Frittata - 15$'];
const mainCourseMenu = ['Bít tết - 35$', 'Mỳ Ý - 18.50$', 'Bánh mì kẹp thịt - 10$', 'Cá hồi - 28$'];
const dessertMenu = ['Bánh - 7.50$', 'Kem - 5$', 'Bánh pudding - 6$', 'Salad trái cây - 8$'];

// Hiển thị thực đơn bữa sáng bằng phương thức map()
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Món ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Hiển thị thực đơn món chính bằng phương thức forEach()
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Món ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Hiển thị thực đơn món tráng miệng bằng vòng lặp for
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Món ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;