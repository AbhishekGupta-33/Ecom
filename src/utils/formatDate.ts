// Format a date to 'YYYY-MM-DD'
export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };
  
  // Format a date to a more readable format (e.g., 'September 14, 2024')
  export const formatReadableDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  