# CaloriesPlanner
* Mico Hernandez
* Diana Angarita
* Abdalla Modawi
* Ali Bhatti
* Brian Vazquez

CaloriesPlanner – Easy and convenient way to track your calories and meet your goals.

CaloriesPlanner - Health

CaloriesPlanner - Track your calories.

## Design

* > [API design](docs/api.md)
* > [Integrations](docs/integration.md)

## Images

* ![About-us](/docs/Wireframe/About-us.png)
* ![Authenticated-mainpage](/docs/Wireframe/Authenticated-mainpage.png)
* ![log-a-meal](/docs/Wireframe/Log-a-meal.png)
* ![login](/docs/Wireframe/Login.png)
* ![signup](/docs/Wireframe/Signup.png)
* ![unauthenticated-mainpage](/docs/Wireframe/Unauthenticated-mainpage.png)


## Install Extensions

* Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
* Black Formatter: <https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter>

## Intended Market

We are targeting general consumers who are interested in tracking their calories and meeting their fitness goals.

## Functionality

* Visitors to the site will first be introduced to the home screen with a brief introduction to our application along with testimonials on the lower half of the screen.
  * They can click on the get started button underneath the banner to create an account in which the user will be asked to input brief information about themselves.
  * Or they can click on the login button in the Navbar if they already have an account.
  * If so inclined the user can checkout the various links in the Navbar such as the About us page. Which will introduce users to us and provide links to our respective    LinkedIn's and Gitlab profiles. Or they can click on the Contact us link which will direct the user to an email form which will allow them to get in contact with us directly.


* Once the the user creates an account they will be shown the authenticated home page.
* On this page they will be able to see a bar graph that shows your total calories for the past 7 days. Along with a line on the chart that indicated your total daily calorie goal (goals are set when the account is made). Allowing you to compare your total calories of that day and your calorie goal.
* Under the graph there is a card that shows each category (breakfast, lunch, dinner, snack) along with what was eaten that day for each category and the total calories consumed that day. If nothing was logged there will a button in place of the chart that will navigate user to the log a meal page.
* In the log a meal page the user will be greeted with two things. A button "ADD Meal Item" that when clicked will reveal a form that will allow you either look up a meal item on the USDA data base or the user can manual enter in the values for the meal. Once a meal is logged at the bottom of the page there will be a table that will show the user what they ate for the day.The user will also have the ability to filter through and see what they ate in the past as well as filter by category.



## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
4. Run `docker compose build`
5. Run `docker compose up`
8. Enjoy CaloriesPlanner to its fullest!

