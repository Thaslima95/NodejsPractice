var fs=require('fs')
fs.unlink('newfile2.txt',(err)=>{
    if(err) {
        console.log("No such file exists");
    }else{
         console.log('File deleted sucessfully')

    }
})