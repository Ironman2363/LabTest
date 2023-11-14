let myObject = {
  ten: "Ironman",
  tuoi: 6,
  namsinh: 7,
  lop: 123,
};
let keycanxoa = "namsinh";
function xoaThuoctinh(obj, key) {
  let myObject1 = { ...myObject };
  if (myObject1.hasOwnProperty(key)) {
    delete myObject1[key];
  }
  return myObject1;
}
let obj = xoaThuoctinh(myObject, keycanxoa);
console.log(obj);
//Viết một hàm nhận vào một object và một chuỗi (key), sau đó trả về một object mới không chứa thuộc tính có key được chỉ định.
