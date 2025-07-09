export default function FormattedDate({ date, className = '' }) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return null;
  }
  const formatted = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <time dateTime={date.toISOString()} className={className}>
      {formatted}
    </time>
  );
}
