export default async function handler(req, res) {
  const response = await fetch('http://apis.is/concerts');
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
