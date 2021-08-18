module.exports = {
    roots: ['<rootDir>/src', "<rootDir>/__test__/"],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}