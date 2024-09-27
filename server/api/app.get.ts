export default defineEventHandler(async (event) => {
  const body = readBody(event);
  console.log(body);
  return { appName: 'nuxt3' };
});
