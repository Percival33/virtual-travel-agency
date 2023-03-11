# Virtual Travel Agency

A virtual travel agency offers online booking for tours and activities, with integrated payments through Stripe. Users can also leave reviews to help others make informed decisions.

Built with modern technologies: node.js, express, mongoDB.

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

### Challenges for backend

- Implement restriction that users can only review a tour that they have actually booked;
- Implement nested booking routes: `/tours/:id/bookings` and `/users/:id/bookings`
- Improve tour dates: add a participants and a soldOut field to each
  date. A date then becomes like an instance of the tour. Then, when a user books, they need to select one of the dates. A new booking will increase the number of participants in the date, until it is booked out (participants > maxGroupSize). So, when a user wants to book, you need to check if tour on the selected date is still available;
- Implement advanced authentication features: confirm user email, keep users logged in with refresh tokens, two-factor authentication, etc.

## Challenges for frontend

- Implement a sign up from, similar to the login form;
  On the tour detail page, if a user has taken a tour, allow them add a review directly on the website. Implement a form for this;
- Hide the entire booking section on the tour detail page if current user has already booked the tour (also prevent duplicate bookings on the model);
- Implement "like tour" functionality, with favourite tour page;
- On the user account page, implement the "My Reviews" page, where all reviews are displayed, and a user can edit them.
- For administrators, implement all the "Manage" pages, where they can
  CRUD (create, read, update, delete) tours, users, reviews, and bookings.
