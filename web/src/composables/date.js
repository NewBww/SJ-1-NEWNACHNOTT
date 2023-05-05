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
  if (dateString !== null && timeString !== null) {
    const newDate = new Date(dateString + ',' + timeString)
    return newDate.toJSON()
  }
  return null
}
export { useFormatTime, mergeDateTime }
