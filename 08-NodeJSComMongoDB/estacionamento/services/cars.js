exports.find = function (req, res) {
    res.render('car_list');
};

exports.new = function (req, res) {
    res.render('car_new');
};

exports.edit = function (req, res) {
    res.render('car_edit');
};