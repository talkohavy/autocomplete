# Getting Started with AutoComplete_Backend

This is the backend part of an app that presents an autocomplete TextField that fetches a partial list of words starting with the typed-in text entered by the user. This part of the project displays some basic knowledge of using the express module, alongside with .env files, a basic params validation using Joi, handling Client Requests and sending back the right status code along with the right response.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the Express server in development mode.\
By default, the server runs on port 5000 at [http://localhost:5000](http://localhost:5000) on your machine, and catches requests that begin with the prefifx of 'api'.


## Learn More

The code presented in this project is 50% out of the full project. For it to be able to run, you need to have both repositories: autocomplete_frontend & autocomplete_backend. You can view the other half over at [AutoComplete_Frontend](https://https://github.com/talkohavy/autocomplete_frontend).


### Deployment

Since this does not include a build process, deploying it to production is rather easy. Simply load the project to a remote machine, and run the service on production mode.