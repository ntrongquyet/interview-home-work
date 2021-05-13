
const postRouter = require('./posts');
function route(app) {
  app.use('/posts', postRouter);
}
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// /* POST routes */

module.exports = route;
