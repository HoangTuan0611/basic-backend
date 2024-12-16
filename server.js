require('dotenv').config(); 
const app = require('./app'); 
const { connectDB, sequelize } = require('./config/db');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
      await connectDB(); 
      await sequelize.sync({ alter: true });
      app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
      });
  } catch (err) {
      console.error('Failed to start server:', err.message);
  }
};

startServer();
