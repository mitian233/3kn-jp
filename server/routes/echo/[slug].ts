export default defineEventHandler((event) => {
  const sth = getRouterParam(event, "slug");
  return sth;
});
