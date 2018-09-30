var $output1 =document.getElementById('output1');
    var $outputResult =document.getElementById('outputResult');
var str1 = '';
var str2 = '';
var num1;
var num2;
var result = 0;

// 获取按钮上的值
function num(e){
    str2 += e;
   var $outputResult = document.getElementById('outputResult');
    $outputResult.value = Number(str2);
}


// 清除所有
function Clean(){
    var $output1 =document.getElementById('output1');
    var $outputResult =document.getElementById('outputResult');
     $output1.value = "";
     $outputResult.value = '0';
    str2 = '';
    str1 = '';
}





// 加法
function add(){
    str1 += str2;
    str1 += "+";
    var $output1 =document.getElementById('output1');
    var $outputResult =document.getElementById('outputResult');
    $output1.value = str1;
    str2 = "";
    $outputResult.value = '';
}

// 乘法
function multiply(){
    str1 += str2;
    str1 += "*";
    var $output1 =document.getElementById('output1');
    var $outputResult =document.getElementById('outputResult');
    $output1.value = str1;
    str2 = "";
    $outputResult.value = '';
}

// 减法
function subtract(){
    str1 += str2;
    str1 += "-";
    var $output1 =document.getElementById('output1');
    var $outputResult =document.getElementById('outputResult');
    $output1.value = str1;
    str2 = "";
    $outputResult.value = '';
}
// 除法
function divide(){
    str1 += str2;
    str1 += "/";
    var $output1 =document.getElementById('output1');
    var $outputResult =document.getElementById('outputResult');
    $output1.value = str1;
    str2 = "";
    $outputResult.value = '';
}

// 小数点
function spot(){
    str1 += str2;
    str1 += ".";
    var $output1 =document.getElementById('output1');
    var $outputResult =document.getElementById('outputResult');
    $output1.value = str1;
    str2 = "";
    $outputResult.value = '';
}





// 得数
function equal(){
    str1 += str2;
    var $output1 =document.getElementById('output1');
    $output1.value = str1;
    result = eval(str1).toFixed(4);
    var $outputResult =document.getElementById('outputResult');
    $outputResult.value = result;
    str2 = '';
}