import sequelize from '../config/config.js';

const Vendor = {
    getAllVendors: async () => {
        const [results] = await sequelize.query('SELECT * FROM vendor ORDER BY nama_vendor ASC');
        return results;
    },

    getVendorById: async (id_vendor) => {
        const [results] = await sequelize.query('SELECT * FROM vendor WHERE id_vendor = ?', {
            replacements: [id_vendor],
        });
        return results[0];
    },

    addVendor: async (nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor) => {
        const result = await sequelize.query(
            'INSERT INTO vendor (nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor) VALUES (?, ?, ?, ?)',
            {
                replacements: [nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor],
            }
        );
        return result[0];
    },

    updateVendor: async (id_vendor, nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor) => {
        const result = await sequelize.query(
            'UPDATE vendor SET nama_vendor = ?, alamat_vendor = ?, koordinator_vendor = ?, telpon_koordinator_vendor = ? WHERE id_vendor = ?',
            {
                replacements: [nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor, id_vendor],
            }
        );
        return result[0];
    },

    getVendorCount: async () => {
        const [results] = await sequelize.query('SELECT COUNT(*) AS count FROM vendor');
        return results[0].count;
    }
};

export default Vendor;
