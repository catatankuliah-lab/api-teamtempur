import sequelize from '../config/config.js';

const POModel = {
    getAllPO: async () => {
        const [results] = await sequelize.query(`
            SELECT po.*, 
                   customer.*, 
                   armada.*, 
                   driver.*, 
                   kantor.*,
                   kabupaten_kota.*,
                   jenis_kendaraan.*,
                   user.nama_lengkap
            FROM po
            LEFT JOIN customer ON po.id_customer = customer.id_customer
            LEFT JOIN armada ON po.id_armada = armada.id_armada
            LEFT JOIN driver ON po.id_driver = driver.id_driver
            LEFT JOIN kantor ON po.id_kantor = kantor.id_kantor
            LEFT JOIN kabupaten_kota ON po.id_kabupaten_kota = kabupaten_kota.id_kabupaten_kota
            LEFT JOIN jenis_kendaraan ON armada.id_jenis_kendaraan = jenis_kendaraan.id_jenis_kendaraan
            LEFT JOIN user ON driver.id_user = user.id_user
            ORDER BY po.tanggal_po DESC, po.jam_muat DESC
        `);
        return results;
    },

    getPOById: async (id_po) => {
        const [results] = await sequelize.query(`
            SELECT po.*, 
                   customer.*, 
                   armada.*, 
                   driver.*, 
                   kantor.*,
                   kabupaten_kota.*,
                   jenis_kendaraan.*,
                   user.nama_lengkap
            FROM po
            LEFT JOIN customer ON po.id_customer = customer.id_customer
            LEFT JOIN armada ON po.id_armada = armada.id_armada
            LEFT JOIN driver ON po.id_driver = driver.id_driver
            LEFT JOIN kantor ON po.id_kantor = kantor.id_kantor
            LEFT JOIN kabupaten_kota ON po.id_kabupaten_kota = kabupaten_kota.id_kabupaten_kota
            LEFT JOIN jenis_kendaraan ON armada.id_jenis_kendaraan = jenis_kendaraan.id_jenis_kendaraan
            LEFT JOIN user ON driver.id_user = user.id_user
            WHERE po.id_po = ?
        `, {
            replacements: [id_po],
        });
        return results[0];
    },

    addPO: async (data) => {
        const {
            tanggal_po, jam_muat, id_customer, id_armada, id_driver, id_kantor,
            status_po, jarak_isi, jarak_kosong, jam_tunggu, gaji_driver, e_toll, keterangan_rute, id_kabupaten_kota, tonase
        } = data;

        const result = await sequelize.query(`
            INSERT INTO po (
                tanggal_po, jam_muat, id_customer, id_armada, id_driver, id_kantor,
                status_po, jarak_isi, jarak_kosong, jam_tunggu, gaji_driver, e_toll, keterangan_rute, id_kabupaten_kota, tonase
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, {
            replacements: [
                tanggal_po, jam_muat, id_customer, id_armada, id_driver, id_kantor,
                status_po, jarak_isi, jarak_kosong, jam_tunggu, gaji_driver, e_toll, keterangan_rute, id_kabupaten_kota, tonase
            ],
        });
        return result[0];
    },

    updatePO: async (id_po, data) => {
        const {
            tanggal_po, jam_muat, id_customer, id_armada, id_driver, id_kantor,
            status_po, jarak_isi, jarak_kosong, jam_tunggu, gaji_driver, e_toll, keterangan_rute, id_kabupaten_kota, tonase
        } = data;

        const result = await sequelize.query(`
            UPDATE po
            SET tanggal_po = ?, jam_muat = ?, id_customer = ?, id_armada = ?, id_driver = ?, id_kantor = ?,
                status_po = ?, jarak_isi = ?, jarak_kosong = ?, jam_tunggu = ?, gaji_driver = ?, e_toll = ?, keterangan_rute = ? , id_kabupaten_kota = ?, tonase = ?
            WHERE id_po = ?
        `, {
            replacements: [
                tanggal_po, jam_muat, id_customer, id_armada, id_driver, id_kantor,
                status_po, jarak_isi, jarak_kosong, jam_tunggu, gaji_driver, e_toll, keterangan_rute, id_kabupaten_kota, tonase,
                id_po
            ],
        });
        return result[0];
    },

    deletePO: async (id_po) => {
        const result = await sequelize.query('DELETE FROM po WHERE id_po = ?', {
            replacements: [id_po],
        });
        return result[0];
    }
};

export default POModel;
