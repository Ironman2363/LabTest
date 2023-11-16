const sotunhien = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function tinhTongsochan(arr) {
  return (
    arr
      .filter((number) => number % 2 == 0)
      // thuoc tinh method filter de loc phan tu trong mang la so chan
      // number lla dai dien cho phan tu trong mang
      .reduce((acc, current) => acc + current)
    // reduce dai dien cho tong mot mang
    // acc gia tri tich luy
    // curent gia tri hien tai thuc hien
  );
}

const tong = tinhTongsochan(sotunhien);
console.log("Tổng các số chẵn trong mảng là:", tong);

//Viết một hàm nhận vào một mảng số nguyên và trả về tổng của tất cả các số chẵn trong mảng.
