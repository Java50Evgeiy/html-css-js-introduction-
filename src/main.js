mport { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-from.js";
const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
// async function displayTemperatures() {
//     const data = await dataProcessor.getTemperatureData("Tel_Aviv",
//      "2023-02-15", "2023-02-16", 14, 16);
//     console.log(data)
// }
// displayTemperatures();
const dataForm = new DataForm("form-section", weatherConfig.maxDays);