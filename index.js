import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

/* get path of the folder named as 'files' ie: current directory\files */
//const directory = path.join(__dirname,'files'); --> this wont work in ES module.
const __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
__dirname = path.join(__dirname,'files');

/* create 5 files inside the folder named as 'files' */
for(let i=0;i<5;i++){
    fs.writeFileSync(`${__dirname}/file${i}`,'new file data'+i); //2 ways of including variables in strings
} 

/* display the created files */
fs.readdir(__dirname,(err,files)=>{
    files.forEach(element => {
        console.log(element)
    });
})