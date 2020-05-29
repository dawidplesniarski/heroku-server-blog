// const config = {
//   port: process.env.PORT || 3000,
//   databaseUrl: 'mongodb+srv://dawidplesniarski:12345@cluster0-c4nxf.mongodb.net/test?retryWrites=true&w=majority',
//   JwtSecret: process.env.JWT_SERCRET || 'secret',
//
// }
// export default config
export const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tai:taitai1@ds147180.mlab.com:47180/tai',
  JwtSecret: 'ajuwhqywekqwe12'
};
