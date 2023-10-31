'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from 'react-youtube';


export default function Home() {
  const videoId = 'b8JX94mkwio'

  const opts = {
    height: '558', // Altura em pixels
    width: '1200',  // Largura em pixels
  };

  return (
<div className="fundo">

  <div className="video-container">
  <YouTube videoId={videoId}/>

  </div>

</div>
  )
}
