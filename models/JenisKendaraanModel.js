import sequelize from '../config/config.js';

const JenisKendaraan = {
    getAllJenisKendaraan: async () => {
        const query = `
            SELECT 
                id_jenis_kendaraan, 
                nama_jenis_kendaraan, 
                rasio_perkalian
            FROM 
                jenis_kendaraan
            ORDER BY nama_jenis_kendaraan ASC
        `;
        const [results] = await sequelize.query(query);
        return results;
    },

    getJenisKendaraanById: async (id_jenis_kendaraan) => {
        const query = `
            SELECT 
                id_jenis_kendaraan, 
                nama_jenis_kendaraan, 
                rasio_perkalian
            FROM 
                jenis_kendaraan
            WHERE 
                id_jenis_kendaraan = ?
        `;
        const [results] = await sequelize.query(query, {
            replacements: [id_jenis_kendaraan],
        });
        return results[0];
    },

    addJenisKendaraan: async (nama_jenis_kendaraan, rasio_perkalian) => {
        const query = `
            INSERT INTO jenis_kendaraan 
                (nama_jenis_kendaraan, rasio_perkalian)
            VALUES 
                (?, ?)
        `;
        const result = await sequelize.query(query, {
            replacements: [nama_jenis_kendaraan, rasio_perkalian],
        });
        return result[0];
    },

    updateJenisKendaraan: async (id_jenis_kendaraan, nama_jenis_kendaraan, rasio_perkalian) => {
        const query = `
            UPDATE jenis_kendaraan
            SET 
                nama_jenis_kendaraan = ?, 
                rasio_perkalian = ?
            WHERE 
                id_jenis_kendaraan = ?
        `;
        const result = await sequelize.query(query, {
            replacements: [nama_jenis_kendaraan, rasio_perkalian, id_jenis_kendaraan],
        });
        return result[0];
    },

    deleteJenisKendaraan: async (id_jenis_kendaraan) => {
        const query = `
            DELETE FROM jenis_kendaraan
            WHERE id_jenis_kendaraan = ?
        `;
        const result = await sequelize.query(query, {
            replacements: [id_jenis_kendaraan],
        });
        return result[0];
    },
};

export default JenisKendaraan;
