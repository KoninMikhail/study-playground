import fs from 'fs';

fs.appendFile('my-text-file.txt', 'File was created by NodeJs', (err)=>{
    if(err) {
        throw err
    };
    console.log('file saved');
})


setTimeout(()=> console.log('The end'), 1000 * 30)