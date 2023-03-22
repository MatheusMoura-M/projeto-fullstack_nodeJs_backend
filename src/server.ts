import app from "./app";
import "dotenv/config";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(async () => console.log("Database connected"))
    .catch((err) => console.error(err));

  app.listen(process.env.PORT, () =>
    console.log(`Running at http://localhost:${process.env.PORT}`)
  );
})();
