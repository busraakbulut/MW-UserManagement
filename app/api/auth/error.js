const handler = (req, res) => {
    res.status(401).json({ error: 'Authentication failed' });
  };
  
  export default handler;