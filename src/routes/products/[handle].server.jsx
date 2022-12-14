export async function api(request, { params }) {
  // This approach is only supported by Oxygen
  const { handle } = params;
  const response = await fetch("https://example.myshopify.com/products/" + handle, {
    headers: {
      // It's important to set or forward a User-Agent, otherwise the Online Store might block the request
      'User-Agent': 'Hydrogen',
    },
  });
  const data = await response.text();
  return new Response(data, { headers: { "content-type": "text/html" } });
}
