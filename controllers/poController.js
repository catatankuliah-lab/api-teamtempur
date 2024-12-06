import POModel from '../models/POModel.js';

export const getAllPO = async (req, res) => {
    try {
        const poList = await POModel.getAllPO();
        res.json({
            status: 'success',
            data: poList,
            message: 'Purchase orders fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching purchase orders:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const getPOById = async (req, res) => {
    const { id_po } = req.params;
    try {
        const poData = await POModel.getPOById(id_po);
        if (!poData) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Purchase order not found.'
            });
        }
        res.json({
            status: 'success',
            data: poData,
            message: 'Purchase order fetched successfully.'
        });
    } catch (error) {
        console.error('Error fetching purchase order:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const createPO = async (req, res) => {
    const poData = req.body;
    try {
        await POModel.addPO(poData);
        res.status(201).json({
            status: 'success',
            data: poData,
            message: 'Purchase order created successfully.'
        });
    } catch (error) {
        console.error('Error creating purchase order:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const updatePO = async (req, res) => {
    const { id_po } = req.params;
    const poData = req.body;
    try {
        const result = await POModel.updatePO(id_po, poData);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Purchase order not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Purchase order updated successfully.'
        });
    } catch (error) {
        console.error('Error updating purchase order:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};

export const deletePO = async (req, res) => {
    const { id_po } = req.params;
    try {
        const result = await POModel.deletePO(id_po);
        if (result === 0) {
            return res.status(404).json({
                status: 'error',
                data: null,
                message: 'Purchase order not found.'
            });
        }
        res.json({
            status: 'success',
            data: null,
            message: 'Purchase order deleted successfully.'
        });
    } catch (error) {
        console.error('Error deleting purchase order:', error);
        res.status(500).json({
            status: 'error',
            data: null,
            message: 'Internal Server Error'
        });
    }
};
