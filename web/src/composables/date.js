const useFormatTime = (dateTimeZone) => {
  const options = {
    dateStyle: 'medium',
    timeStyle: 'short',
  }
  return dateTimeZone
    ? new Intl.DateTimeFormat('en-GB', options).format(new Date(dateTimeZone))
    : '-'
}

const mergeDateTime = (date, time) => {
  const newDate = new Date()
  newDate.setDate(date)
  newDate.setTime(time)
  return newDate.toJSON()
}
export { useFormatTime, mergeDateTime }
