module.exports = (sequelize, DataTypes) => {
  const productInfo = sequelize.define(
    'productInfo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      price: DataTypes.FLOAT,
      color: DataTypes.STRING,
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Product',
          key: 'id',
        },
        field: 'product_id'
      }
    },
    {
      timestamps: false,
      tableName: 'product_info',
      underscored: true,
    }
  )
  productInfo.associate = (models) => {
    productInfo.belongsTo(
      models.Product,
      { foreignKey: 'product_id', as: 'product'}
    )
  }
  return productInfo;
};