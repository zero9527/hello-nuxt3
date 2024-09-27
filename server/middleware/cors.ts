export default defineEventHandler((event) => {
  if (process.env.NODE_ENV === 'development') {
    setHeaders(event, { 'Access-Control-Allow-Origin': '*' });
  }

  setHeaders(event, {
    'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT',
    'Access-Control-Allow-Headers':
      'Content-Type,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Authorization,X-Requested-With'
  });
  // event.context.auth = { user: 123 };
});
