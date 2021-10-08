// Bài 1:
// C1: 
// let a = 1;
// let b = 2;
// let temp;
 
// temp = a;
// a = b;
// b = temp;

// console.log(a,b);

// C2:
// let a = 1;
// let b = 2;

// a = a + b;
// b = a - b; 
// a = a - b;

// console.log(a,b);

// Bài 2
// let s = 'Hello beauty there';
//   const y = s.split(' ');
// console.log(y);

// const a = [4, 5, 7, -8];
// console.log(...a);

// Bai 3
// const a = [4, 5, 7, -8];
// console.log(...a);
  
//Review
//Bai 4 
// let items = ['Jeans', 'T-Shirt', 'Socks'];
// let arr = ['C','R','U','D'];
// while(true){
//     let ask = prompt('Hi there, welcome to shop admin panel,what do you want (C, R, U, D)');
//     if (ask == 'R' ){
//         console.log ('The items in the shop are:' );
//         for(i = 0; i < items.length; i++){
//             console.log(`${i+1}. ${items[i]}`)
//               }

//     } else if(ask == 'C'){
//         let newItem = prompt('Enter the name of the new item ');
//         items.push(newItem);
//         alert('Done');

//     } else if(ask == 'U'){
//         let updateItem = prompt('Enter the position you want to update');
//         let newName = prompt('Enter the new name');
//         items[position] = newName;
//         alert('Done');

//     } else if(ask == 'D'){
//         let deleteItem = prompt('Enter the position you want to delete')
//         alert('Done');
//     } else{
//         alert('This command is not supported');
//         break
//     }
// }

//Serious exercises
// Bai 5
// let ask = prompt(' Enter a sequence of number, separated by commas');
// let array = ask.split(',');
// let sum = 0;
// for (let i = 0; i < array.length; i++){
//     sum += Number(array[i]);
// }
// alert(`The sum of them is ${sum}`);


// Bai 6
// let ask = prompt('Enter a sequence of number, separated by ,');
// let arr = ask.split(',');
//  let min = Math.min(...arr);
//  alert(`The smallest number is ${min}`);

// Bai 7
// let x = Number(prompt(" Enter a number "));
// const arr = [ 3 , 4 ,6 , -9, 10 , -88 , 2];
// let i = 0
// for( ; i < arr.length; i++){
//     if (x == arr[i]){
//         alert( `${x} + is FOUND in my array at `  + arr.indexOf(x))   ;
//         break;
//     } else {
//         alert( ` ${x}+  is NOT found in my array` );
//     }
// }


// 8.1
// let arr = [5, 7 , 300, 90, 24, 50, 75];
// console.log('Hello, my name is Dung and here is my sheep sizes: ' );
// console.log(...arr);

// 8.2
// let max = Math.max(...arr);
// console.log(`Now my biggest sheep has size ${max} let's shave it`);

// console.log('After shearing, here is my flock');

//  8.3 and 8.4
// let size=arr.indexOf(max);
// arr[size] = 8;
// console.log(...arr);

// console.log('MONTH 1');
// console.log('One month has, passed, my sheeps have grown, here are their sizes');
// let i =0;
// for ( ; i<arr.length; i++){
//     console.log(arr[i]);
//     arr[i] = arr[i] + 50;
// }  






