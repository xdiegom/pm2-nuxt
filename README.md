# QUESTION

Is it possible to define environment variables in the pm2 file `ecosystem.config.cjs` and start a Nuxt app with `pm2 start` in such a way that PM2 can override the environment variables that have been embedded into the `./output` directory as a result of the project being built with `npx nuxi build` or `npm run build`?

# EXECUTION

1. Clone the repo:

```sh
git clone https://github.com/xdiegom/pm2-nuxt
```

2. Duplicate `.env.example` file and rename it to `.env` in the root directory.

3. Install and build Nuxt app

```sh
> npm install
> npm run build
```

4. Execute one of the options to test PM2

⚠️ Before running each options, make sure that if you run Option 1, kill or stop the process before running Option 2 with `pm2 kill` or `pm2 stop pm2-app` respectively.

Inside the root directory of the project in the terminal, run the following PM2 options to test the application:

- Option 1

**Expectation**: When running nuxt app in with the following command, the expected value to see when visiting http://localhost:3000 is `DEV_YOLO`.
It keeps showing `YOLO`

```sh
# Failed testing, expecting NUXT use `env` NUXT_FOO_KEY=DEV_YOLO
> pm2 start ecosystem.config.cjs
```

- Option 2

**Expectation**: When running nuxt app in with the following command, the expected value to see when visiting http://localhost:3000 is `PROD_YOLO`.
It keeps showing `YOLO`

```sh
# Failed testing, expecting NUXT use pm2 `env` NUXT_FOO_KEY=PROD_YOLO
> pm2 start ecosystem.config.cjs --env production
```
