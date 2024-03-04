module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
  )
  User.associate = (models) => {
    User.hasMany(
      models.Product,
      { foreignKey: 'user_id', as: 'products'}
    )
  }
  return User;
};