interface Iconfig {
  port: number;
  cors: object;
  websocket: object;
  tokenExpiresIn: number;
}

const cors = {
  origin: process.env.CORS_ORIGIN,
  methods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
  credentials: Boolean(process.env.CORS_CREDENTIALS) || true,
};

const config: Iconfig = {
  port: Number(process.env.PORT) || 3000,
  cors,
  websocket: {
    transports: ["websocket", "WebTransport"],
    cors,
  },
  tokenExpiresIn: Number(process.env.TOKEN_EXPIRES_IN) || 8,
};

export default config;
