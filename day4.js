
// 1.1 property

//1.2
let product = {
    name: 'Xiaomi rice cooker' ,
    price : 1700 ,
    brand: 'Xiaomi' ,
    color: 'white' ,}
    console.log(product);
   
    for (let x in product )
    {console.log (x +": " + product [prop])
};


// Bai 2
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};


const {subject, dueDate, assignTo} = task;
console.log('\n' +subject, '\n' +dueDate, '\n'+assignTo);

// Bai 3 
// {
// 3.1 The outermost layer data type is Array
// 3.2 The hits property is Array }

// bai 4a

while(true){

    var dict = 
    {debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
    };
    alert ('Hi there, this is Dev dictionary');
    let word = prompt ('Enter a keyword');
    var {debug, done, defect, pm, uiux} = dict;
    alert (keyword + '\n' + dict[keyword]);
    
    if (dict.hasOwnProperty(word)){
        alert(dict[word]);
        break;
    } else {
        alert(`We could not find your word: ${word}`);
    }
    
}  
  

// Bai 4b
var dict = 
{debug: 'The process of figuring out why your program has a certain error and how to fix it',
done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
defect: 'The formal word for ‘error’',
pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
{
    while (true){
        let word = prompt('Hi there, this is dev dictionary');
        if (dict.hasOwnProperty(word)){
            alert(dict[word]);
            break;
        } else {
            let explain = prompt (`We could not find your word: ${word}, leave your explanation:`);
            dict[word] = explain;
        }
    }
}

    
    
