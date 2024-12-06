import sequelize from "../config/config.js";

const Role = {
  // Mendapatkan semua role
  getAllRoles: async () => {
    const [results] = await sequelize.query("SELECT * FROM role");
    return results;
  },

  // Menambahkan role baru
  addRole: async (deskripsi_role) => {
    const result = await sequelize.query(
      "INSERT INTO role (deskripsi_role) VALUES (?)",
      {
        replacements: [deskripsi_role],
      }
    );
    return result[0]; // Mengembalikan hasil dari query
  },

  // Mengupdate role berdasarkan id_role
  updateRole: async (id_role, deskripsi_role) => {
    const result = await sequelize.query(
      "UPDATE role SET deskripsi_role = ? WHERE id_role = ?",
      {
        replacements: [deskripsi_role, id_role],
      }
    );
    return result[0]; // Mengembalikan hasil dari query
  },

  // Menghapus role berdasarkan id_role
  deleteRole: async (id_role) => {
    const result = await sequelize.query("DELETE FROM role WHERE id_role = ?", {
      replacements: [id_role],
    });
    return result[0]; // Mengembalikan hasil dari query
  },
};

export default Role;
