alert(Date())
function image(){
        document.getElementById("img").src='https://th.bing.com/th/id/OIP.-hnqSrAsJbVh8koHfAqQZgHaE7?pid=ImgDet&rs=1';
}

function change1(){
        var textChange = document.getElementById('one');
        textChange.innerHTML = 'New Text';
}

function keyboard(){
        alert('Hello!');
}

function change2(){
        var a = document.getElementById('two');
                a.style.backgroundColor = 'Yellow';
                a.style.textAlign = 'center';
                a.style.fontFamily = 'Arial';
}

function temp(f){
        return(f-32)*5/9;
}

function temp2(){
        var b = document.getElementById('temp');
        b.innerHTML = temp(20);
}

function cal(){
        var c = parseFloat(prompt('number 1'));
        var d = parseFloat(prompt('number 2'));
        alert( c + d);
}

function name(){
        var e = prompt('First Name');
        var f = prompt('Last Name');
        alert('Nice to meet you ' + e +' '+ f);
}