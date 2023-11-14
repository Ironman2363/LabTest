let mang = ["dfgvdsfg", "sdfadhdghsdghsdfg", "dsfasdfffff", "sdfasafergethada"];
let mangDai = mang[0];
for (let i = 0; i < mang.length; i++) {
  if (mang[i].length > mangDai.length) {
    mangDai = mang[i];
  }
}
console.log(mangDai, "Dài", mangDai.length);
//Viết một hàm nhận vào một mảng các chuỗi và trả về chuỗi có độ dài lớn nhất.
