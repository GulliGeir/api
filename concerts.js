export default async function handler(req, res) {
  try {
    const response = await fetch('http://apis.is/concerts');
    const data = await response.json();
    // Allow any domain to access this endpoint (for browser CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch concerts' });
  }
}
