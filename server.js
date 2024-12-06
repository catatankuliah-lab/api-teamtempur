import express from 'express';
import cors from 'cors';
import sequelize from './config/config.js';
import authRoutes from './routes/authRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import userRoutes from './routes/userRoutes.js';
import vendorRoutes from './routes/vendorRoutes.js';
import armadaRoutes from './routes/armadaRoutes.js';
import jenisKendaraanRoutes from './routes/jenisKendaraanRoutes.js';
import driverRoutes from './routes/driverRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import kantorRoutes from './routes/kantorRoutes.js';
import poRoutes from './routes/poRoutes.js';
import kabupatenKotaRoutes from './routes/kabupatenKotaRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3001', // Sesuaikan dengan URL frontend kamu
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Sesuaikan metode yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Sesuaikan headers yang diizinkan
}));

app.use(express.json());

const init = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database.');
        await sequelize.sync();
        console.log('Database & tables created!');
        app.use('/api', authRoutes);
        app.use('/api', roleRoutes);
        app.use('/api', userRoutes);
        app.use('/api', vendorRoutes);
        app.use('/api', armadaRoutes);
        app.use('/api', jenisKendaraanRoutes);
        app.use('/api', driverRoutes);
        app.use('/api', customerRoutes);
        app.use('/api', kantorRoutes);
        app.use('/api', poRoutes);
        app.use('/api', kabupatenKotaRoutes);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

init();
