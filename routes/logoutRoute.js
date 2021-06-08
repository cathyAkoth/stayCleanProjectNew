const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
  if (req.session) { 
  res.render('logout')
  }
})

router.post('/logout', async(req, res) => { 
    
if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.log(err);
      } else {
        return res.redirect('/login');
      }
    }
  
  
    )} 
    
    });
  