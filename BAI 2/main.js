var n;
n = prompt("nhap so n :")
if(n > 0){
    if(n % 2 == 0){
        console.log("n la so duong chan")
    }else{
        console.log("n laf so am chan")
    }
}else if(n < 0){
    if(n % 2 == 0){
      console.log("n la so am chan")
    }else{
        console.log("n la so am le")
    }
}else{
    console.log("n la so am duong")
}