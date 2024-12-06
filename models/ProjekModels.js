import sequelize from "../config/config.js";

const Projek = {
  // Mendapatkan semua projek
  getAllProjek: async () => {
    const [results] = await sequelize.query("SELECT * FROM projek");
    return results;
  },

  // Menambahkan projek baru
  addProjek: async (nama_projek, deskripsi_projek, status_projek) => {
    const result = await sequelize.query(
      "INSERT INTO projek (nama_projek, deskripsi_projek, status_projek) VALUES (?, ?, ?)",
      {
        replacements: [nama_projek, deskripsi_projek, status_projek],
      }
    );
    return result[0]; // Mengembalikan hasil dari query
  },

  // Mengupdate projek berdasarkan id_projek
  updateProjek: async (
    id_projek,
    nama_projek,
    deskripsi_projek,
    status_projek
  ) => {
    const result = await sequelize.query(
      "UPDATE projek SET nama_projek = ?, deskripsi_projek = ?, status_projek = ? WHERE id_projek = ?",
      {
        replacements: [nama_projek, deskripsi_projek, status_projek, id_projek],
      }
    );
    return result[0]; // Mengembalikan hasil dari query
  },

  // Menghapus projek berdasarkan id_projek
  deleteProjek: async (id_projek) => {
    const result = await sequelize.query(
      "DELETE FROM projek WHERE id_projek = ?",
      {
        replacements: [id_projek],
      }
    );
    return result[0]; // Mengembalikan hasil dari query
  },
};

export default Projek;
