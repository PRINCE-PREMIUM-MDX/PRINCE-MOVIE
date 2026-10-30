export default async function handler(req, res) {
  const { method, url } = req;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const requestUrl = new URL(url, 'http://localhost');
  const rawPath = requestUrl.searchParams.get('path') || '/api/media';
  const category = requestUrl.searchParams.get('category') || 'FILM';

  const target = new URL('http://51.75.118.170:20041');
  target.pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  target.searchParams.set('category', category);

  try {
    const upstream = await fetch(target.toString(), {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers && req.headers.authorization ? { Authorization: req.headers.authorization } : {})
      },
      body: method !== 'GET' && method !== 'HEAD' ? JSON.stringify(req.body || {}) : undefined,
    });

    const text = await upstream.text();
    let payload = text;

    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }

    res.status(upstream.status || 200).json(payload);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Proxy API error',
      details: error.message
    });
  }
}
