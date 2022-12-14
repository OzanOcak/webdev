## Creating node.js server with typescript

```console
npm init -y
touch index.js
node index.js
```

this will give error because we need add **"type":"module"** indo package.json in roder to use es module.

```console
yarn add -D typescript nodemon @types/express @types/node
mkdir src dist
touch tsconfig.json     //tsc --init
```

we need to set up compiler's options

```json
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc -w & nodemon dist/index.js"
  },
```

we need add "build": "tsc" into package.json in order to compile the js code
now we can directly code ts file within src folde for convenience

```json
"compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "dist",
  },
  "include": ["src/**/*"],
```

And Finally **yarn build** command will generate js file unde dist folder

```console
yarn build
yarn serve
curl http://localhost:5000
```

We can code typescript now to compile it to js later.

```javascript
import express, { Express, Request, Response } from "express";

const PORT = 5000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});
app.get("/bonjour", (req: Request, res: Response) => {
  res.send("Bonjour my french");
});

app.listen(PORT, () => {
  console.log(`server is listening port ${PORT}`);
});
```
