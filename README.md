## Installation
- Clone the project:
``git clone https://github.com/deck1187hw/front-end-test-midweight-ig.git``
- Open it:
``cd front-end-test-midweight-ig``
- Install the server:
``npm install webpack-dev-server -g``
- Run the server:
``webpack-dev-server``

The app will be accessible on port 8080
[localhost:8080](http://localhost:8080)

## Requirments
- Write an app like in the design provided below
- You can use Vanilla JS, Bootstrap and jQuery (included)
- On clicking __Load Git Hub Users__ the app will load a list of the latest Git Hub users, using this endpoint:
 ``https://api.github.com/users``
- The list should show the image, url, and username of the GitHub user
- When clicking __Remove__ button on every item, the item will fadeOut and it will be eliminated
- When clicking __Clear GitHub Users__ button, it will remove all users from the list
- Try to make the code as clean as possible and reussable. The file Githubparser.js will be included in main.js and this one will hold all the click events and also...
- **Important:** the list of methods will be supplied except the ``clearList()`` one, you should create this method in main.js file by extending the Githubparser() function
- You can Google anything you need.

## Design
![alt text](https://raw.githubusercontent.com/deck1187hw/front-end-test-midweight-ig/master/design.png "Logo Title Text 1")

## Good luck!
