const music = require('../models/music');
const { findByIdAndUpdate } = require('../models/music');
const modelMusic = require('../models/music');

// @desc  --->  get music
// @route --->  GET /api/v1/musics
// @access--->  public
exports.getMusic = async (req, res, next) => {
    // res.send("get transaction from transctions");
    // modelTransaction
    try {
        const musics = await modelMusic.find();
        console.log(musics.length);
        console.log(musics)
        for (i = 0; i < musics.length; i++) {
            // console.log(musics[i].createdAt);
            // console.log(new Date(musics[i].createdAt));
            for (j = 0; j < (musics.length - 1); j++) {

                if (new Date(musics[j].createdAt) < new Date(musics[j + 1].createdAt)) {
                    var temp = musics[j];
                    musics[j] = musics[j + 1];
                    musics[j + 1] = temp;
                }
            }
        }

        console.log("........................................");
        console.log(musics.length);
        console.log(musics)

        return res.json({
            success: true,
            count: musics.length,
            data: musics
        });
    } catch (error) {
        return res.sendStatus(500).json({
            success: false,
            error: 'server error'
        });
    }
}


// @desc  --->  post music
// @route --->  POST /api/v1/musics
// @access--->  public
exports.postMusic = async (req, res, next) => {
    try {

        const musics = modelMusic(req.body);
        await musics.save();
        return res.json({
            success: true,
            data: musics
        })
    } catch (error) {
        if (error.name == "ValidationError") {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.json(messages);
        } else {
            return res.json({
                sucess: false,
                error: "server error"
            })
        }
    }
}

// @desc  --->  update music
// @route --->  UPDATE /api/v1/musics:id
// @access--->  public
exports.updateMusic = async (req, res) => {
    try {

        // const musics = modelMusic(req.body);
        const result = await modelMusic.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        res.json(error);
    }

}

// @desc  --->  get music
// @route --->  GET /api/v1/musics/pricesort
// @access--->  public
// @description ----> sort by price at databse level

exports.sortpriceMusic = async (req, res) => {
    try {
        const musics = await modelMusic.find().sort({ price: 1 });
        res.json({
            count: musics.length,
            data: musics
        });
    } catch (error) {
        res.json(error);
    }
}




// @desc  --->  delete music
// @route --->  DELETE /api/v1/musics:id
// @access--->  public
exports.deleteMusic = async (req, res, next) => {
    const musics = await modelMusic.findById(req.params.id);
    if (!musics) {
        return res.json({
            success: false,
            data: "Id not found"
        });
    }
    await musics.remove();
    return res.json({
        success: true,
        data: "music deleted"
    })

}




