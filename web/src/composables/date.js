const useFormatTime = (dateTimeZone) => {
  const options = {
    dateStyle: 'medium',
    timeStyle: 'short',
  }
  return dateTimeZone
    ? new Intl.DateTimeFormat('en-GB', options).format(new Date(dateTimeZone))
    : '-'
}

const mergeDateTime = (dateString, timeString) => {
  const newDate = new Date(dateString + ',' + timeString)
  return newDate.toJSON()
}
export { useFormatTime, mergeDateTime }
