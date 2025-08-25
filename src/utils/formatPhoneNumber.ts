export const formatPhoneNumber = (value: string) => {
  const onlyNums = value.replace(/\D/g, ''); // 숫자만 남김

  if (onlyNums.length < 4) {
    if (onlyNums.length === 3) {
      return `${onlyNums.slice(0)}-`;
    }
    return onlyNums;
  }

  if (onlyNums.length < 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }
  if (onlyNums.length <= 11) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7)}`;
  }

  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
};
