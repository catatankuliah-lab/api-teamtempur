import sequelize from '../config/config.js';

const Driver = {
    getAllDrivers: async () => {
        const [results] = await sequelize.query(`
        SELECT 
            driver.id_driver,
            driver.nik,
            driver.telpon_driver,
            driver.nama_kontak_darurat_driver,
            driver.telpon_kontak_darurat_driver,
            driver.masa_berlaku_sim,
            driver.foto_ktp_driver,
            driver.foto_sim_driver,
            driver.status_driver,
            user.id_user,
            user.nama_lengkap,
            vendor.id_vendor,
            vendor.nama_vendor
        FROM driver
        LEFT JOIN user ON driver.id_user = user.id_user
        LEFT JOIN vendor ON driver.id_vendor = vendor.id_vendor
        ORDER BY user.nama_lengkap ASC
    `);
        return results;
    },

    getDriverById: async (id_driver) => {
        const [results] = await sequelize.query('SELECT * FROM driver WHERE id_driver = ?', {
            replacements: [id_driver],
        });
        return results[0];
    },

    addDriver: async (id_user, id_vendor, nik, telpon_driver, nama_kontak_darurat_driver, telpon_kontak_darurat_driver, masa_berlaku_sim, foto_ktp_driver, foto_sim_driver, status_driver) => {
        const result = await sequelize.query(
            `INSERT INTO driver (id_user, id_vendor, nik, telpon_driver, nama_kontak_darurat_driver, telpon_kontak_darurat_driver, masa_berlaku_sim, foto_ktp_driver, foto_sim_driver, status_driver) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            {
                replacements: [id_user, id_vendor, nik, telpon_driver, nama_kontak_darurat_driver, telpon_kontak_darurat_driver, masa_berlaku_sim, foto_ktp_driver, foto_sim_driver, status_driver],
            }
        );
        return result[0];
    },

    updateDriver: async (id_driver, id_user, id_vendor, nik, telpon_driver, nama_kontak_darurat_driver, telpon_kontak_darurat_driver, masa_berlaku_sim, foto_ktp_driver, foto_sim_driver, status_driver) => {
        const result = await sequelize.query(
            `UPDATE driver SET id_user = ?, id_vendor = ?, nik = ?, telpon_driver = ?, nama_kontak_darurat_driver = ?, telpon_kontak_darurat_driver = ?, masa_berlaku_sim = ?, foto_ktp_driver = ?, foto_sim_driver = ?, status_driver = ? WHERE id_driver = ?`,
            {
                replacements: [id_user, id_vendor, nik, telpon_driver, nama_kontak_darurat_driver, telpon_kontak_darurat_driver, masa_berlaku_sim, foto_ktp_driver, foto_sim_driver, status_driver, id_driver],
            }
        );
        return result[0];
    },

    deleteDriver: async (id_driver) => {
        const result = await sequelize.query(
            'DELETE FROM driver WHERE id_driver = ?',
            {
                replacements: [id_driver],
            }
        );
        return result[0];
    },

    getDriverCount: async () => {
        const [results] = await sequelize.query('SELECT COUNT(*) AS count FROM driver');
        return results[0].count;
    },

    searchDriverByName: async (keyword) => {
        const [results] = await sequelize.query(
            `
        SELECT 
            driver.id_driver,
            driver.nik,
            driver.telpon_driver,
            driver.nama_kontak_darurat_driver,
            driver.telpon_kontak_darurat_driver,
            driver.masa_berlaku_sim,
            driver.foto_ktp_driver,
            driver.foto_sim_driver,
            driver.status_driver,
            user.id_user,
            user.nama_lengkap,
            vendor.id_vendor,
            vendor.nama_vendor
        FROM driver
        LEFT JOIN user ON driver.id_user = user.id_user
        LEFT JOIN vendor ON driver.id_vendor = vendor.id_vendor
        WHERE user.nama_lengkap LIKE :keyword
        AND user.id_role = 10
        `,
            {
                replacements: { keyword: `%${keyword}%` },
                type: sequelize.QueryTypes.SELECT,
            }
        );
        return results;
    }

};

export default Driver;
