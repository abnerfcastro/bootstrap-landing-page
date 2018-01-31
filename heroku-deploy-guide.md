# Quick Reference: How to deploy an application to Heroku

From [Heroku Documentation](https://devcenter.heroku.com/articles/git)

1. Log in to Heroku using `heroku login`
2. Create a new app using `heroku create <application name>`
3. Set up remotes `git remote -v`
4. Deploy with `git push heroku master` or `git push heroku branch:master`