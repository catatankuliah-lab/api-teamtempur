import KabupatenKota from '../models/KabupatenKotaModel.js';

export const getAllKabupatenKota = async (req, res) => {
    try {
        const kabupatenKota = await KabupatenKota.getAllKabupatenKota();
        res.json({
            status: 'success',
            data: kabupatenKota,
            message: 'Kabupaten/Kota fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching Kabupaten/Kota data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getKabupatenKotaById = async (req, res) => {
    const { id_kabupaten_kota } = req.params;
    try {
        const kabupatenKotaData = await KabupatenKota.getKabupatenKotaById(id_kabupaten_kota);
        if (!kabupatenKotaData) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Kabupaten/Kota not found.'
            });
        }
        res.json({
            status: 'success',
            data: kabupatenKotaData,
            message: 'Kabupaten/Kota data fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching Kabupaten/Kota data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const createKabupatenKota = async (req, res) => {
    const { kode_kabupaten_kota, nama_kabupaten_kota } = req.body;

    try {
        await KabupatenKota.addKabupatenKota(kode_kabupaten_kota, nama_kabupaten_kota);
        res.status(201).json({
            status: 'success',
            data: { kode_kabupaten_kota, nama_kabupaten_kota },
            message: 'Kabupaten/Kota created successfully.'
        });
    } catch (error) {
        console.error('Error creating Kabupaten/Kota:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const updateKabupatenKota = async (req, res) => {
    const { id_kabupaten_kota } = req.params;
    const { kode_kabupaten_kota, nama_kabupaten_kota } = req.body;

    try {
        const result = await KabupatenKota.updateKabupatenKota(id_kabupaten_kota, kode_kabupaten_kota, nama_kabupaten_kota);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Kabupaten/Kota not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Kabupaten/Kota updated successfully.'
        });
    } catch (error) {
        console.error('Error updating Kabupaten/Kota:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getKabupatenKotaCount = async (req, res) => {
    try {
        const count = await KabupatenKota.getKabupatenKotaCount();
        res.json({
            status: 'success',
            data: { count },
            message: 'Kabupaten/Kota count fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching Kabupaten/Kota count:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};
