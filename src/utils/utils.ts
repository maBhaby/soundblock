type TMockFetch = <T extends unknown>() => Promise<T>;

export const mockFetch: TMockFetch = () => {
  return new Promise((resolve, reject) => {
    try {
      const response = require('@/db/music.json');
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
