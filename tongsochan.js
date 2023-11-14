const sotunhien = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tongSochan = 0;
for (let i = 0; i < sotunhien.length; i++) {
  if (sotunhien[i] % 2 === 0) {
    console.log(sotunhien[i]);
    tongSochan += sotunhien[i];
  }
}
console.log("Tong so chan: ", tongSochan);

//Viết một hàm nhận vào một mảng số nguyên và trả về tổng của tất cả các số chẵn trong mảng.
