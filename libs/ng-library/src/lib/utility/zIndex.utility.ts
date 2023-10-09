type ZIndexIdentifier = 'tooltip';

type ZIndexUtilObj = {
  get: (el: HTMLElement) => number;
  set: (key: ZIndexIdentifier, el: HTMLElement, baseZIndex: number) => void;
  clear: (el: HTMLElement) => void;
  getCurrent: () => number;
};

export const zIndex = {
  tooltip: 1100,
};

const zIndexUtil = (): ZIndexUtilObj => {
  let zIndexes: { key: ZIndexIdentifier; value: number }[] = [];

  const generateZIndex = (key: ZIndexIdentifier, baseZIndex: number) => {
    const lastZIndex =
      zIndexes.length > 0
        ? zIndexes[zIndexes.length - 1]
        : { key, value: baseZIndex };
    const newZIndex =
      lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;

    zIndexes.push({ key, value: newZIndex });

    return newZIndex;
  };

  const revertZIndex = (zIndex: number) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };

  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };

  const getZIndex = (el: HTMLElement) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };

  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = '';
      }
    },
    getCurrent: () => getCurrentZIndex(),
  };
};

export const ZIndexUtils = zIndexUtil();
