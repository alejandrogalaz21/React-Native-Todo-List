import moment from 'moment'

export const zeroUTC = date =>
  moment(date).utc().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

export function weeksOfDifference(start, end) {
  const momentStart = zeroUTC(start)
  const momentEnd = zeroUTC(end)
  const difference = momentStart.diff(momentEnd, 'week')
  return difference
}

export const dmy = date => moment(date).format('DD/MM/YYYY')
export const dmyhm = date => moment(date).format('DD/MM/YYYY HH:mm')
