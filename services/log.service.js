import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.bgRed(" ERROR " + " " + err));
};
const printSuccess = (err) => {
  console.log(chalk.bgGreen(" SUCCESS " + " " + err));
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HEPL ")} 
        Без параметров - вывод погоды
        -c [CITY] для установки города
        -h для вывода помощи
        -t [API] для сохоранения токена
        `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(" WEATHER ")} Погода в городе ${res.name} 
        ${icon}   ${res.weather[0].description}
        Температура: ${res.main.temp} (ощущаетася как ${res.main.feels_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}
        `
  );
};
export { printError, printSuccess, printHelp, printWeather };
