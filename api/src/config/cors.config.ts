import cors, { CorsOptions } from 'cors';

const originWhitelist = [
  "http://localhost:4200",
];

const corsConfig: CorsOptions = {
  origin: originWhitelist,
};

export default cors(corsConfig);
