const db = require('../models');

/*
* req.body = {
*  title,
*  body,
*  link,
*  skills,
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
    const list = await db.libraryLists.findAll({});
    res.json(list);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findById = async (req, res) => {
  res.status(501).json({ msg: 'Not Implemented Yet.' });
};

const updateById = async (req, res) => {
  res.status(501).json({ msg: 'Not Implemented Yet.' });
};

const deleteById = async (req, res) => {
  res.status(501).json({ msg: 'Not Implemented Yet.' });
};

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
