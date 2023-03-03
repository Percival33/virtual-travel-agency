## API Docs

[api docs](https://documenter.getpostman.com/view/19887252/2s935vn19F)

## Deployment `config.env`

```bash
NODE_ENV=development
PORT=<port>
USER=<user>
DATABASE_PASSWORD=<db_password>
DATABASE=<db_url>

JWT_SECRET=<jwt_secret>
JWT_EXPIRES_IN=<time>
JWT_COOKIE_EXPIRES_IN=<time as a number>


EMAIL_USERNAME=<username>
EMAIL_PASSWORD=<password>
# in case of using not defined email service
EMAIL_HOST=<host>
EMAIL_PORT=<port>
EMAIL_FROM=<email addres>
```

> remember to have user:`<PASSWORD>` in `DATABASE`
> example:

```
mongodb+srv://user:<PASSWORD>@cluster/<DB_NAME>?retryWrites=true&w=majority
```

> JWT_SECRET should be at least 32 characters long

## Local development - linter

```
npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
```

## VSCode extensions

```
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```
