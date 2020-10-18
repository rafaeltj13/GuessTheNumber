const scoreService = require('../services/score.service');

exports.getAll = async (req, res, next) => {
    try {
        const scores = await scoreService.getAll();
        res.status(200).json(scores);
    } catch (error) {
        console.log(error)
        next(error);
    }
};
exports.get = async (req, res, next) => {
    try {
        const score = await scoreService.get(req.params.id);
        res.status(200).json(score);
    } catch (error) {
        next(error);
    }
};

exports.add = async (req, res, next) => {
    try {
        const createdScore = await scoreService.add(req.body);
        res.status(201).json(createdScore);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const updatedScore = await scoreService.update(req.params.id, req.body);
        res.status(204).json(updatedScore);
    } catch (error) {
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deletedScore = await scoreService.dele(req.params.id);
        res.status(200).json(deletedScore);
    } catch (error) {
        next(error);
    }
};