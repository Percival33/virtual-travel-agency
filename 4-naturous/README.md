## API Docs

[api docs](https://documenter.getpostman.com/view/19887252/2s935vn19F)

## Deployment `config.env`

```bash
cp config.template.env config.env
```

and fill in your credentials

#### Remember!

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
