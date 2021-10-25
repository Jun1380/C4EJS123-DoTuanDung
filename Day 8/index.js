//Bai 1
// 1D - 2A - 3C - 4B

// //Bai 2
let time = setInterval(() => {
    console.log('Heehaw');
  }, (4000));

// // Bai 3
// {
//     Both of var and let cant still exist after  the function finishes running
// }

// // Bai 4
{ 
    var x = document.getElementsByTagName("li");
    console.log (x[1]);
    
    for (let i = 0; i< x.length; i++){
        console.log (x[i])
    }
    };

//     // Bai5
    {
        var x = document.getElementsByTagName('div');
        console.log(x[1]);

        for( let i=0 ; i<x.length; i++){
        console.log(x[i]);
        }
    }


//     // Bai6
    {
        var el = document.getElementById('div-01');
        el.remove(); 
    }

    //Bai 7
     
let b = document.getElementById('button 1');
b.addEventListener('click', (e) => {
    console.log(e.target);
});
let c = document.getElementById('button 2');
c.addEventListener('click', (f) => {
    console.log(f.target);
});
let d = document.addEventListener('keydown', (g) => {
    console.log(g.key);
});

//7.2 Its button 1 and 2




//     // Bai8
    {
        function sayHi(){
            alert('Do Tuan Dung hoc gioi tieng Anh hon')
        }
        sayHi();
    }

//     //Bai 9
{
function sayHi(name, wish){
    alert(`${name} ${wish}`);
}
    sayHi('Do Tuan Dung','Pass exam')
}

// //Bai 10

{
    function sayHi(name, wish){
        alert(`${name} ${wish}`);
    }
    let name = prompt('Hay nhap ten cua ban');
    let wish = prompt('Hay nhap dieu uoc cua ban');
    if(wish==''){
        alert(`${name} chua nhap dieu uoc`);
    } else {
        sayHi(name,wish);
    }
    
}

