const db = require('../models');

/*
* req.body = {
*  title,
*  body,
*  link,
*  type,
*  score,
* }
* */
const create = async (req, res) => {
  try {
    const item = await db.apiLists.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).send('error: ' + error);
  }
};

const findAll = async (req, res) => {
  try {
    const list = await db.apiLists.findAll({
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
    const list = await db.apiLists.findAll({
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
    await db.apiLists.increment('score', {
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
