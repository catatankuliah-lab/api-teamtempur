import sequelize from '../config/config.js';

const KantorModel = {
    getAllKantorCabang: async () => {
        const [results] = await sequelize.query('SELECT * FROM kantor ORDER BY nama_kantor ASC');
        return results;
    },

    getKantorCabangById: async (id_kantor) => {
        const [results] = await sequelize.query('SELECT * FROM kantor WHERE id_kantor = ?', {
            replacements: [id_kantor],
        });
        return results[0];
    },

    addKantorCabang: async (nama_kantor, jumlah_transaksi, poin) => {
        const result = await sequelize.query(
            'INSERT INTO kantor (nama_kantor, jumlah_transaksi, poin) VALUES (?, ?, ?)',
            {
                replacements: [nama_kantor, jumlah_transaksi, poin],
            }
        );
        return result[0];
    },

    updateKantorCabang: async (id_kantor, nama_kantor, jumlah_transaksi, poin) => {
        const result = await sequelize.query(
            'UPDATE kantor SET nama_kantor = ?, jumlah_transaksi = ?, poin = ? WHERE id_kantor = ?',
            {
                replacements: [nama_kantor, jumlah_transaksi, poin, id_kantor],
            }
        );
        return result[0];
    },

    getKantorCabangCount: async () => {
        const [results] = await sequelize.query('SELECT COUNT(*) AS count FROM kantor');
        return results[0].count;
    },

    deleteKantorCabang: async (id_kantor) => {
        const result = await sequelize.query('DELETE FROM kantor WHERE id_kantor = ?', {
            replacements: [id_kantor],
        });
        return result[0];
    },
};

export default KantorModel;
