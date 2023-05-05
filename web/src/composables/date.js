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
  if (dateString !== null && timeString !== null) {
    const newDate =  new Date(dateString + ',' + timeString)
    return newDate.toJSON()
  }
  return null
}

const useSplitDate = (dateTimeUTC) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }
  return dateTimeUTC
    ? new Intl.DateTimeFormat("en-CA", options).format(new Date(dateTimeUTC))
    : null
}

const useSplitTime = (dateTimeUTC) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: "h24"
    // timeStyle: "short",
  }
  return dateTimeUTC
    ? new Intl.DateTimeFormat("en-CA", options).format(new Date(dateTimeUTC))
    : null
}
export { useFormatTime, useMergeDateTime, useSplitTime, useSplitDate }
