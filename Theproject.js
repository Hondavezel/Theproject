const message1=['A day has','A year has','A week has'];
const message2=['365 days','24 hours','7 days'];

const messageMixer =(array1,array2)=>{
    let messageArray =[];
    for(key of array1){
        if(key == 'A day has'){
            messageArray[0] = key + ' ' + array2.find(element=> element == '24 hours');
        }
        if (key =='A year has'){
            messageArray[1] = key + ' ' + array2.find(element=> element == '365 days');
        }
        if (key =='A week has'){
            messageArray[2] = key + ' ' + array2.find(element=> element == '7 days');
        }
        
    }
    return messageArray[Math.floor(Math.random()* 3)];

}
console.log('Did you know' + messageMixer(message1,message2));
