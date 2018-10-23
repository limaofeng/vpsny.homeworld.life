import * as express from 'express';
import * as compression from 'compression';
import * as expressValidator from 'express-validator';
import * as session from 'express-session';
import * as flash from 'express-flash';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as lusca from 'lusca';
import * as dotenv from 'dotenv';

import { Response, Request, NextFunction } from 'express';

import index from './routes/index';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.local' });

// Create Express server
const app = express();

// Express configuration
app.engine('hbs', require('exphbs'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
app.set('view options', { layout: 'default' });
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
  })
);
app.use(flash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, 'public')));

// Controllers (route handlers)
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  const err: HttpError = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
