import WithFormattedDate from '../HOC/WithFormattedDate';
import DateTime from './DateTime';

const DateTimePretty = WithFormattedDate(DateTime);

export default function Video(props) {
  return (
      <div className="video">
          <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <DateTimePretty date={props.date} />
      </div>
  )
}