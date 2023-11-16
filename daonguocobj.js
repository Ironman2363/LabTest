let objmang = {
  ten: "Ironman",
  tuoi: 6,
  namsinh: 7,
  lop: 123,
};

let mang1 = Object.entries(objmang).reverse();
let reverseObj = Object.fromEntries(mang1);
console.log(reverseObj);
console.log(objmang);


//Viết một hàm nhận vào một object và trả về một object mới có các cặp key-value đã được đảo ngược.
