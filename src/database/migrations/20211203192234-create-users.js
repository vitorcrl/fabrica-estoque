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
            // created_at: {
            //     type: Sequelize.DATE,
            //     allowNull: false,
            // },
            // updated_at: {
            //     type: Sequelize.DATE,
            //     allowNull: false,
            // },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("users");

        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
