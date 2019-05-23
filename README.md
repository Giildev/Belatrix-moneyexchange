This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installation & Setup

`git clone https://github.com/Giildev/Belatrix-moneyexchange.git`
`yarn install`
`yarn start`

### [Demo](https://giildev.github.io/Belatrix-moneyexchange/)

_It does not work correctly for **Mixed Content**, HTTPS sending request to HTTP_ 🙁

### Decisions

● Angular / Angular JS / React / Ember

> React - I decided to use React because it is the technology that I have more experience and because it is a very popular library these days

● Webpack / Gulp / Grunt

> Webpack - `create-react-app` is already incorporated webpack

● Typescript / ES6 / ES5

> ES6 - It is currently a standard in the community and offers considerable facilities for development

● Jasmine / Jest / Enzyme / Mocka

> None

● Bootstrap / Bulma / Semantic UI/Stylus

> None

● Saas/Less/Css

> Sass | SCSS - Scss for a structure easier to read and write. at the same time combined with the BEM methodology

### Suggestions and Comments

It is mentioned that currently only the calculation of the currency must be made _Euro to Dollar_, where the ideal would be for this operation to be done bi-directionally, i.e, the input dollar will be enabled to calculate the change from _Dollar to Euro_

The standard when using numbers for finances is two decimals, in this case four decimals are required

With respect to performing a _cron_ every 10 minutes to obtain the updated value of the currency was not applied, since in this case every time the "Calculate" button is clicked a new request is made to the API, meaning in an updated data at the time of request

No technology was used for _Unit Testing_ due to low knowledge
