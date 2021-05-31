const humanReadableTimestamp = (time) => {
  if (!time || isNaN(time)) {
    return "";
  }
  const D = new Date(time * 1000);
  return D.toLocaleDateString("fi");
};

export { humanReadableTimestamp };
