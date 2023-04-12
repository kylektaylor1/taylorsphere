/** @type {import("prettier").Config} */
module.exports = {
    bracketSpacing: true,
    printWidth: 80,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    endOfLine: 'auto',
    singleAttributePerLine: true,
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
