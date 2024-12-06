import Armada from '../models/ArmadaModel.js';

export const getAllArmadas = async (req, res) => {
    try {
        const armadas = await Armada.getAllArmadas();
        res.json({
            status: 'success',
            data: armadas,
            message: 'Armadas fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching armadas data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getArmadaById = async (req, res) => {
    const { id_armada } = req.params;
    try {
        const armada = await Armada.getArmadaById(id_armada);
        if (!armada) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Armada not found.'
            });
        }
        res.json({
            status: 'success',
            data: armada,
            message: 'Armada fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching armada data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const createArmada = async (req, res) => {
    const { id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada } = req.body;

    try {
        await Armada.addArmada(id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada);
        res.status(201).json({
            status: 'success',
            data: { id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada },
            message: 'Armada created successfully.'
        });
    } catch (error) {
        console.error('Error creating armada:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const updateArmada = async (req, res) => {
    const { id_armada } = req.params;
    const { id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada } = req.body;

    try {
        const result = await Armada.updateArmada(id_armada, id_vendor, id_jenis_kendaraan, nopol_armada, lokasi_terakhir, status_armada);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Armada not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Armada updated successfully.'
        });
    } catch (error) {
        console.error('Error updating armada:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const deleteArmada = async (req, res) => {
    const { id_armada } = req.params;

    try {
        const result = await Armada.deleteArmada(id_armada);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Armada not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Armada deleted successfully.'
        });
    } catch (error) {
        console.error('Error deleting armada:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};
