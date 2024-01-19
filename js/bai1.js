/**
 * Toán tử *
 * Tiền lương = Lương 1 ngày * số ngày làm
 */

function tinhTienLuong() {

    let luongNgay = document.getElementById("inputLuongNgay"). value ;
let soNgay = document.getElementById("inputSoNgay"). value ;
let tienLuong = 0;

console.log(luongNgay, soNgay, tienLuong);

tienLuong = luongNgay * soNgay;

document.getElementById("txtTienLuong"). innerHTML = `
Tiền lương là: ` + tienLuong;
    
}


document.getElementById("btnTinh").onclick = tinhTienLuong;
