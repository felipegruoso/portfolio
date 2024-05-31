git init
(git remote -v | grep heroku) || git remote add heroku https://git.heroku.com/felipegruoso.git
git add .
git commit -m "Deploy" || true
git push heroku master --force
