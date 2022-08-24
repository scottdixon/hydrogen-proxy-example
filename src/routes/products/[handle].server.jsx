export async function api(request, { params }) {
  // This method is only suitable for Oxygen
  const { handle } = params;
  const response = await fetch(
    "https://example.myshopify.com/products/" + handle
  );
  const data = await response.text();
  return new Response(data, { headers: { "content-type": "text/html" } });
}
