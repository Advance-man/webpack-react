module.exports = {
  presets: ["react-app"],
  plugins: ['@babel/transform-runtime']
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