export const dateToStr = (dateObj) => {
    let date = new Date(dateObj);
    let NewDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return NewDate
  };