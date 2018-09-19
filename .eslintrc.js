module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    parserOptions: {
        ecmaVersion: 2017
    },
    globals: {
        describe: true,
        it: true,
        before: true,
        beforeEach: true,
        beforeEach: true,
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-trailing-spaces": ["error"],
        "eqeqeq": ["warn"],
        "comma-dangle": ["error", 'always-multiline'],
        "no-console": ["error"],
        "no-dupe-keys": ["error"],
        "no-irregular-whitespace": ['error'],
        "no-eval": ["error"],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    },
}