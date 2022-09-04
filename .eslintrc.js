module.exports = {
    extends: ["react-app"], //继承的规则  安装eslint-config-react-app
    parserOptions:{
        babelOptions:{
            presets:[
                ["babel-preset-react-app",false],  //安装babel-preset-react-app
                "babel-preset-react-app/prod"
            ]
        }
    }
};



// module.exports = {
//     extends: "eslint:recommended", //继承的规则
//     parserOptions: {       
//         "ecmaVersion": 11,         //这两项开启才支持import动态导入
//         "sourceType": "module",
//         "ecmaFeatures": {
//             "jsx": true
//         },
//     },
//     env: {
//       "browser": true,
//       "node": true,
//       "es6": true,                //这两项开启才支持import动态导入
//     },
//     rules: {
//         "semi": "error",
//         "no-console": "off",
//     }
// };