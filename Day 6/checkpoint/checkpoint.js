// // // Bai 1
{
    let random = (Math.random());
    console.log(random);
    }
// // //bai2
    {
        let arr = [2,5,6,8,10];
        let calc = Math.floor( (Math.random()*arr.length));
        console.log(arr[calc]);
        };

// //         //1.3

        let quiz = [
            {
                question: "Thu do cua Viet Nam la?",
                answer: [
                    'A. Ha Noi \n',
                    'B. Ho Chi Minh\n',
                    'C. Can Tho\n',
                ], correct : 'A',
                },

                {
                    question: "Bao gio em co nguoi yeu?",
                    answer : [
                        'A. Mai\n',
                        'B. Khong bao gio\n',
                        'C. Tuong lai gan\n',
                    ], correct : 'C',
                    },    
                    {
                        question: "Ca si nao hat bai nang tho?",
                        answer: [
                            'A. Duc Phuc\n',
                            'B. Hoang Dung\n',
                            'C. Erik\n',
                        ], correct : 'B',
                        },    
            ];
        
//         // //1.4 + 1.5
        let random = Math.floor(Math.random() * quiz.length);
        let use = prompt(`${quiz[random].question} \n${quiz[random].answer}`);
        if(use == quiz[random].correct){
            alert('True');
        }else{
            alert('False');
        };

        while(true){
                let diemso = 0;
                let use = prompt(`${quiz[random].question} \n${quiz[random].answer}`);
        
         if (use=quiz[random].correct){
                diemso++;
                }  quiz.splice(random,1);
                if(quiz.length ==0){
                        alert(`True. You have ${diemso} of ${quiz.question}`);
                        alert(`Out of question`);
                        break;
                }
        }
       
            

// //2.1
let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of ' , 'hat', 'late', 'sorry', 'my', 'team'];
let count = {};
for(let words of list){    
    if(count[words]){
        count[words]++;
    }else{
        count[words] = 1; 
    }
}
console.log(count);

//2.2
const inventory = [
        {
            name: 'HP Envy 13aq',
            price: 21000,
            brand: 'HP',
            quantity: 5,
        },
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
        },
        {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
        },
    
        {
            name: 'Asus Zenbook',
            brand: 'Asus',
            price: 20000,
            quantity: 4,
        },
        {
            name: 'HP Pavilion',
            brand: 'HP',
            price: 14000,
            quantity: 7,
        },
    ]

    //2.3
    let inventoryByBrand = {
        'Dell':[],
        'Asus':[],
        'HP':[],
    
    }
    
    for(let i=0;i<inventory.length;i++){
        let sanpham =inventory[i];
        console.log(sanpham);
        let brand=sanpham.brand;
        console.log(brand);
        inventoryByBrand[brand].push(sanpham);
    }
    console.log(inventoryByBrand);

    //2.4

let ask = prompt('Brand?');

for(let brand in inventoryByBrand){
        if(ask.toLowerCase() == brand.toLowerCase()){
            alert(`Here is ${inventoryByBrand[brand].length} produce of "${brand}" in the inventory"`)
    
        }
    
    }

   // 2.5,6,7
   ask = prompt('Dell, HP or Asus');
         let listName = inventoryByBrand[ask];
        console.log(listName);
        let loaiMay = [];
        let gia;
        let tongtien = 0;
        for(let i = 0; i < listName.length; i++){
        loaiMay.push(listName[i].name);
        gia = listName[i].price * listName[i].quantity;
       tongtien = tongtien + gia;
};
        alert(`${loaiMay}`);
        alert(`So tien la ${tongtien}`);

