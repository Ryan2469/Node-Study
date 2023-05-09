"use strict"

const viewsPort = {

    hello: (req, res) => {
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    }
};

const users = {
    id: ["a", "b", "c"],
    psword: ["1", "2", "3"]
}

const api = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                return res.json({success: true});
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패 하셨습니다."
        });
    }
};


module.exports = {
    viewsPort,
    api
}