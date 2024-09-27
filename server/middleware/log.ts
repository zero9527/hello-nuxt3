export default defineEventHandler((event) => {
  console.log('\nTime:', new Date(), '\nRequest:', event.method, getRequestURL(event).toString());
});
