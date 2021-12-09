const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            user: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
        },
        {
            hooks: {
                beforeSave: async (user) => {
                    if (user.password_hash) {
                        user.password_hash = await bcrypt.hash(
                            user.password,
                            8
                        );
                    }
                },
            },
        }
    );
    User.prototype.checkpassword = function (password) {
        return bcrypt.compare(password, this.password_hash);
    };

    return User;
};
