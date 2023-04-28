import Video from "./Video";

export default function VideoList(props) { 
  return props.list.map(item => {
    const key = Date.now() + Math.random();
    return <Video key={key} url={item.url} date={item.date} />
  });
}