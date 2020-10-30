import parse from 'date-fns/parse';

export function formatCreatedAtDate(createdAt) {
  return parse(createdAt.replace('UTC ', ''), 'E MMM dd HH:mm:ss yyyy', new Date());
}

export async function fetcher(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error("Failed to load jobs. We're fixing it!");
  }

  return response.json();
}
