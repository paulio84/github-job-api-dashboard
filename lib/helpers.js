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

// https://gist.github.com/griffinmichl/72aaab6289780494dc85f88bf4528971#file-debounce_correct-js
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
