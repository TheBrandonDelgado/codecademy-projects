# Codecademy Store
In this project, you’ll build a program that mimics Codecademy’s own online store! The application should display products from the Codecademy store and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.

This application has three slices of state:
* inventory: An array of objects representing the items that are available to purchase.
* cart: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
* currencyFilter: A string that represents the currency used to calculate the prices displayed to the user: 'USD', 'CAD' or 'EUR'.