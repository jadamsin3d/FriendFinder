var matchData = require("../data/matches");

module.exports = function(app) {
    
    app.get("/api/friendlist", function(req, res) {
        res.json(matchData)
    })

    app.post("/api/friendlist", function(req, res){
        matchData.push(req.body);
        res.json(true);
    });

    app.post("/api/clear", function(req, res) {
        matchData.length = [];
        res.json({ ok: true});
    });
};

