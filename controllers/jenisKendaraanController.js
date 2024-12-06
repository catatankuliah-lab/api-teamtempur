import JenisKendaraan from '../models/JenisKendaraanModel.js';

export const getAllJenisKendaraan = async (req, res) => {
    try {
        const jenisKendaraan = await JenisKendaraan.getAllJenisKendaraan();
        res.json({
            status: 'success',
            data: jenisKendaraan,
            message: 'Jenis Kendaraan fetched successfully.',
        });
    } catch (error) {
        console.error('Error fetching jenis kendaraan data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error',
        });
    }
};

export const getJenisKendaraanById = async (req, res) => {
    const { id_jenis_kendaraan } = req.params;
    try {
        const jenisKendaraan = await JenisKendaraan.getJenisKendaraanById(id_jenis_kendaraan);
        if (!jenisKendaraan) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Jenis Kendaraan not found.',
            });
        }
        res.json({
            status: 'success',
            data: jenisKendaraan,
            message: 'Jenis Kendaraan fetched successfully.',
        });
    } catch (error) {
        console.error('Error fetching jenis kendaraan data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error',
        });
    }
};

export const createJenisKendaraan = async (req, res) => {
    const { nama_jenis_kendaraan, rasio_perkalian } = req.body;

    try {
        await JenisKendaraan.addJenisKendaraan(nama_jenis_kendaraan, rasio_perkalian);
        res.status(201).json({
            status: 'success',
            data: { nama_jenis_kendaraan, rasio_perkalian },
            message: 'Jenis Kendaraan created successfully.',
        });
    } catch (error) {
        console.error('Error creating jenis kendaraan:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error',
        });
    }
};

export const updateJenisKendaraan = async (req, res) => {
    const { id_jenis_kendaraan } = req.params;
    const { nama_jenis_kendaraan, rasio_perkalian } = req.body;

    try {
        const result = await JenisKendaraan.updateJenisKendaraan(id_jenis_kendaraan, nama_jenis_kendaraan, rasio_perkalian);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Jenis Kendaraan not found.',
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Jenis Kendaraan updated successfully.',
        });
    } catch (error) {
        console.error('Error updating jenis kendaraan:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error',
        });
    }
};

export const deleteJenisKendaraan = async (req, res) => {
    const { id_jenis_kendaraan } = req.params;

    try {
        const result = await JenisKendaraan.deleteJenisKendaraan(id_jenis_kendaraan);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Jenis Kendaraan not found.',
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Jenis Kendaraan deleted successfully.',
        });
    } catch (error) {
        console.error('Error deleting jenis kendaraan:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error',
        });
    }
};
