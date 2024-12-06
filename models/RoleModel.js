import sequelize from '../config/config.js';

const Role = {
    getAllRoles: async () => {
        const [results] = await sequelize.query('SELECT * FROM role');
        return results;
    },

    addRole: async (nama_role, keterangan_role) => {
        const result = await sequelize.query(
            'INSERT INTO role (nama_role, keterangan_role) VALUES (?, ?)',
            {
                replacements: [nama_role, keterangan_role],
            }
        );
        return result[0];
    },

    updateRole: async (id_role, nama_role, keterangan_role) => {
        const result = await sequelize.query(
            'UPDATE role SET nama_role = ?, keterangan_role = ? WHERE id_role = ?',
            {
                replacements: [nama_role, keterangan_role, id_role],
            }
        );
        return result[0];
    },

    deleteRole: async (id_role) => {
        const result = await sequelize.query(
            'DELETE FROM role WHERE id_role = ?',
            {
                replacements: [id_role],
            }
        );
        return result[0];
    },
};

export default Role;
