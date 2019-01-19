var matchData = require("../data/matches");

module.exports = function(app) {
    
    app.get("/api/friendlist", function(req, res) {
        res.json(matchData);
    })

    app.post("/api/new_friend", function(req, res){
        let potMatch = req.body;
        console.log(potMatch);
        function Besties(potMatch) {
            
        }




        matchData.push(potMatch);
        res.json(true);
    });

    app.post("/api/clear", function(req, res) {
        matchData.length = [];
        res.json({ ok: true});
    });
};

