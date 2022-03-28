export function getQueryString(queryString) {
  const page = queryString.hasOwnProperty('page') && parseInt(queryString.page)
  const limit =
    queryString.hasOwnProperty('limit') && parseInt(queryString.limit)

  // crear una funcion
  const omit = (prop, { [prop]: _, ...rest }) => rest

  return {
    ...(page && {
      page
    }),
    ...(limit && {
      limit
    }),
    query: {
      ...omit('page', queryString),
      ...omit('limit', queryString)
    }
  }
}

export function responseFormat(code, data, message) {
  return { code, data, message }
}
