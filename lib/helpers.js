import parse from 'date-fns/parse';

export function formatCreatedAtDate(createdAt) {
  return parse(createdAt.replace('UTC ', ''), 'E MMM dd HH:mm:ss yyyy', new Date());
}
