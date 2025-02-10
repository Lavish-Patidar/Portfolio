export const getImageUrl = (path) => {
  const link = new URL(`/assets/${path}`, import.meta.url).href;
  return link;
};
