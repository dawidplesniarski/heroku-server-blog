const config = {
  // databaseUrl: 'mongodb+srv://dawidplesniarski:12345@cluster0-c4nxf.mongodb.net/test?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tai:taitai1@ds147180.mlab.com:47180/tai',
  JwtSecret: 'ajuwhqywekqwe12'
}
export default config
