let mang = [2, 6, 2, 4, 8, 2, 7];
let soCandem = 2;

function dem(arr, soCandem) {
  let mangLoc = arr.filter((so) => soCandem === so);
  return mangLoc.length;
}
let demSo = dem(mang, soCandem);
console.log("Số lần xuất hiện là:", demSo);
//Viết một hàm nhận vào một mảng và một số nguyên, sau đó trả về số lần xuất hiện của số đó trong mảng.
