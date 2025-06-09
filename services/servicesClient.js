
// const getConnection = require('../libs/postgres')
const { models } = require('../libs/sequelize')


const getClients = async () => {
  const response = await models.Client.findAll({
    include: ['user']
  })
  return response
}

const findOne = async (id) => {
  try {
    const client = await models.Client.findByPk(id)
    if (!client) {
      return {
        error: 'Client not found'
      }
    }
    return client
  } catch (error) {
    console.log(error)
  }
}


const createClient = async (body) => {
  try {
    console.log(body)
    const newUser = await models.User.create(body.user)
    const newClient = await models.Client.create({ ...body, userId: newUser.id })
    console.log(newClient)
    return newClient
  } catch (error) {
    console.log(error)
  }
}

const updateClients = async (id, body) => {
  try {
    const client = await models.Client.findByPk(id)
    if (!client) {
      return {
        error: 'client not found'
      }
    }
    const response = await client.update(body)
    return { response }
  } catch (error) {
    console.log(error)
  }
}


const deleteClient = async (id) => {
  try {
    const client = await models.Client.findOne(id)
    await client.destroy()
    return {
      message: 'Client delete',
      id
    }
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  getClients,
  createClient,
  updateClients,
  deleteClient,
  findOne

}
