# Node & Express & MongoDB Rest API Boilerplate

Hi there, this is a boilerplate project (backend & db) for building web apps using node.js, express.js, mongoose (mongodb), slug, requireDir, winston (logger), cors, lodash.

This is a basic API skeleton written in JavaScript ES6+. Easy to build a REST APIs for your JavaScript frameworks such as Vue, React, Angular and more.

This is the really beginning of this boilerplate and still ongoing. This will be used for next MEVN Stack projects.

## Used Packages
Express.js, mongoose, requireDir, slug, winston, cors, bcryptjs, jsonwebtoken, lodash

## .env File
Create an .env file and write this into it:

```
NODE_ENV = development
DB_URL = mongodb://localhost/nemrab
API_PREFIX = /api/v1.0.0/
AUTH_SECRET = YourCustomSecretString
API_PORT = 3000
```

## Examples
POST http://localhost:3000/api/v1.0.0/posts

```
{
    "title": "first post",
    "description": "it is the first post of our Rest API"
}
```