import * as fs from 'fs';

const consInput = process.argv; //'process' is an object

if(consInput[2]=='create'){
    fs.writeFileSync(consInput[3],consInput[4]);
} 
else if(consInput[2]=='delete'){
    fs.unlinkSync(consInput[3]);
}
else{
    console.log('Invalid input');
}

/* To run, we give the command as 
node index.js create new_test_file.txt 'this is a new text file'
*/