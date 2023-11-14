let objmang = {
  a: 5,
  b: 6,
  c: 7,
};
let mangValue = Object.values(objmang);
let tong = 0;
for (let i = 0; i < mangValue.length; i++) {
  tong += mangValue[i];
}
console.log(tong);
//Viết một hàm nhận vào một object chứa các giá trị số và trả về tổng của tất cả các giá trị đó.
