# Node & Express & MongoDB Rest API Boilerplate

Hi there, this is a boilerplate project (backend & db) for building web apps using node.js, express.js, mongoose (mongodb), slug, requireDir and passport (not yet).

This is a basic API skeleton written in JavaScript ES6+. Easy to build a REST APIs for your JavaScript frameworks such as Vue, React, Angular and more.

This is the really beginning of this boilerplate and still ongoing.

## Used Packages
Express.js, mongoose, requireDir, slug

## .env File
Create an .env file and write this into it:

```
NODE_ENV = development
DB_URL = mongodb://localhost/nemrab
API_PREFIX = /api/v1.0.0/
```

## Examples
POST http://localhost:3000/api/v1.0.0/posts

```
{
    "title": "first post",
    "description": "it is the first post of our Rest API"
}
```