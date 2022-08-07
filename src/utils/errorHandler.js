export const executeAsync = async (callback) => {
  try {
    const res = await callback();
    return [res, null];
  } catch (err) {
    console.error(Error(err.message ?? err));
    return [null, err];
  }
};
