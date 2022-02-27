export const dataFormatter = (unuxTimestamp: number) => {
  const date = new Date(unuxTimestamp);
  return `${('' + date.getDate()).padStart(2, '0')}.${(
    '' + date.getMonth()
  ).padStart(2, '0')}.${date.getFullYear()}`;
};
