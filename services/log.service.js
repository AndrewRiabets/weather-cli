import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (err) => {
    console.log(chalk.bgRed(" ERROR " + ' ' + err))
}
const printSuccess = (err) => {
    console.log(chalk.bgGreen(" ERROR " + ' ' + err))
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HEPL ')} 
        Без параметров - вывод погоды
        -c [CITY] для установки города
        -h для вывода помощи
        -t [API] для сохоранения токена
        `
    )
}

export {printError, printSuccess, printHelp}