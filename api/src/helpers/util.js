export const isEmpty = value =>
  value === null ||
  value === undefined ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0)

export const waterfall = (...iterable) =>
  iterable.reduce((p, fn) => p.then(fn), Promise.resolve())
