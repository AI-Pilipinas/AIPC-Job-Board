import * as fs from "fs";
import * as yaml from "yaml";

interface DatabaseConfig {
    Host: string;
    Port: number;
    DB_Username: string;
    DB_Password: string;
    DB_Name: string;
}

interface AppConfig {
  Database: DatabaseConfig;
}

// Function to load configuration from a YAML file
function loadConfig(filePath: string): AppConfig {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const config: AppConfig = yaml.parse(fileContent);

  return config;
}
const CONFIG = loadConfig("./config.yml");

export default CONFIG;