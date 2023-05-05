# Conduit
Cypress Test Scripts

1. This task is developed by using the following versions. So please make sure to install them as pre-requirements.
    npm -v : 6.12.0
    node -v : 12.13.0
    npm install cypress@12.11.0
    npm install -D cypress-xpath@2.0.1

2. Setup configurations: cypress.config.js
    viewportWidth: 375,
    viewportHeight: 667,
    //viewportWidth: 1280,
    //viewportHeight: 800,

3. To open cypress runner: npx cypress open
4. To run tests:
    npx cypress run --config viewportWidth=375,viewportHeight=667
    npx cypress run --config viewportWidth=1280,viewportHeight=800
