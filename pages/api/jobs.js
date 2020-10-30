export default async function handler(req, res) {
  const { description, location, full_time } = req.query;

  try {
    const response = await fetch(
      `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${full_time}&markdown=false`
    );

    const jobData = await response.json();
    return res.status(200).json(jobData);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
