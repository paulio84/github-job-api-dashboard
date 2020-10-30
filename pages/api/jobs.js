export default async function handler(req, res) {
  const { description, location, full_time } = req.query;

  try {
    const jobRes = await fetch(
      `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${full_time}&markdown=false`
    );

    const jobData = await jobRes.json();
    return res.status(200).json({ data: jobData });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to load jobs.' });
  }
}
