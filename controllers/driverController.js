import Driver from '../models/DriverModel.js';

export const getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.getAllDrivers();
        res.json({
            status: 'success',
            data: drivers,
            message: 'Drivers fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching drivers data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getDriverById = async (req, res) => {
    const { id_driver } = req.params;
    try {
        const driverData = await Driver.getDriverById(id_driver);
        if (!driverData) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Driver not found.'
            });
        }
        res.json({
            status: 'success',
            data: driverData,
            message: 'Driver data fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching driver data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const createDriver = async (req, res) => {
    const foto_ktp_driver = req.files['foto_ktp_driver'][0].filename;
    const foto_sim_driver = req.files['foto_sim_driver'][0].filename;
    const {
        id_user,
        id_vendor,
        nik,
        telpon_driver,
        nama_kontak_darurat_driver,
        telpon_kontak_darurat_driver,
        masa_berlaku_sim,
        status_driver
    } = req.body;

    try {
        await Driver.addDriver(
            id_user,
            id_vendor,
            nik,
            telpon_driver,
            nama_kontak_darurat_driver,
            telpon_kontak_darurat_driver,
            masa_berlaku_sim,
            foto_ktp_driver,
            foto_sim_driver,
            status_driver
        );
        res.status(201).json({
            status: 'success',
            data: { id_user },
            message: 'Driver created successfully.'
        });
    } catch (error) {
        console.error('Error creating driver:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const updateDriver = async (req, res) => {
    const { id_driver } = req.params;
    const {
        id_user, id_vendor, nik, telpon_driver, nama_kontak_darurat_driver,
        telpon_kontak_darurat_driver, masa_berlaku_sim, foto_driver, foto_ktp_driver,
        foto_sim_driver, status_driver
    } = req.body;

    try {
        const result = await Driver.updateDriver(
            id_driver, id_user, id_vendor, nik, telpon_driver, nama_kontak_darurat_driver,
            telpon_kontak_darurat_driver, masa_berlaku_sim, foto_driver, foto_ktp_driver,
            foto_sim_driver, status_driver
        );
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Driver not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Driver updated successfully.'
        });
    } catch (error) {
        console.error('Error updating driver:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const deleteDriver = async (req, res) => {
    const { id_driver } = req.params;

    try {
        const result = await Driver.deleteDriver(id_driver);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Driver not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Driver deleted successfully.'
        });
    } catch (error) {
        console.error('Error deleting driver:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getDriverCount = async (req, res) => {
    try {
        const count = await Driver.getDriverCount();
        res.json({
            status: 'success',
            data: { count },
            message: 'Driver count fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching driver count:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const searchDriverByName = async (req, res) => {
    const { nama_lengkap } = req.query;
    try {
        const drivers = await Driver.searchDriverByName(nama_lengkap);
        const responseData = Array.isArray(drivers) ? drivers : [drivers];
        res.json({
            status: 'success',
            data: responseData,
            message: 'Drivers fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching drivers data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};
