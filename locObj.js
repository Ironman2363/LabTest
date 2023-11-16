function filterObjectByKeys(obj, keysToInclude) {
  return keysToInclude.reduce((result, key) => {
    // Kiểm tra xem key có tồn tại trong đối tượng không
    if (obj.hasOwnProperty(key)) {
      // Thêm cặp key-value vào đối tượng kết quả
      result[key] = obj[key];
    }
    return result;
  }, {});
}

let inputObject = {
  ten: "Ironman",
  tuoi: 30,
  namsinh: 2003,
  lop: "Avengers",
};

let selectedKeys = ["tuoi", "lop"];

let resultObject = filterObjectByKeys(inputObject, selectedKeys);

console.log(resultObject);

//Viết một hàm nhận vào một object và một mảng các key, sau đó trả về một object mới chỉ chứa các cặp key-value mà key nằm trong mảng.
