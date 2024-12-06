import Customer from '../models/CustomerModel.js';

export const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.getAllCustomers();
        res.json({
            status: 'success',
            data: customers,
            message: 'Customers fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching customers data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getCustomerById = async (req, res) => {
    const { id_customer } = req.params;
    try {
        const customerData = await Customer.getCustomerById(id_customer);
        if (!customerData) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Customer not found.'
            });
        }
        res.json({
            status: 'success',
            data: customerData,
            message: 'Customer data fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching customer data:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const createCustomer = async (req, res) => {
    const { nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order } = req.body;

    try {
        await Customer.addCustomer(nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order);
        res.status(201).json({
            status: 'success',
            data: { nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order },
            message: 'Customer created successfully.'
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const updateCustomer = async (req, res) => {
    const { id_customer } = req.params;
    const { nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order } = req.body;

    try {
        const result = await Customer.updateCustomer(id_customer, nama_customer, alamat_customer, penanggung_jawab_customer, nomor_penanggung_jawab_customer, jumlah_order);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Customer not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Customer updated successfully.'
        });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const deleteCustomer = async (req, res) => {
    const { id_customer } = req.params;

    try {
        const result = await Customer.deleteCustomer(id_customer);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Customer not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Customer deleted successfully.'
        });
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getCustomerCount = async (req, res) => {
    try {
        const count = await Customer.getCustomerCount();
        res.json({
            status: 'success',
            data: { count },
            message: 'Customer count fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching customer count:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};
