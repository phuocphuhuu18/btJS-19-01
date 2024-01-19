/**
 * Tính giá trị trung bình
 * input : nhập vào 5 số thực
 * 
 * 
 * process:
 *  1 Lấy giá trình của 5 số vừa nhập vào
 *  2 Thực hiện tính tổng của 5 số
 *  3 Tính trung bình của 5 số bằng cách lấy tổng chia cho 5
 * 
 * output: thông báo KQ trung bình của  5 số
 */

function tinhTB() {

    let so1 = document.getElementById("inputSo1").value;
    let so2 = document.getElementById("inputSo2").value;
    let so3 = document.getElementById("inputSo3").value;
    let so4 = document.getElementById("inputSo4").value;
    let so5 = document.getElementById("inputSo5").value;
    let tong = 0
    let TB = 0;

    console.log(so1, so2, so3, so4, so5, tong, TB);

    tong = so1 + so2 + so3 + so4 + so5;
    TB = tong / 5;

    document.getElementById("txtTrungBinh").innerHTML = "Giá trị trung bình các số vừa nhập là: " + TB;
}

document.getElementById("btnTinhTB").onclick = tinhTB;
