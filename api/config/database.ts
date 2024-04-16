import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false
})

export const initializeDatabase = async () => {  
  await sequelize.sync()
}

export default sequelize
