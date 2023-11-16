let mang = ["dfgvdsfg", "sdfadhdg", "aaaaaaaaaaaaaaaaaaaa", "sdfasafergeta"];
let mangDai = mang.reduce((daiNhat, hienTai) => {
  return hienTai.length > daiNhat.length ? hienTai : daiNhat;
});
console.log(mangDai,"là mảng dài nhất và có độ dài là",mangDai.length);
//Viết một hàm nhận vào một mảng các chuỗi và trả về chuỗi có độ dài lớn nhất.
