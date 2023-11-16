let hoTen = "Pham Tien Dungn";
let chucandem = "n";
function demKitu(str, chudem) {
  return str.split("").filter((text) => chudem === text).length;
}
let dem = demKitu(hoTen, chucandem);
console.log("Số lần xuất hiện là : ",dem);

//Viết một hàm nhận vào một chuỗi và một ký tự, sau đó trả về số lượng lần xuất hiện của ký tự đó trong chuỗi.
