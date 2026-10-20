import app from "./app.js";
import config from "./config/env.config.js";
import connectDB from "./config/db.config.js";

const startServer = async () => {
    await connectDB();

    app.listen(config.PORT, () => {
        console.log(`Servidor escuchando en el puerto ${config.PORT}`);
    });
};

startServer();