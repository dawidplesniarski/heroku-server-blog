const config = {
  port: process.env.PORT || 3000,
  databaseUrl: 'mongodb+srv://dawidplesniarski:12345@cluster0-c4nxf.mongodb.net/test?retryWrites=true&w=majority',
  JwtSecret: process.env.JWT_SERCRET || 'secret',

}
export default config
