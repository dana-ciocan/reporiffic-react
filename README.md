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
VITE_STARRED_REPOS=<any repos you want to see at the top of the list, comma-separated>
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

To get your token:

1. Go to https://github.com/settings/tokens
1. Click on the _Generate new token_ dropdown
1. Click on _Generate new token (classic)_
1. Authenticate using your favourite authenticator app
1. Under _Note_, add a note to yourself about what this token is for
1. Given this will be a read-only token, you can select _No expiration_ in the _Expiration_ drop-down
1. For _Scopes_, select _repo_ - this will automatically select everything in this section
1. Click _Generate token_ at the bottom of the page - this will show your token
1. Copy and paste your token into your `.env` file
1. Click on the _Configure SSO_ dropdown and click _Authorize_ next to next to the organisation you want to authorise

## Starred repos

By setting repos as "starred", they will display at the top of the list. You can add multiple repos by comma-separating their names.

For example, if you want to display Engagement and Marber Web at the top, you would set the following in your `.env` file

```
VITE_STARRED_REPOS=engagement,marber-web
```

In the UI, you will see a star to the left of any repos that you have starred.
