const jestConfig = {
    verbose: true,
    testURL: "http://localhost/",
    'transform': {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/*.js?(x)'],
    preset: "@vue/cli-plugin-unit-jest",
    transformIgnorePatterns: ["node_modules/(?!axios)"]
}

module.exports = jestConfig