import sequelize from "../config/config.js";

const User = {
  // Mendapatkan semua user dengan join tabel role
  getAllUsers: async () => {
    const [results] = await sequelize.query(`
            SELECT 
                user.id_user, 
                user.id_role, 
                user.username, 
                user.password, 
                user.nama_user, 
                role.deskripsi_role
            FROM 
                user
            INNER JOIN 
                role 
            ON 
                user.id_role = role.id_role
        `);
    return results;
  },

  // Menambahkan user baru
  addUser: async (id_role, username, password, nama_user) => {
    const result = await sequelize.query(
      "INSERT INTO user (id_role, username, password, nama_user) VALUES (?, ?, ?, ?)",
      {
        replacements: [id_role, username, password, nama_user],
      }
    );
    return result[0]; // Mengembalikan hasil dari query
  },

  // Mengupdate user berdasarkan id_user
  updateUser: async (id_user, id_role, username, password, nama_user) => {
    const result = await sequelize.query(
      `UPDATE user 
            SET id_role = ?, username = ?, password = ?, nama_user = ? 
            WHERE id_user = ?`,
      {
        replacements: [id_role, username, password, nama_user, id_user],
      }
    );
    return result[0]; // Mengembalikan hasil dari query
  },

  // Menghapus user berdasarkan id_user
  deleteUser: async (id_user) => {
    const result = await sequelize.query("DELETE FROM user WHERE id_user = ?", {
      replacements: [id_user],
    });
    return result[0]; // Mengembalikan hasil dari query
  },
};

export default User;
