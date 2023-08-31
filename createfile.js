var fs=require('fs')
fs.appendFile('newfile.html','Hello this is new file',(err)=>{
    if(err) throw err;
    console.log('Saved file sucess')
})