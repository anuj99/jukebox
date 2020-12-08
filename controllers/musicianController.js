const modelMusician = require('../models/musician');

// @desc ---> get music
// @route --> /api/v1/musics 
// @access --> public
const music = {


    getMusician: async (req, res, next) => {
        try {
            const musicians = await modelMusician.find();
            res.json({
                success: true,
                count: musicians.length,
                data: musicians
            });
        } catch (error) {
            res.json(error);
        }
    },


    // @desc ---> post music
    // @route --> POST /api/v1/musics 
    // @access --> public

    postMusician: async (req, res, next) => {

        try {

            const musicians = await modelMusician.create(req.body);

            // await musicians.save();

            return res.json({
                success: true,
                data: musicians
            });

        } catch (error) {
            // console.log(".......................");
            // console.log(error);
            // console.log(".......................");

            console.log(Object.values(error.errors).map(val => val.message));
            const message = Object.values(error.errors).map(val => val.message);
            return res.json(message);
        }
    },





    // @desc  --->  update musician
    // @route --->  UPDATE /api/v1/musician:id
    // @access--->  public
    // @description ----> can update musician and musicaltype
    updateMusician: async (req, res) => {
        try {
            const result = await modelMusician.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            res.json(error);
        }

    },


    // @desc ---> sort musician
    // @route --> /api/v1/byname 
    // @access --> public
    sortbyname: async (req, res) => {
        try {
            const musician = await modelMusician.find().sort({ name: 1 });
            res.json({
                count: musician.length,
                data: musician
            });
        } catch (error) {
            res.json(error);
        }
    },




    // @desc ---> delete musician
    // @route --> /api/v1/musician:id 
    // @access --> public

    deleteMusician: async (req, res, next) => {
        const musicians = await modelMusician.findById(req.params.id);
        if (!musicians) {
            return res.json({
                success: false,
                data: "no id found"
            });
        }

        return res.json({
            success: true,
            data: musicians
        });
    }
}

module.exports = music;