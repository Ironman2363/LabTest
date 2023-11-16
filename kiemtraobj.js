let objmang = {
  ten: "Ironman",
  tuoi: 6,
  namsinh: 7,
  lop: 123,
};

let chuoiCheck = "namsinh";
let chuoiThuoctinh = Object.keys(objmang).includes(chuoiCheck)
  ? console.log("Có")
  : console.log("Không");

// Viết một hàm nhận vào một object và một chuỗi, sau đó kiểm tra xem thuộc tính có tồn tại trong object hay không.
