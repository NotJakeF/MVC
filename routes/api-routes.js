// Dependencies
// =============================================================
const router = require('express').Router();
const UserName = require('../models/userName');

// Routes
// =============================================================

// GET route for getting all of the todos
router.get('/getall/userName', (req, res) => {
  UserName.findAll({}).then(users => {
    res.json(users);
  });
  res.send("getall/userName")
});

// POST route for saving a new todo
// router.post('/api/todos', (req, res) => {
//   Todo.create({
//     text: req.body.text,
//     complete: req.body.complete
//   }).then(dbTodo => {
//     res.json(dbTodo);
//   });
// });

// DELETE route for deleting a todo
// router.delete('/api/todos/:id', (req, res) => {
//   Todo.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(dbTodo => {
//     res.json(dbTodo);
//   });
// });

// // PUT route for updating a todo
// router.put('/api/todos/:id', (req, res) => {
//   Todo.update(
//     {
//       text: req.body.text,
//       complete: req.body.complete
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   ).then(dbTodo => {
//     res.json(dbTodo);
//   });
// });

module.exports = router;
