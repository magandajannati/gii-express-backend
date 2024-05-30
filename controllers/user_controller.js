//Impor modul koneksi
var conn = require('../connection');

// Create a new user
exports.createUser = function (req, res) {
    const {nama, username, password } = req.body;
    try {
        const queryStr = 'INSERT INTO user (nama, username, password) VALUES (?, ?, ?)';
          const values = [nama, username, password];
        
          conn.query(queryStr, values, (err, results) => {
            if (err) {
              console.log(err);
              res.status(400).json({
                "success": false,
                "code" : 400,
                  "res" : {},
                "message": "gagal menampilkan data"
              });
            } else {
              res.status(200).json({
                "success": true,
                "code" : 200,
                  "res" : {},
                "message": "Sukses menyimpan data"
              });
            }
        })
    } catch (error) {
        res.status(400).json({ "success": false,
        "code" : 400,
          "res" : {},
        "message": error.message });
    }
};

// Get all User
exports.getUser = function (req, res) {
  try {
      const sql = "SELECT * FROM user";
      conn.query(sql, (err, data) => {
          if (err) {
              return res.status(500).json({
                  "success": false,
                  "code" : 500,
                  "res" : {},
                  "message": "Gagal Menampilkan Data Users"
              });
          }
          return res.status(200).json({
              "success": true,
                "code" : 200,
                  "res" : {data},
                "message": "Sukses menampilkan data"
          });
      });
  } catch (error) {
      res.status(500).json({ "success": false,
      "code" : 500,
        "res" : {},
      "message": error.message });
  }
};

// Get a user by ID
exports.getUserbyID = function (req, res) {
    var userid = req.params.userid
    try {
        const sql = "SELECT * FROM user where id_user=?"; 
  conn.query(sql,userid, (err, data) => {
    if (err) return res.json("Error");
    return res.status(200).json({
      "success": true,
      "code" : 200,
        "res" : {data},
      "message": "Sukses menyimpan data"
  })
  });
  
    } catch (error) {
        res.status(500).json({ "success": false,
        "code" : 500,
          "res" : {},
        "message": error.message});
    }
};

// Update a user by ID
exports.updateUser = function (req, res) {
        const {id_user, nama, username, password } = req.body;
    try {
        const queryStr = 'UPDATE user SET nama = ?, username = ?, password = ? WHERE id_user = ?';
          const values = [nama, username, password, id_user];
          
        
          conn.query(queryStr, values, (err, results) => {
            if (err) {
              console.log(err);
              res.status(400).json({
                "success": false,
                  "code" : 400,
                    "res" : {},
                  "message": " Gagal Mengupdate data"
              });
            } else {
                console.log(results)
              res.status(200).json({
                "success": true,
                  "code" : 200,
                    "res" : {},
                "message": "Sukses Mengupdate data"
              });
            }
        })
    } catch (error) {
        res.status(500).json({  "success": false,
        "code" : 500,
          "res" : {},
        "message": error.message} );
    }
};

// Delete a user by ID
exports.deleteUser = function (req, res)  {
    var userid = req.params.id_user
    try {
        const queryStr = 'DELETE FROM user WHERE id_user = ?';
          const values = [userid];
          
        
          conn.query(queryStr, values, (err, results) => {
            if (err) {
              console.log(err);
              res.status(400).json({
                "success": false,
                "code" : 400,
                  "res" : {},
                "message": " Gagal Menghapus data"
              });
            } else {
                console.log(results)
              res.status(200).json({
                "success": true,
                "code" : 200,
                  "res" : {},
                "message": "Sukses Menghapus data"
              });
            }
        })
    } catch (error) {
        res.status(500).json({"success": false,
        "code" : 500,
          "res" : {},
        "message": error.message});
    }
};
