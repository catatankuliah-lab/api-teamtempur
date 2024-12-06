import express from 'express';
import cors from 'cors';
import sequelize from './config/config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.post('/webhook', (req, res) => {
    if (req.body.ref === 'refs/heads/main') {
        exec('sh /home/api-teamtempur/htdocs/api.teamtempur.delapandelapanlogistics.com/deploy.sh', (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${stderr}`);
                return res.status(500).send('Deployment failed');
            }
            console.log(`Output: ${stdout}`);
            res.status(200).send('Deployment succeeded');
        });
    } else {
        res.status(200).send('No deployment needed');
    }
});

const init = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database.');
        await sequelize.sync();
        console.log('Database & tables created!');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

init();
