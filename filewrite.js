var fs=require('fs')
fs.writeFile('newfile.txt',"Content to replace",(err)=>{
    if(err) throw err;
    console.log('Saved sucess')
})