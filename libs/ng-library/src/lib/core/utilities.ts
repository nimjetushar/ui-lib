export const getUiqueIdentifier = (): string => {
  return Math.random().toString(16).slice(2);
};
