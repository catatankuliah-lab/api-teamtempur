import sequelize from '../config/config.js';

const Customer = {
    getAllCustomers: async () => {
        const [results] = await sequelize.query('SELECT * FROM customer ORDER BY nama_customer ASC');
        return results;
    },

    getCustomerById: async (id_customer) => {
        const [results] = await sequelize.query('SELECT * FROM customer WHERE id_customer = ?', {
            replacements: [id_customer],
        });
        return results[0];
    },

    addCustomer: async (nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order) => {
        const result = await sequelize.query(
            'INSERT INTO customer (nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order) VALUES (?, ?, ?, ?, ?)',
            {
                replacements: [nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order],
            }
        );
        return result[0];
    },

    updateCustomer: async (id_customer, nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order) => {
        const result = await sequelize.query(
            'UPDATE customer SET nama_customer = ?, alamat_customer = ?, penanggung_jawab_customer = ?, nomor_penanggung_jawab_customer = ?, jumlah_order = ? WHERE id_customer = ?',
            {
                replacements: [nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order, id_customer],
            }
        );
        return result[0];
    },

    deleteCustomer: async (id_customer) => {
        const result = await sequelize.query(
            'DELETE FROM customer WHERE id_customer = ?',
            {
                replacements: [id_customer],
            }
        );
        return result[0];
    },

    getCustomerCount: async () => {
        const [results] = await sequelize.query('SELECT COUNT(*) AS count FROM customer');
        return results[0].count;
    }
};

export default Customer;
