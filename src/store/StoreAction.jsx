export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};
export const setIsShow = (val) => {
  return {
    type: "SHOW",
    payload: val,
  };
};
