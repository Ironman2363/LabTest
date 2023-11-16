let objmang = {
  a: 5,
  b: 6,
  c: 7,
  d: 9,
};
let mangValue = Object.values(objmang).reduce((hienTai,daiNhat) =>{
  return hienTai > daiNhat ? hienTai : daiNhat;
});
console.log("Giá trị lớn nhất là: ", mangValue);

// Viết một hàm nhận vào một object với các giá trị số và trả về giá trị lớn nhất trong object đó.
