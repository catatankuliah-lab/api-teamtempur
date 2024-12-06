import sequelize from '../config/config.js';

const User = {
    getAllUsers: async () => {
        const [results] = await sequelize.query('SELECT * FROM user');
        return results;
    },

    getUserById: async (id_user) => {
        const [results] = await sequelize.query('SELECT * FROM user WHERE id_user = ?', {
            replacements: [id_user],
        });
        return results[0]
    },

    addUser: async (id_role, username, password, nama_lengkap, alamat_user, foto_user, status_user) => {
        const [result] = await sequelize.query(
            'INSERT INTO user (id_role, username, password, nama_lengkap, alamat_user, foto_user, status_user) VALUES (?, ?, ?, ?, ?, ?, ?)',
            {
                replacements: [id_role, username, password, nama_lengkap, alamat_user, foto_user, status_user],
            }
        );
        console.log(result);
        return { id_user: result };
    },

    updateUser: async (id_user, id_role, username, password, nama_lengkap, alamat_user, foto_user, status_user) => {
        const result = await sequelize.query(
            'UPDATE user SET id_role = ?, username = ?, password = ?, nama_lengkap = ?, alamat_user = ?, foto_user = ?, status_user = ? WHERE id_user = ?',
            {
                replacements: [id_role, username, password, nama_lengkap, alamat_user, foto_user, status_user, id_user],
            }
        );
        return result[0];
    },

    deleteUser: async (id_user) => {
        const result = await sequelize.query(
            'DELETE FROM user WHERE id_user = ?',
            {
                replacements: [id_user],
            }
        );
        return result[0];
    },
};

export default User;
