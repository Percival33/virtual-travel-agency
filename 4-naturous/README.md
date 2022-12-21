## config.env

```bash
NODE_ENV=development
PORT=<port>
USER=<user>
DATABASE_PASSWORD=<db_password>
DATABASE=<db_url>

JWT_SECRET=<jwt_secret>
JWT_EXPIRES_IN=<time>

EMAIL_USERNAME=<username>
EMAIL_PASSWORD=<password>
# in case of using not defined email service
EMAIL_HOST=<host>
EMAIL_PORT=<port>
```

> remember to have user:`PASSWORD` in `DATABASE`
> after host/`db_name`

> JWT_SECRET should be at least 32 characters long

## To setup linter

```
npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
```

## VSCode extensions

```
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```
