import "dotenv/config"
import app from "./src/app.js";

const PORT = 3000; //porta utilizada pelo servidor

app.listen(PORT, () => { 
    console.log("servidor escutando na porta 3000!");
});
