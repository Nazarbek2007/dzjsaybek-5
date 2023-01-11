let obj = {};

for(let i = 1; i < 11; i++){ 
    do {
        obj[i] = {
        user: {
            name: prompt('Пользователь -' + i + ' введите свое имя'),
            age: +prompt('Пользователь -' + i + 'введите свой возраст!'),
            
        }}}while(obj[i].user.name == '' || obj[i].user.age == 0)
        console.log('Пользователь'+ i + ':'+ ' Имя: ' + obj[i].user.name + ',' + 'возраст: ' + obj[i].user.age);  
}
console.log(obj);