let myObject = {
  ten: "Ironman",
  tuoi: 6,
  namsinh: 7,
  lop: 123,
};
let keycanxoa = "ten";
function xoaThuoctinh(obj, key) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
  }
  return obj;
}
let obj = xoaThuoctinh(myObject, keycanxoa);
console.log(obj);
//Viết một hàm nhận vào một object và một chuỗi (key), sau đó trả về một object mới không chứa thuộc tính có key được chỉ định.
