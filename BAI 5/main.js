var a ;
a = prompt( " nhap so a :");
 var b ;
 b = prompt( " nhap so b :");
 var c , d , e ;
 c = prompt( " nhap so c :");
 d  = prompt( " nhap so d :");
 e = prompt( " nhap so e:");
 if(b > a && b > c && b > d && b > e){
     console.log("b la lon nhat");
 }else if( a>b && a>c && a>d && a>e){
     console.log("a là số lớn nhất");
 }else if( c>b && c>a && c>d && c>e){
    console.log("c là số lớn nhất");
 }else if( d>b && d>a && d>c && d>e){
    console.log("d là số lớn nhất");
 }else if( e>b && e>a && e>c && e>d){
    console.log("e là số lớn nhất");
 }else{
     console.log( " không có giá trị lớn nhất");
 }

