import User from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json({
      status: "success",
      data: users,
      message: "Users retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const createUser = async (req, res) => {
  const { id_role, username, password, nama_user } = req.body;

  if (!id_role || !username || !password || !nama_user) {
    return res.status(400).json({
      status: "error",
      message:
        "All fields are required: id_role, username, password, nama_user.",
    });
  }

  try {
    const result = await User.addUser(id_role, username, password, nama_user);
    res.status(201).json({
      status: "success",
      data: { id: result.insertId, id_role, username, nama_user },
      message: "User created successfully.",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const updateUser = async (req, res) => {
  const { id_user } = req.params;
  const { id_role, username, password, nama_user } = req.body;

  if (!id_role || !username || !password || !nama_user) {
    return res.status(400).json({
      status: "error",
      message:
        "All fields are required: id_role, username, password, nama_user.",
    });
  }

  try {
    await User.updateUser(id_user, id_role, username, password, nama_user);
    res.status(200).json({
      status: "success",
      message: "User updated successfully.",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id_user } = req.params;

  try {
    await User.deleteUser(id_user);
    res.status(200).json({
      status: "success",
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
