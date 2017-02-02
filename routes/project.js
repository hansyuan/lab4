exports.viewProject = function (req, res) {
    //controller code
    var name = req.params.name;
    console.log("Proj name: " + name);
    res.render('project', {
        'projectName': name
    }

        );
};