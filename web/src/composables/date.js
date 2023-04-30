const useFormatTime = (dateTimeZone) => {
  const options = {
    dateStyle: 'medium',
    timeStyle: 'short'
  } 
  return dateTimeZone ? new Intl.DateTimeFormat('en-GB', options).format(new Date(dateTimeZone)) : '-'
}
export { useFormatTime }
