# GO SIMPLE

- this go project will have a simple `/, /hello, /form.html, /form` path

- when compiling go projects, rembember it uses dynamic linking to use some components of glibc if required so when using base image like `alpine` or `scratch` make sure to disable dynamic linking while compiling

- we also need the static files not just the compiled binary to successfully view all the paths

### docker

- to build 
`docker build -t simpgo:1 .`
`docker run -p 8080:8080 simpgo:1`

> will listen on port 8080
