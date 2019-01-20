var matchData = require("../data/matches");

module.exports = function (app) {

    app.get("/api/friendlist", function (req, res) {
        res.json(matchData);
    })

    app.post("/api/new_friend", function (req, res) {
        let potMatch = req.body;
        function Besties() {
            let item1 = 0;
            let item2 = 0;
            let bestFriend;
            for (var i = 0; i < matchData.length; i++) {
                for (var j = 0; j < 10; j++) {
                    if(potMatch.question[j] === matchData[i].question[j]) {
                        item1++;
                        console.log("Item1: ", item1);
                    }
                }
                if(item1 > item2) {
                    item2 = item1;
                    bestFriend = matchData[i];
                }
                item1 = 0;
            }
            console.log(bestFriend);
        }
        function friendPush() {
            matchData.push(potMatch);
            res.json(true);
        };
        Besties();
        friendPush();
    });

    app.post("/api/clear", function (req, res) {
        matchData.length = [];
        res.json({ ok: true });
    });
};

