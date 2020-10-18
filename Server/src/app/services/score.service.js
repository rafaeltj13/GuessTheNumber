const { Score } = require('../models');

exports.getAll = async () => {
    return await Score.findAll({
        order: ['time']
    });
};

exports.get = async scoreId => {
    return await Score.findByPk(scoreId);
};

exports.add = async score => {
    return await Score.create(score);
};

exports.update = async (scoreId, score) => {
    return await Score.update(score, { where: { id: scoreId } });
};

exports.delete = async scoreId => {
    return await Score.delete(scoreId);
};