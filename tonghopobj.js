function mergeObjects(...objects) {
  // Khởi tạo đối tượng mới để chứa tất cả các cặp key-value
  let mergedObject = {};

  // Duyệt qua từng đối tượng được truyền vào
  objects.forEach((obj) => {
    // Duyệt qua từng khóa trong đối tượng hiện tại
    for (let key in obj) {
      // Kiểm tra xem khóa có thuộc tính của đối tượng không
      if (obj.hasOwnProperty(key)) {
        // Thêm cặp key-value vào đối tượng mergedObject
        mergedObject[key] = obj[key];
      }
    }
  });

  // Trả về đối tượng đã được kết hợp
  return mergedObject;
}

let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let object3 = { d: 5 };
let gopObj = mergeObjects(object1, object2, object3);
console.log(gopObj);
//Viết một hàm nhận vào nhiều object và trả về một object mới chứa tất cả các cặp key-value từ các object đầu vào.
