# Schiphol Test

## Getting started
2. npm i

3. npm start

## Notes
Created with create-react-app.

### Project Structure
I've set up a basic but simple structure seperating screens, services, hooks & components per feature. 

Overall it's a bit of an overkill for such a small project, but I did to give an idea of how to possibly structure a bigger project. 

Same with useMemo, it won't have any effect, but in my experience it's better to add it in the start of a project then to start adding when performance becomes an issue.

### Filtering
I've done the filtering & sorting on the frontend, but normally would most likely be done on the API side.

### Api
The api is setup via setupProxy.

### CSS
I've not used any CSS lib like css modules or css typescript, performance wise CSS is better in an external file. Not used scss for this project. 

### Browser support
Only tested on latest browsers: Chrome, FireFox & Safari

###  Tests
Added some small test to give an idea. 

To get test coverage run:

```
npm run test:coverage
```
