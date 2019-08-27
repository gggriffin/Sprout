const db = require('../models');

/*
* req.body = {
*  title,
*  body,
*  link,
*  score,
* }
* */
const create = async (req, res) => {
  try {
    const item = await db.libraryLists.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findAll = async (req, res) => {
  try {
    const list = await db.libraryLists.findAll({
      order: [
        ['score', 'DESC'],
      ],
      limit: 10
    });
    res.json(list);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findById = async (req, res) => {
  try {
    const list = await db.libraryLists.findAll({
      where: {
        title: req.params.id
      }
    });
    res.json(list);

  } catch (error) {
    res.status(500).send(error);
  }
};

const updateById = async (req, res) => {
  res.status(501).json({ msg: 'Not Implemented Yet.' });
};

const deleteById = async (req, res) => {
  res.status(501).json({ msg: 'Not Implemented Yet.' });
};

const increaseScoreById = async (req, res) => {
  try {
    await db.libraryLists.increment('score', {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: 'Score Increase Successful.' });;

  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
  increaseScoreById,
};
