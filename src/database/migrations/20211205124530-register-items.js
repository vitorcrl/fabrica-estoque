"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("registeritems", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                isUnique: true,
                allowNull: false,
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            user: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createddate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("registeritems");
    },
};
