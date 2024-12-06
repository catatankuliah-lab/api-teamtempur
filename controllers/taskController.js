import Task from "../models/TaskModel.js";

// Mendapatkan semua task
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTasks();
    res.status(200).json({
      status: "success",
      data: tasks,
      message: "Tasks retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

// Menambahkan task baru
export const createTask = async (req, res) => {
  const {
    id_projek,
    id_user,
    nama_task,
    deskripsi_task,
    tanggal_task,
    tanggal_deadline,
    status_task,
  } = req.body;

  // Validasi input
  if (
    !id_projek ||
    !id_user ||
    !nama_task ||
    !deskripsi_task ||
    !tanggal_task ||
    !tanggal_deadline ||
    !status_task
  ) {
    return res.status(400).json({
      status: "error",
      message: "All fields are required.",
    });
  }

  try {
    const result = await Task.addTask(
      id_projek,
      id_user,
      nama_task,
      deskripsi_task,
      tanggal_task,
      tanggal_deadline,
      status_task
    );
    res.status(201).json({
      status: "success",
      data: { id_task: result.insertId, ...req.body },
      message: "Task created successfully.",
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

// Mengupdate task berdasarkan id_task
export const updateTask = async (req, res) => {
  const { id_task } = req.params;
  const {
    id_projek,
    id_user,
    nama_task,
    deskripsi_task,
    tanggal_task,
    tanggal_deadline,
    status_task,
  } = req.body;

  // Validasi input
  if (
    !id_projek ||
    !id_user ||
    !nama_task ||
    !deskripsi_task ||
    !tanggal_task ||
    !tanggal_deadline ||
    !status_task
  ) {
    return res.status(400).json({
      status: "error",
      message: "All fields are required.",
    });
  }

  try {
    await Task.updateTask(
      id_task,
      id_projek,
      id_user,
      nama_task,
      deskripsi_task,
      tanggal_task,
      tanggal_deadline,
      status_task
    );
    res.status(200).json({
      status: "success",
      message: "Task updated successfully.",
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

// Menghapus task berdasarkan id_task
export const deleteTask = async (req, res) => {
  const { id_task } = req.params;

  try {
    await Task.deleteTask(id_task);
    res.status(200).json({
      status: "success",
      message: "Task deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
