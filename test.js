const {asyncForEach} = require('./asyncForEach');

numbers=['a','b','c','d','e',1,2,3];

async function test(){
    await asyncForEach(numbers,(item,index,array)=>{
        console.log(item,index,array);
    });
    console.log('Done');
}

test();