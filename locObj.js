function filterObjectByKeys(obj, keysArray) {
  let filteredObject = {};

  keysArray.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      filteredObject[key] = obj[key];
    }
  });

  return filteredObject;
}

// Ví dụ sử dụng hàm
let myObject = {
  ten: "Ironman",
  tuoi: 6,
  namsinh: 7,
  lop: 123,
};

let selectedKeys = ["tuoi", "lop"];
let filteredObject = filterObjectByKeys(myObject, selectedKeys);

console.log(filteredObject);

//Viết một hàm nhận vào một object và một mảng các key, sau đó trả về một object mới chỉ chứa các cặp key-value mà key nằm trong mảng.
