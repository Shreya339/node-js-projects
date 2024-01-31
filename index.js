import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); //getfile path
const __dirname = path.dirname(__filename); //get directory path using filepath
const filepath = path.join(__dirname, 'test_file.txt'); //create new file path

/* CRUD */
// /* Create */
fs.writeFileSync(filepath,'This is a test file');

// /* Read */
fs.readFile(filepath,'utf8',(err,item)=>{  //we add utf 8 for buffer encoding
    console.log(item)
})

// /* Update */
fs.appendFile(filepath,'for testing CRUD operations',(err)=>{
    !err && console.log("File is updated");
})

// /* Rename */
fs.rename(filepath,'renamed_test_file.txt',(err)=>{
    !err && console.log("File is renamed");
})

/* Delete */
fs.unlinkSync(`${__dirname}/renamed_test_file.txt`,(err)=>{
    !err && console.log("File is deleted");
})