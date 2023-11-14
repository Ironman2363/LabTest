let objmang = {
  a: 5,
  b: 6,
  c: 7,
  d: 9,
};
let mangValue = Object.values(objmang);
let gtln = mangValue[0];
for (let i = 0; i < mangValue.length; i++) {
  if (gtln < mangValue[i]) {
    gtln = mangValue[i];
  }
}
console.log("Giá trị lớn nhất là: ", gtln);

// Viết một hàm nhận vào một object với các giá trị số và trả về giá trị lớn nhất trong object đó.
