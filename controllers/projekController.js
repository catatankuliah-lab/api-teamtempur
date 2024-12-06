import Projek from "../models/ProjekModel.js";

export const getAllProjek = async (req, res) => {
  try {
    const projek = await Projek.getAllProjek();
    res.status(200).json({
      status: "success",
      data: projek,
      message: "Projek retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching projek:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const createProjek = async (req, res) => {
  const { nama_projek, deskripsi_projek, status_projek } = req.body;

  if (!nama_projek || !deskripsi_projek || !status_projek) {
    return res.status(400).json({
      status: "error",
      message:
        "All fields (nama_projek, deskripsi_projek, status_projek) are required.",
    });
  }

  try {
    const result = await Projek.addProjek(
      nama_projek,
      deskripsi_projek,
      status_projek
    );
    res.status(201).json({
      status: "success",
      data: {
        id_projek: result.insertId,
        nama_projek,
        deskripsi_projek,
        status_projek,
      },
      message: "Projek created successfully.",
    });
  } catch (error) {
    console.error("Error creating projek:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const updateProjek = async (req, res) => {
  const { id_projek } = req.params;
  const { nama_projek, deskripsi_projek, status_projek } = req.body;

  if (!nama_projek || !deskripsi_projek || !status_projek) {
    return res.status(400).json({
      status: "error",
      message:
        "All fields (nama_projek, deskripsi_projek, status_projek) are required.",
    });
  }

  try {
    await Projek.updateProjek(
      id_projek,
      nama_projek,
      deskripsi_projek,
      status_projek
    );
    res.status(200).json({
      status: "success",
      message: "Projek updated successfully.",
    });
  } catch (error) {
    console.error("Error updating projek:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const deleteProjek = async (req, res) => {
  const { id_projek } = req.params;

  try {
    await Projek.deleteProjek(id_projek);
    res.status(200).json({
      status: "success",
      message: "Projek deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting projek:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
