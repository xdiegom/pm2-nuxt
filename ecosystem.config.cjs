module.exports = {
  apps: [
    {
      name: "pm2-app",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      env: {
        NUXT_FOO_KEY: "DEV_YOLO",
      },
      env_production: {
        NUXT_FOO_KEY: "PROD_YOLO",
      },
    },
  ],
};
