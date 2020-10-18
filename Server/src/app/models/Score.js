module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define('Score', {
        name: DataTypes.STRING,
        attempts: DataTypes.DOUBLE,
        guess: DataTypes.DOUBLE,
        time: DataTypes.DOUBLE,
    });

    return Score;
};