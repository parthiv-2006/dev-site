import useNowData from '../hooks/useNowData';

export default function NowInline() {
  const { activity } = useNowData();

  const time = activity?.location?.time;
  const city = activity?.location?.city;
  const status = activity?.github
    ? `Coding: ${activity.github.repo.split('/')[1] || activity.github.repo}`
    : activity?.quote
    ? `Quote: ${activity.quote.text.slice(0, 28)}${activity.quote.text.length > 28 ? '…' : ''}`
    : 'Offline';

  return (
    <div className="now-inline" title={`${city ?? ''} • ${time ?? ''} • ${status}`}>
      <span className="now-inline__status">{status}</span>
      {city && time && (
        <span className="now-inline__time">{city} • {time}</span>
      )}
    </div>
  );
}
