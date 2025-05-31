function getQueryParams(url = window.location.href) {
  const params = new URL(url).searchParams;
  return Object.fromEntries(params.entries());
}

console.log(getQueryParams());
