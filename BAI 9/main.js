var a;
a = prompt("nhap gia tri a :");
var b;
b = prompt("nhap gia tri b :");
var c;
c = prompt("nhap gia tri c");
var d;
d = b * b - 4 * a * c;

if (d > 0) {
    console.log("phuong trinh co 2 ngiem");
    var x1;
    x1 = (-b - d) / 2 * a;
    var x2;
    x2 = (-b + d) / 2 * a;
    console.log(x1);
    console.log(x2);
}else if ( d == 0){
    console.log("phuong trinh co nghiem kep");
    var x3;
    x3 = -b/2*a;
    console.log(x3);
}else{
    console.log("phuong trinh vo nghiem");
}