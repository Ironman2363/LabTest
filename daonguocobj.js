let objmang = {
  ten: "Ironman",
  tuoi: 6,
  namsinh: 7,
  lop: 123,
};

let mang1 = Object.entries(objmang);
let reversedObj = {};
for (let i = mang1.length - 1; i >= 0; i--) {
  let [key, value] = mang1[i];
  reversedObj[key] = value;
}
console.log(objmang);
//Viết một hàm nhận vào một object và trả về một object mới có các cặp key-value đã được đảo ngược.
