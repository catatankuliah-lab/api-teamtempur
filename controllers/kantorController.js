import KantorModel from '../models/KantorModel.js';

export const getAllKantorCabang = async (req, res) => {
    try {
        const kantorCabang = await KantorModel.getAllKantorCabang();
        res.json({
            status: 'success',
            data: kantorCabang,
            message: 'Kantor cabang fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching kantor cabang data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getKantorCabangById = async (req, res) => {
    const { id_kantor } = req.params;
    try {
        const kantorCabangData = await KantorModel.getKantorCabangById(id_kantor);
        if (!kantorCabangData) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Kantor cabang not found.'
            });
        }
        res.json({
            status: 'success',
            data: kantorCabangData,
            message: 'Kantor cabang data fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching kantor cabang data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const createKantorCabang = async (req, res) => {
    const { nama_kantor, jumlah_transaksi, poin } = req.body;

    try {
        await KantorModel.addKantorCabang(nama_kantor, jumlah_transaksi, poin);
        res.status(201).json({
            status: 'success',
            data: { nama_kantor, jumlah_transaksi, poin },
            message: 'Kantor cabang created successfully.'
        });
    } catch (error) {
        console.error('Error creating kantor cabang:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const updateKantorCabang = async (req, res) => {
    const { id_kantor } = req.params;
    const { nama_kantor, jumlah_transaksi, poin } = req.body;

    try {
        const result = await KantorModel.updateKantorCabang(id_kantor, nama_kantor, jumlah_transaksi, poin);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Kantor cabang not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Kantor cabang updated successfully.'
        });
    } catch (error) {
        console.error('Error updating kantor cabang:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getKantorCabangCount = async (req, res) => {
    try {
        const count = await KantorModel.getKantorCabangCount();
        res.json({
            status: 'success',
            data: { count },
            message: 'Kantor cabang count fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching kantor cabang count:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const deleteKantorCabang = async (req, res) => {
    const { id_kantor } = req.params;
    try {
        const result = await KantorModel.deleteKantorCabang(id_kantor);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Kantor cabang not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Kantor cabang deleted successfully.'
        });
    } catch (error) {
        console.error('Error deleting kantor cabang:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};
