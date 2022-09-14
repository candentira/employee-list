# Employee search Application

This React app was based on Create React App templated

### Install dependencies

```
npm install
```

### Start the app

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Run tests

```
npm test
```

Launches the test runner in the interactive watch mode.

### Build the app

```
npm run build
```

Builds the app for production to the `build` folder.

### Implemented Functionalty:

#### Task 1: Display a number of employees on screen
Given a number of employee information as follows, show them as a list in browser.

```js
employees = [
{ id: 1, firstName: "John", "lastName": "Doe", email: "john.doe@domain.com", "department": "Finance", tel: "11111", isActive: 'Y' },
{ id: 2, firstName: "Jane", "lastName": "Doe", email: "jane.doe@domain.com", "department": "Finance", tel: "22222", isActive: 'Y' },
{ id: 3, firstName: "Bob" , "lastName": "Simpson", email: "bob.simpson@domain.com", "department": "IT", tel: "33333", isActive: 'Y' },
{ id: 4, firstName: "Max" , "lastName": "Mayfield", email: "max.mayfield@domain.com", "department": "IT", tel: "44444", isActive: 'Y' },
{ id: 5, firstName: "Tom" , "lastName": "Jones", email: "tom.jones@domain.com", "department": "IT", tel: "44444", isActive: 'N' }]
```

Conditions:
Employees belonging to Finance department should have full name (first name + last name) and email visible on screen
Employees belonging to IT department should have full name (first name + last name) and tel contact visible on screen

#### Task 2: Provide an Employee search functionality
Create a search box which would search users based on the input string.

If there are seach results found, only those employees should be shown in the browser
Appropriate error message shown when no matches are found

#### Task 3: Provide an Submit functionality
Create a Submit button which would log the currently visible employees in Console

#### Task 4: Create a service to return the Employee information
Create a backend like service which would return the initial employee data. This service should return only the active employees.

### Extra functionality:

Search bar debouncing and Submit throttling.

All static texts were extracted into separate file - for ease of application translation.
