import GetRatedComponent from '../HOC/GetRatedComponent';
import New from './New';
import Popular from './Popular';
import Article from './Article';
import Video from './Video';

export default function List(props) {
  return props.list.map(item => {
      const RatedComponent = GetRatedComponent(New, Popular)(+item.views);        
      const key = Date.now() + Math.random();

      switch (item.type) {
          case 'video':                             
              return (
                  <RatedComponent key={key} ><Video {...item} /></RatedComponent>
              );

          case 'article':
              return (
                  <RatedComponent key={key} ><Article {...item} /></RatedComponent>
              );
      }
  });
};