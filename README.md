# Tools
Install git
Install VSCode
Install PostgreSQL
Install DBeaver
Install Nodejs 14

# How do I get set up API?
## Install postgresql
### In the command window, run following commands one after another
brew install postgres (For Mac)
/Applications/Postgres.app/Contents/Versions/13/bin/psql -p5432 "postgres" (For Mac)
### In the Postgres shell, run following commands one after another
CREATE ROLE workit LOGIN PASSWORD 'workit' NOINHERIT CREATEDB;
create database workit;
\c workit
CREATE SCHEMA workit authorization workit;
GRANT USAGE ON SCHEMA workit to public;
### Below is not needed, but in case you get privilege error on server startup, run following
GRANT ALL PRIVILEGES ON DATABASE "workit" to workit;

# Checkout code
Create a folder named git in user home directory and create a folder workit inside it and checkout code
git clone https://maniranjankumar@bitbucket.org/yworkit/api.git
git clone https://maniranjankumar@bitbucket.org/yworkit/web.git

## Install API
### Go to api directory
npm install
npm start
npm run dev (for development)

# How do I get set up web?
## Install web
### Go to web directory
npm install --legacy-peer-deps
### Run locally in development mode with a site_ID for super admin access with site management
REACT_APP_SITE_ID=all npm start
### Run locally in development mode with a site_ID for super admin access with a normal site
REACT_APP_SITE_ID=demo npm start
### Server is up and running on http://localhost:3000/

# Details for cloud
## Beta
Instance: 
User: 
Password: 
## Prod
Instance: 
User: 
Password: 

# Format and lint
## Run 
npm run format

# Upgrade all npm packages to latest
npm i -g npm-check-updates && ncu -u && npm i --legacy-peer-deps

# Remote Database connection
psql -h cunomial-postgresql-prod.postgres.database.azure.com -d workit -U workit PGSSLMODE=require

# Database export from Azure in local
pg_dump -h cunomial-postgresql-prod.postgres.database.azure.com -d workit -U workit -f workit_prod_2021_12_06.dump

# Restore database export in local 
psql -h localhost -d workit -U workit -f workit_prod_2021_12_06.dump
update "Emails" set "Id" = replace("Id", '@', '@1') where "Id" not in ('support@cunomial.com', 'maniranjan.kumar@live.com', 'maniranjan.kumar@cunomial.com');

# Code cleanup
## deadfile
npm install -g deadfile
deadfile ./src/index.js

## depcheck
npm install -g depcheck
depcheck

## icons
https://heroicons.com
https://iconoir.com
https://icons.getbootstrap.com
