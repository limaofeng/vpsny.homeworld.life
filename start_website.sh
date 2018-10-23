#!/usr/bin/bash
cnpm install --production
npm run build
#npm start 
export PORT=3003
pm2 start ./dist/bin/www.js --name "mywebsite" --output /data/logs/web/website_output.log --error /data/logs/web/website_error.log
echo $?