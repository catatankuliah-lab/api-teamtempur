import Role from '../models/RoleModel.js';


export const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.getAllRoles();
        res.status(200).json({
            status: "success",
            data: roles,
            message: "Roles retrieved successfully."
        });
    } catch (error) {
        console.error('Error fetching roles:', error);
        res.status(500).json({
            status: "error",
            message: 'Internal Server Error'
        });
    }
};


export const createRole = async (req, res) => {
    const { nama_role, keterangan_role } = req.body;

    try {
        const result = await Role.addRole(nama_role, keterangan_role);
        res.status(201).json({
            status: "success",
            data: { id: result.insertId, nama_role, keterangan_role },
            message: 'Role created successfully.'
        });
    } catch (error) {
        console.error('Error creating role:', error);
        res.status(500).json({
            status: "error",
            message: 'Internal Server Error'
        });
    }
};


export const updateRole = async (req, res) => {
    const { id_role } = req.params;
    const { nama_role, keterangan_role } = req.body;

    try {
        await Role.updateRole(id_role, nama_role, keterangan_role);
        res.status(200).json({
            status: "success",
            message: 'Role updated successfully.'
        });
    } catch (error) {
        console.error('Error updating role:', error);
        res.status(500).json({
            status: "error",
            message: 'Internal Server Error'
        });
    }
};


export const deleteRole = async (req, res) => {
    const { id_role } = req.params;

    try {
        await Role.deleteRole(id_role);
        res.status(200).json({
            status: "success",
            message: 'Role deleted successfully.'
        });
    } catch (error) {
        console.error('Error deleting role:', error);
        res.status(500).json({
            status: "error",
            message: 'Internal Server Error'
        });
    }
};
