module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "amd": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "prettier",
    ],
    "rules": {
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": 'error',
        "react-hooks/exhaustive-deps": 'warn'
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
};