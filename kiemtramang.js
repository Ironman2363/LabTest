let hihi = [1, 2, 3, 4, 5, 6, 7, 8];

function kiemTratangdan(arr) {
  return arr.every((soA, index, mang) => {
    if (index < mang.length - 1) {
      return soA <= mang[index + 1];
    }
    return true;
  });
}
let kq = kiemTratangdan(hihi);
if (kq) {
  console.log("Chuẩn sắp xếp tăng dần");
} else {
  console.log("Sắp xếp không tăng dần");
}
//Viết một hàm nhận vào một mảng số nguyên và kiểm tra xem mảng đó có đang được sắp xếp theo thứ tự tăng dần hay không. sử dụng method
