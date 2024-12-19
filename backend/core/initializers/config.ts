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

// Example usage
const configFilePath = "./config.yml"; // Path to your YAML config file
const CONFIG = loadConfig(configFilePath);

export default CONFIG;