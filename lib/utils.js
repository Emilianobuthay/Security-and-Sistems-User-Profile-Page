// lib/utils.js

export const validateStr = (str, maxLength) => {
  return typeof str === 'string' && str.length > 0 && str.length <= maxLength;
};

  
export const getErrorMsg = (error) => {
  return error?.response?.data?.message || "error ";
};

  