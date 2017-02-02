
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'name' :'waiting in line',
    'image':'lorempixel.people.1.jpeg',
    'id': 'project1'
  }
    );
};