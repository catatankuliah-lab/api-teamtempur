import sequelize from "../config/config.js";

const Task = {
  // Mendapatkan semua task dengan join tabel projek dan user
  getAllTasks: async () => {
    const query = `
      SELECT t.id_task, t.nama_task, t.deskripsi_task, t.tanggal_task, t.tanggal_deadline, t.status_task, 
             p.nama_projek, u.nama_user 
      FROM task t
      JOIN projek p ON t.id_projek = p.id_projek
      JOIN user u ON t.id_user = u.id_user;
    `;
    const [results] = await sequelize.query(query);
    return results;
  },

  // Menambahkan task baru
  addTask: async (
    id_projek,
    id_user,
    nama_task,
    deskripsi_task,
    tanggal_task,
    tanggal_deadline,
    status_task
  ) => {
    const query = `
      INSERT INTO task (id_projek, id_user, nama_task, deskripsi_task, tanggal_task, tanggal_deadline, status_task)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const result = await sequelize.query(query, {
      replacements: [
        id_projek,
        id_user,
        nama_task,
        deskripsi_task,
        tanggal_task,
        tanggal_deadline,
        status_task,
      ],
    });
    return result[0]; // Mengembalikan hasil dari query
  },

  // Mengupdate task berdasarkan id_task
  updateTask: async (
    id_task,
    id_projek,
    id_user,
    nama_task,
    deskripsi_task,
    tanggal_task,
    tanggal_deadline,
    status_task
  ) => {
    const query = `
      UPDATE task 
      SET id_projek = ?, id_user = ?, nama_task = ?, deskripsi_task = ?, tanggal_task = ?, tanggal_deadline = ?, status_task = ? 
      WHERE id_task = ?
    `;
    const result = await sequelize.query(query, {
      replacements: [
        id_projek,
        id_user,
        nama_task,
        deskripsi_task,
        tanggal_task,
        tanggal_deadline,
        status_task,
        id_task,
      ],
    });
    return result[0]; // Mengembalikan hasil dari query
  },

  // Menghapus task berdasarkan id_task
  deleteTask: async (id_task) => {
    const query = `
      DELETE FROM task WHERE id_task = ?
    `;
    const result = await sequelize.query(query, {
      replacements: [id_task],
    });
    return result[0]; // Mengembalikan hasil dari query
  },
};

export default Task;
