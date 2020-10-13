# Fullstack boilerplate

To get started:

```
git clone https://github.com/ccthompson-it/react-redux-backend.git [your-project-name]
cd [your-project-name]
npm install (to install dependencies)
npx knex migrate:latest (to create a db table)
npx knex seed:run (to populate table)
git remote set-url origin https://github.com/[YOUR USERNAME]/[YOUR REPO NAME]
npm run dev (to start the dev server)
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

This repo includes:

* a few React components, linked through a redux store (`App, Home and About`)
* a redux action and reducer
* some basic styling
* a single, simple API endpoint (`/api/v1/quotes`)
* a knex database (with a seed)
* a database module (`db.js`)
* an API client module (`apiClient.js`)
* configuration for Jest and Enzyme (including JSDOM)
* configuration for server-side debugging in VS Code
* full testing for all of the above
