module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        },
        field: 'user_id',
      },
    },
    {
      timestamps: false,
      tableName: 'products',
      underscored: true,
    }
  )
  Product.associate = (models) => {
    Product.belongsTo(
      models.User,
      { foreignKey: 'user_id', as: 'user'}
    )
  }
  return Product;
};