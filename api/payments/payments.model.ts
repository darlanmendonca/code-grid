import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database'

interface PaymentAttributes {
  id: string
  name: string
  amount: number
  code: string
  grid: string[][]
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
  public id!: string
  public name!: string
  public amount!: number
  public code!: string
  public grid!: string[][]
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grid: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    timestamps: false,
  },
)

export default Payment
