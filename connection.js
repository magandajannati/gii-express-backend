require('dotenv').config();

//Mengimpor modul mysql
const mysql = require("mysql");

const{ DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_NAME 

}= process.env

//Membuat koneksi ke database mysql
const conn = mysql.createConnection({
    host: DB_HOSTNAME,
    user: DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_NAME,
})
console.log(DB_USERNAME)

;
//Menghubungkan ke database
conn.connect((error)=> {
    if(error) throw error;
    console.log('database connected')

})

//Mengekspor modul
module.exports = conn