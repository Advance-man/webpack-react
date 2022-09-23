module.exports = {
  presets: ["react-app"],
  // plugins: ['@babel/transform-runtime'],
  "env":{
    "test":{
      // "plugins":["@babel/plugin-transform-modules-commonjs"]
    }
  }
};




// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         useBuiltIns:"usage",
//       }
//     ]
//   ],
//   plugins:["syntax-dynamic-import"] //支持import动态导入
// };