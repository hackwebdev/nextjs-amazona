https://github.com/basir/next-amazona

### Material UI

https://mui.com/
npm install @material-ui/core

rfc - react functional component
nih - import Head
nuh - use Head

Destructure
const { main, navbar, footer } = classes
instead of

- classes.main
- classes.navbar

### Note:

- I did not "Fix material-ui SSR issue"

### Mock data

utils/data.js
const data = {
products: [
{....

used in a map
data.products.map(product=>())

### Router

- product/[slug].js
- To get the slug value:
  - console.log(router)
  - const { slug } = router.query

### Mongo DB

- Run mongodb
  - $ mongodb
- Run compass
  - $ compass
    admin/Bernardo

### Products API

Data seeded to mongoDB database:
http://localhost:3000/api/seed

### Seed

localhost:3000/api/seed

### Lesson 22

error line 12 Store.js
Fix:
$ npm i js-cookie@2.2.1
