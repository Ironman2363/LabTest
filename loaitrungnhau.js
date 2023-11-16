function loaiBoTrung(arr) {
  let mangMoi = arr.filter((value, index,mang) => mang.indexOf(value) === index);
  return mangMoi;
}
let mang = [1, 2, 3, 5, 9, 3, 4, 2, 5, 2, 6, 6, 6, 6, 6, 6, 6];
let mangMoi = loaiBoTrung(mang);
console.log("Mảng mới sau khi loại bỏ phần tử trùng nhau:", mangMoi);
// Viết một hàm nhận vào một mảng và trả về một mảng mới chỉ chứa các phần tử không trùng nhau từ mảng ban đầu.
