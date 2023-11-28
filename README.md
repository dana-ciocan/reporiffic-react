# Reporiffic!

This simple React app will display all the repos you are currently working on in one place, allowing you to easily access all open PRs.

## Getting up and running

If you want to use Reporiffic to manage your repos, you'll need to do the following:

1. Clone this code to your local computer
1. Run `npm i` in the main directory
1. Create a `.env` file (see below)
1. Run `npm run dev`

## Creating a .env file

This app is currently still a POC and therefore runs on your local machine via a `.env` file rather than anything super fancy.

Your `.env` file will need to contain the following:

```
VITE_GITHUB_TOKEN=<your personal github token>
VITE_GITHUB_OWNER=<your Github organisation>
VITE_GITHUB_TEAM=<your team slug>
```

For Economist Group teams, the Github organisation should be `EconomistDigitalSolutions`. 

## Getting your team slug

You can find your team slug as follows:

1. Go to https://github.com/orgs/EconomistDigitalSolutions/teams
1. Search for your team in the _Find a team..._ box
1. Click on your team's name
1. Copy everything after the https://github.com/orgs/EconomistDigitalSolutions/teams/ in the URL - this is your team slug

## Generating a Github token

This is a bit more involved, but once it's done, you shouldn't need to do it again for a while.