import sequelize from '../config/config.js';

const Armada = {
    getAllArmadas: async () => {
        const query = `
            SELECT 
                armada.id_armada,
                armada.id_vendor,
                vendor.nama_vendor,
                vendor.alamat_vendor,
                vendor.koordinator_vendor,
                vendor.telpon_koordinator_vendor,
                armada.id_jenis_kendaraan,
                jenis_kendaraan.nama_jenis_kendaraan,
                jenis_kendaraan.rasio_perkalian,
                armada.nopol_armada,
                armada.lokasi_terakhir,
                armada.status_armada
            FROM 
                armada
            JOIN 
                vendor ON armada.id_vendor = vendor.id_vendor
            JOIN 
                jenis_kendaraan ON armada.id_jenis_kendaraan = jenis_kendaraan.id_jenis_kendaraan
        `;
        const [results] = await sequelize.query(query);
        return results;
    },

    getArmadaById: async (id_armada) => {
        const query = `
            SELECT 
                armada.id_armada,
                armada.id_vendor,
                vendor.nama_vendor,
                vendor.alamat_vendor,
                vendor.koordinator_vendor,
                vendor.telpon_koordinator_vendor,
                armada.id_jenis_kendaraan,
                jenis_kendaraan.nama_jenis_kendaraan,
                jenis_kendaraan.rasio_perkalian,
                armada.nopol_armada,
                armada.lokasi_terakhir,
                armada.status_armada
            FROM 
                armada
            JOIN 
                vendor ON armada.id_vendor = vendor.id_vendor
            JOIN 
                jenis_kendaraan ON armada.id_jenis_kendaraan = jenis_kendaraan.id_jenis_kendaraan
            WHERE 
                armada.id_armada = ?
        `;
        const [results] = await sequelize.query(query, {
            replacements: [id_armada],
        });
        return results[0];
    },

    addArmada: async (id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada) => {
        const query = `
            INSERT INTO armada 
                (id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada)
            VALUES 
                (?, ?, ?, ?, ?)
        `;
        const result = await sequelize.query(query, {
            replacements: [id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada],
        });
        return result[0];
    },

    updateArmada: async (id_armada, id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada) => {
        const query = `
            UPDATE armada
            SET 
                id_vendor = ?, 
                id_jenis_kendaraan = ?, 
                nopol_armada = ?, 
                lokasi_terakhir = ?, 
                status_armada = ?
            WHERE 
                id_armada = ?
        `;
        const result = await sequelize.query(query, {
            replacements: [id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada, id_armada],
        });
        return result[0];
    },

    deleteArmada: async (id_armada) => {
        const query = `DELETE FROM armada WHERE id_armada = ?`;
        const result = await sequelize.query(query, {
            replacements: [id_armada],
        });
        return result[0];
    },
};

export default Armada;
