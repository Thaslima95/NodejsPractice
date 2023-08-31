var fs=require('fs')

fs.rename('newfile.txt','renamefile,txt',(err)=>{
    if(err) {
        console.log('No file exists')
    }
    else{
        console.log('File Renamed')
    }
})