import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR' + ' ' + error));
};

const printSuccess = (error) => {
    console.log(chalk.bgGreen('SUCCESS' + ' ' + error));
};

const printHelp = () => {
    console.log(
        dedent(`
        ${chalk.bgCyan('HELP')}
        Without params - out weather
        -c [CITY] city
        -h help
        -t [API_KEY] save token
        `)
    );
};

const printWeather = (res) => {
    console.log(
        dedent(`
        ${chalk.bgYellow('Weather')} Weather to city: ${res.name} ${
            res.weather[0].description
        } Temp: ${res.main?.temp} Speed wind: ${res.wind.speed}`)
    );
};

export { printError, printSuccess, printHelp, printWeather };
