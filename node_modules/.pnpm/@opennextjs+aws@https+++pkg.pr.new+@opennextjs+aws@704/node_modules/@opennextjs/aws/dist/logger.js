import chalk from "chalk";
let logLevel = "info";
export default {
    setLevel: (level) => (logLevel = level),
    debug: (...args) => {
        if (logLevel !== "debug")
            return;
        console.log(chalk.magenta("DEBUG"), ...args);
    },
    info: console.log,
    warn: (...args) => console.warn(chalk.yellow("WARN"), ...args),
    error: (...args) => console.error(chalk.red("ERROR"), ...args),
};
