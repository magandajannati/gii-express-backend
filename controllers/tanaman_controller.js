var conn = require('../connection');

// Create a new Tanaman
exports.createTanaman = function (req, res) {
    const {nama_tanaman, deskripsi_tanaman} = req.body;
    try {
        const queryStr = 'INSERT INTO tanaman (nama_tanaman, deskripsi_tanaman) VALUES (?, ?)';
          const values = [nama_tanaman, deskripsi_tanaman];
        
          conn.query(queryStr, values, (err, results) => {
            if (err) {
              console.log(err);
              res.status(200).json({
                "success": false,
                "hasil": 0,
                "message": "Gagal Menyimpan Data"
              });
            } else {
              res.status(200).json({
                "success": true,
                "hasil": 1,
                "message": "Sukses Menyimpan Data"
              });
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all Tanaman
exports.getTanaman = function (req, res) {
  try {
      const sql = "SELECT * FROM tanaman";
      conn.query(sql, (err, data) => {
          if (err) {
              return res.status(500).json({
                  "success": false,
                  "message": "Gagal Menampilkan Data Tanaman"
              });
          }
          return res.status(200).json({
              "success": true,
              "data" : data,
              "message" : "Sukses Menampilkan Data Tanaman"
          });
      });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// Get a Tanaman by ID
exports.getTanamanbyID = function (req, res) {
    var tanamanid = req.params.tanamanid
    try {
        const sql = "SELECT * FROM tanaman where id_tanaman=?"; 
  conn.query(sql,tanamanid, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a Tanaman by ID
exports.updateTanaman = function (req, res) {
        const {id_tanaman, nama_tanaman, deskripsi_tanaman} = req.body;
    try {
        const queryStr = 'UPDATE tanaman SET nama_tanaman = ?, deskripsi_tanaman = ? WHERE id_tanaman= ?';
          const values = [nama_tanaman, deskripsi_tanaman, id_tanaman];
          
        
          conn.query(queryStr, values, (err, results) => {
            if (err) {
              console.log(err);
              res.status(400).json({
                "success": false,
                "hasil": 0,
                "message": "Gagal Mengupdate Data Tanaman"
              });
            } else {
                console.log(results)
              res.status(200).json({
                "success": true,
                "hasil": 1,
                "message": "Sukses Mengupdate Data Tanaman"
              });
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a tanaman by ID
exports.deleteTanaman = function (req, res)  {
    var tanamanid = req.params.id_tanaman
    try {
        const queryStr = 'DELETE FROM tanaman WHERE id_tanaman = ?';
          const values = [tanamanid];
          
        
          conn2.query(queryStr, values, (err, results) => {
            if (err) {
              console.log(err);
              res.status(400).json({
                "success": false,
                "hasil": 0,
                "message": "Gagal Menghapus Data Tanaman"
              });
            } else {
                console.log(results)
              res.status(200).json({
                "success": true,
                "hasil": 1,
                "message": "Sukses Menghapus Data Tanaman"
              });
            }
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
