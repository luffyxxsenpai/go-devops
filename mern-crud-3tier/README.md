# backend

- rename the `.env-sample` to `.env` 
- get your mono-db url from localhost or atlas
- update the env with correct values 

- to start
  - 'yarn run dev'

- DB will be listening on port `7000` by default

# frontend

- to start
  - 'yarn start'

- it will be running on port `3000` and listening backend on `7000` by default

- to build
  - `yarn build`


# docker
- if you are using this with docker-compose, the frontend would be running on port `3000` in nginx

- `docker-compose up --build --remove-orphans` to run and `-d` for detached mode

- i have removed the env support in frontend cause i dont't know how can i import the env in nginx containers

- so the url path is hard coded and if you need to change the **port** or **backend-url**, edit the

  - frontend/src/components/Create.jsx
  - frontend/src/components/Read.jsx
  - frontend/src/components/Update.jsx


