# @soofka/code-examples--http-request-from-localhost
## Content
- simple application, with button to request resources via HTTP,
- Webpack-based build process,
- local server that serves data for testing purposes,
- local server with Weback Dev Server, with example of HTTP proxy,
- local server with Weback Dev Server, with example of HTTP response mock,
- local server with Express, with example of HTTP proxy,
- local server with Express, with example of HTTP response mock.

## Usage
To build an application:
```
npm run build
```

To run local server that serves data for testing purposes (prerequisite to running all further servers which use proxy):
```
npm run start:server
``` 

To run example with proxy, based on Webpack Dev Server:
```
npm run start:webpack:proxy
```

To run example with response mock, based on Webpack Dev Server:
```
npm run start:webpack:mock
```

To run example with proxy, based on Express:
```
npm run start:express:proxy
```

To run example with response mock, based on Express:
```
npm run start:express:mock
```

## Read more
For more information check [my blog](https://soofka.pl/entry/mocking-and-proxying-http-requests-from-localhost-with-webpack-dev-server-or-express).
