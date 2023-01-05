export const sortArray = (
  array: any,
  property: string,
  isDescending: boolean
) => {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return isDescending ? 1 : -1;
    }
    if (a[property] > b[property]) {
      return isDescending ? -1 : 1;
    }
    return 0;
  });
};
