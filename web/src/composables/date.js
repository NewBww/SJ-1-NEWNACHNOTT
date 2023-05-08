const useFormatTime = (dateTimeZone) => {
  const options = {
    dateStyle: 'medium',
    timeStyle: 'short',
  }
  return dateTimeZone
    ? new Intl.DateTimeFormat('en-GB', options).format(new Date(dateTimeZone))
    : '-'
}

const useMergeDateTime = (dateString, timeString) => {
  // console.log(dateString ?? 'date missing' + timeString ?? 'time missing')
  if (
    dateString === null ||
    timeString === null ||
    dateString.length === 0 ||
    timeString.length === 0
  ) {
    return null
  }
  return new Date(`${dateString} ${timeString}`).toISOString()
}

const useSplitDate = (dateTimeUTC) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }
  return dateTimeUTC
    ? new Intl.DateTimeFormat('en-CA', options).format(new Date(dateTimeUTC))
    : null
}

const useSplitTime = (dateTimeUTC) => {
  const options = {
    timeStyle: 'short',
  }
  return dateTimeUTC
    ? new Intl.DateTimeFormat('en-GB', options).format(new Date(dateTimeUTC))
    : null
}
export { useFormatTime, useMergeDateTime, useSplitTime, useSplitDate }
