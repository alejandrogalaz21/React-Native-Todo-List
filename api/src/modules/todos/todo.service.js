import Todo from './todo.model'

/**
 * @desc      get all todo document's.
 * @params    query.
 */
export const getAllTodos = async (query = {}) => {
  const data = await Todo.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 * @desc      get all todo document's paginated.
 * @params    query, page, limit.
 */
export const getTodosPagination = async (query = {}, page = 0, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const data = await Todo.paginate(query, options)
  return data
}

/**
 * @desc      create new todo.
 * @params    body.
 */
export const createTodo = async body => {
  const data = await Todo.create(body)
  return data
}

/**
 * @desc      get single todo document.
 * @params    id.
 */
export const getTodo = async id => {
  const data = await Todo.findById(id)
  return data
}

/**
 * @desc      update single todo document.
 * @params    id, body.
 */
export const updateTodo = async (id, body) => {
  const data = await Todo.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

/**
 * @desc      delete single todo document.
 * @params    id.
 */
export const deleteTodo = async id => {
  const data = await Todo.findByIdAndDelete(id)
  return data
}
