import sequelize from '../config/config.js';

const KabupatenKota = {
    getAllKabupatenKota: async () => {
        const [results] = await sequelize.query('SELECT * FROM kabupaten_kota ORDER BY nama_kabupaten_kota ASC');
        return results;
    },

    getKabupatenKotaById: async (id_kabupaten_kota) => {
        const [results] = await sequelize.query('SELECT * FROM kabupaten_kota WHERE id_kabupaten_kota = ?', {
            replacements: [id_kabupaten_kota],
        });
        return results[0];
    },

    addKabupatenKota: async (kode_kabupaten_kota, nama_kabupaten_kota) => {
        const result = await sequelize.query(
            'INSERT INTO kabupaten_kota (kode_kabupaten_kota, nama_kabupaten_kota) VALUES (?, ?)',
            {
                replacements: [kode_kabupaten_kota, nama_kabupaten_kota],
            }
        );
        return result[0];
    },

    updateKabupatenKota: async (id_kabupaten_kota, kode_kabupaten_kota, nama_kabupaten_kota) => {
        const result = await sequelize.query(
            'UPDATE kabupaten_kota SET kode_kabupaten_kota = ?, nama_kabupaten_kota = ? WHERE id_kabupaten_kota = ?',
            {
                replacements: [kode_kabupaten_kota, nama_kabupaten_kota, id_kabupaten_kota],
            }
        );
        return result[0];
    },

    getKabupatenKotaCount: async () => {
        const [results] = await sequelize.query('SELECT COUNT(*) AS count FROM kabupaten_kota');
        return results[0].count;
    }
};

export default KabupatenKota;
