let objmang = {
  a: 5,
  b: 6,
  c: 7,
};
let mangValue = Object.values(objmang).reduce((a,b) => a + b);
console.log(mangValue);
//Viết một hàm nhận vào một object chứa các giá trị số và trả về tổng của tất cả các giá trị đó.
