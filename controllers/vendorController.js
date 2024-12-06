import Vendor from '../models/VendorModel.js';

export const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.getAllVendors();
        res.json({
            status: 'success',
            data: vendors,
            message: 'Vendors fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching vendors data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getVendorById = async (req, res) => {
    const { id_vendor } = req.params;
    try {
        const vendorData = await Vendor.getVendorById(id_vendor);
        if (!vendorData) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Vendor not found.'
            });
        }
        res.json({
            status: 'success',
            data: vendorData,
            message: 'Vendor data fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching vendor data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const createVendor = async (req, res) => {
    const { nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor } = req.body;

    try {
        await Vendor.addVendor(nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor);
        res.status(201).json({
            status: 'success',
            data: { nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor },
            message: 'Vendor created successfully.'
        });
    } catch (error) {
        console.error('Error creating vendor:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const updateVendor = async (req, res) => {
    const { id_vendor } = req.params;
    const { nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor } = req.body;

    try {
        const result = await Vendor.updateVendor(id_vendor, nama_vendor, alamat_vendor, koordinator_vendor, telpon_koordinator_vendor);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Vendor not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Vendor updated successfully.'
        });
    } catch (error) {
        console.error('Error updating vendor:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getVendorCount = async (req, res) => {
    try {
        const count = await Vendor.getVendorCount();
        res.json({
            status: 'success',
            data: { count },
            message: 'Vendor count fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching vendor count:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const searchVendorByName = async (req, res) => {
    const { nama_vendor } = req.query;
    try {
        const vendors = await Vendor.searchVendorByName(nama_vendor);
        const responseData = Array.isArray(vendors) ? vendors : [vendors];
        res.json({
            status: 'success',
            data: responseData,
            message: 'Vendors fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching vendors data:', error);
        res.status(500).json({
            status: 'error',
            data: '',
            message: 'Internal Server Error'
        });
    }
};
