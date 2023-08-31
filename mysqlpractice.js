var mysql=require('mysql')
 var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"aafiya.",
    database:"mydb"
 })

 con.connect(function(err){
    if (err) throw err;
    console.log("Connected!")
    
}) 
// const sql="CREATE TABLE customers (name VARCHAR(255),address VARCHAR(255),phone INT(10))"
// con.query(sql,(err,res)=>{
//     if(arr) throw err;
//     console.log("Table Created")
// })
//ALTER TABLE
// const sql="ALTER TABLE customers ADD id INT AUTO_INCREMENT PRIMARY KEY"
// con.query(sql,(err,res)=>{
//     if(err) throw err;
//     console.log("Table Altered")
// })

//Insert Values
// const sql="INSERT INTO customers (name,address,phone) values ('Company Inc','Higway 37',898988987)"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log("Rows affected"+result.affectedRows)
// })

// const sql="INSERT INTO customers (name,address,phone) VALUES ?"
// var values = [
//     ['John', 'Highway 71',878787878],
//     ['Peter', 'Lowstreet 4',454545454],
//     ['Amy', 'Apple st 652',767545567],
//     ['Hannah', 'Mountain 21',663536272],
//     ['Michael', 'Valley 345',786756784],
//     ['Sandy', 'Ocean blvd 2',232728182],
//     ['Betty', 'Green Grass 1',902929738],
//     ['Richard', 'Sky st 331',378378362],
//     ['Susan', 'One way 98',276162716],
//     ['Vicky', 'Yellow Garden 2',727817267],
//     ['Ben', 'Park Lane 38',829273827],
//     ['William', 'Central st 954',653267827],
//     ['Chuck', 'Main Road 989',273482268],
//     ['Viola', 'Sideway 1633',273983290]
//   ];
//   con.query(sql,[values],(err,result)=>{
//     if(err) throw err;
//     console.log(`Number of rows inserted ${result.affectedRows}`)
//   })

// var sql="INSERT INTO customers (name,address,phone) VALUES ('Michelle','Blue Village 1',89897876)"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
// console.log(result.insertId)
// })

// var sql="SELECT * FROM customers"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// })

// var sql="SELECT name,phone FROM customers"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// }
// )
//field objects
// var sql="SELECT name,address,phone FROM customers"
// con.query(sql,(err,result,field)=>{
//     if(err) throw err;
//     console.log(field[2].name)
// })


// var sql="SELECT * FROM customers WHERE phone=767545567"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// })

// var sql="SELECT * FROM customers WHERE name LIKE '%m'"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// })
//Sql Injections
// var name='WILLIAM';
// var adr='Central st 954';
// var sql="SELECT * FROM customers WHERE name= ? OR address= ?"
// con.query(sql,[name,adr],(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// })

//ORDER BY
// var sql="SELECT * FROM customers ORDER BY name"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// })

// var sql="SELECT * FROM customers ORDER BY name DESC"
// con.query(sql,(err,res)=>{
//     if(err) throw err;
//     console.log(res)
// })

//DEELTE
// var name='Betty'
// var sql="DELETE FROM customers WHERE name= ?"
// con.query(sql,[name],(err,result)=>{
//     if(err) throw err;
//     console.log(`Number of rows deleted ${result.affectedRows}`)
// })
// var adr='cayon 6356'
// var sql="UPDATE customers SET address=? WHERE address='Valley 345'"
// con.query(sql,[adr],(err,result)=>{
//     if(err) throw err;
//     console.log(`rows update ${result.affectedRows}`)
// })


// var sql="SELECT * FROM customers LIMIT 6"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// })

// var sql="SELECT * FROM customers LIMIT 4 OFFSET 3"
// con.query(sql,(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// })

