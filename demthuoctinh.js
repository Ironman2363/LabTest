let objmang = {
  ten: "Ironman",
  tuoi: 6,
  namsinh: 7,
  lop: 123,
};
let mangKey = Object.keys(objmang);
let dem = 0;
for (let i = 0; i < mangKey.length; i++) {
  dem++;
}
console.log(dem);
//Viết một hàm nhận vào một object và trả về số lượng thuộc tính có trong object đó.
