const express = require("express");
const Kicker = require("../models/Kicker");
// const auth = require("../middleware/auth");
const router = new express.Router();

router.get("/kickers", async (req, res) => {
   try {
      await req.team.populate({
         path: 'kickers',
         match,
         options: {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort

         }
      }).execPopulate();
      res.send(req.team.kickers);
   } catch (error) {
      res.status(500).send();
   }
});

router.get("/kickers/:id", async (req, res) => {
   const _id = req.params.id;

   try {
      // const task = await Task.findById(_id);
      const kicker = await Kicker.findOne({ _id, team: req.team._id });
      if (!kicker) {
         return res.status(404).send();
      }
      res.send(kicker);
   } catch (error) {
      res.status(500).send();
   }
});

router.post("/teams", auth, async (req, res) => {
   const team = new Team({
      ...req.body,
      owner: req.user._id
   });
   try {
      await team.save();
      res.status(201).send(team);
   } catch (error) {
      res.status(400).send(e);
   }
});

router.delete("/teams/:id", auth, async (req, res) => {
   try {
      const team = await Team.findOneAndDelete({
         _id: req.params.id,
         owner: req.user._id
      });
      if (!team) {
         return res.status(404).send();
      }
      res.send(team);
   } catch (error) {
      res.status(500).send();
   }
});

module.exports = router;
