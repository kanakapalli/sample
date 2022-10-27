import React from 'react';
import Carasoul from './Carasoul';
import Listdisplay from './Listdisplay';
import movies from './Film.json';
import List from './List';

function Home(props){
      let title="Latest & Trending";
      let islogged=true;
      let view="";

      if(islogged)
        view=<Carasoul/>
    else
    view=<img src='/assets/plan.png' alt='plan'/>
        return (
            <div>
              {view}
              <List/>
                <Listdisplay title={title} movies={movies}/>
            </div>
        );
    }

export default Home;