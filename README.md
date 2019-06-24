# asyncForEach
### An asynchronous implementation of forEach using async/await.

#### Install

npm i simple-async-foreach --save

#### Usage
Example without a delay!

const { asyncForEach } = require('simple-async-foreach')

simpleArray = ['a','b','c','d'];

async function startLoop(){
    console.log('Looping between items of simpleArray...');

    await asyncForEach(simpleArray,(item,index,array)=>{
        console.log(index,item,array);
    });
    
    console.log('Done!');
}

startLoop();


Example with a delay of 300ms!

const { asyncForEach } = require('simple-async-foreach')

simpleArray = ['a','b','c','d'];

async function startLoop(){
    console.log('Looping between items of simpleArray...');

    await asyncForEach(simpleArray,(item,index,array)=>{
        console.log(index,item,array);
    },300);
    
    console.log('Done!');
}

startLoop();

#### Results

Looping between items of simpleArray...
0 'a' [ 'a', 'b', 'c', 'd' ]
1 'b' [ 'a', 'b', 'c', 'd' ]
2 'c' [ 'a', 'b', 'c', 'd' ]
3 'd' [ 'a', 'b', 'c', 'd' ]
Done!
