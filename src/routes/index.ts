import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VPS Manager' });
});

router.get('/support', function(req, res) {
  res.render('support', { title: 'Privacy Statement' });
});

router.get('/privacy', function(req, res) {
  res.render('privacy', { title: 'Privacy Statement' });
});

export default router;
