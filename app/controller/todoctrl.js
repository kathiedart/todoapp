let TodoModel = require('../lib/model/todo'),
    catchError = (err, res) => {
        console.log(err);
        return res.status(500).send('Undetermined Error');
    };

module.exports = {
    get: (req, res) => TodoModel.find({username: req.session.user._id})
        .then((result) => res.send(result))
        .catch((err) => catchError(err, res)),
    post: (req, res) => {
        // This would ideally be cleaned up
        let model = new TodoModel({
            todo: req.body.todo,
            username: req.session.user._id
        });
        return model.save().then((result) => res.status(201).send(''))
            .catch((err) => catchError(err, res))
    },
    'delete': (req, res) => TodoModel.remove({
        _id: req.params.id,
        username: req.session.user._id
    }).then((result) => res.status(204).send(''))
    .catch((err) => catchError(err, res))
};
