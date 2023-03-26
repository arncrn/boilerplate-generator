import app from './app';
import config from './lib/config';

const PORT = config.PORT;
const HOST = config.HOST;


app.listen(PORT, () => {
  console.log(HOST);
  console.log(`App running on port ${PORT}`);
});