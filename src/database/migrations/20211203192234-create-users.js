"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                //   generationStrategy: Sequelize.UUID,
                allowNull: false,
            },
            user: {
                type: Sequelize.STRING,
                isUnique: true,
                allowNull: false,
            },

            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("users");
    },
};
