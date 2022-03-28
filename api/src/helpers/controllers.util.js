/**
 * @param  {} queryString
 */
export function getQueryString(queryString) {
  const { page, limit, ...others } = queryString
  const pageValue =
    queryString.hasOwnProperty('page') && parseInt(queryString.page)
  const limitValue =
    queryString.hasOwnProperty('limit') && parseInt(queryString.limit)

  return {
    ...(page && {
      page: pageValue
    }),
    ...(limit && {
      limit: limitValue
    }),
    query: { ...others }
  }
}

/**
 * @param  {} code
 * @param  {} data
 * @param  {} message
 */
export function responseFormat(code, data, message) {
  return { code, data, message }
}
