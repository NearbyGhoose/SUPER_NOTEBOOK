import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import style from "./Styles.module.css"

let authors=[
  {
     "creator":"George Michael",
     "songs":[
        {
           "name":"Careless Whispers",
           "rank":"8|10",
           "mood":"Happy"
        }
     ]
  },
  {
     "creator":"Rick Astley",
     "songs":[
        {
           "name":"Never gonna give you up",
           "rank":"10000000000|10",
           "mood":"Insane"
        }
     ]
  },
  {
     "creator":"Stapan GIGA",
     "songs":[
        {
           "name":"Zoloto Karpat",
           "rank":"999288|10",
           "mood":"Insane"
        },
        {
           "name":"Zei Son Zei Son",
           "rank":"14|88",
           "mood":"Insane"
        }
     ]
  }
]

function Music(prop){
  let songs=[]
  for(let i=0;i<prop.author.songs.length;i++){
    songs.push((<div key={i}>{prop.author.songs[i].name} {prop.author.songs[i].rank} </div>))
  }

  return(
    <div className={style.music_item_container}>
    
    <h2>{prop.author.creator}</h2> 
    {songs}
    
    </div>
  )


}

function Drill(){
  return(
    <h1>
      Жосткий Дрілл
    </h1>
  )
}

      
function App() {
  let musics=[]
  
  for (let i=0;i<authors.length;i++){
    let b=(<Music author={authors[i]} key={i} />)
    musics.push(b)
  }
  
  return (
    <>
      <Drill/>
      <div className={style.music_container}>
        {musics}
     

      
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
