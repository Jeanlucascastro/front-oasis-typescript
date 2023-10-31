'use client'
import Link from "next/link"
import YouTube from 'react-youtube';

export default async function video({ params }: {
    params: { myId: string}
}) {
    // const [videoId, setVideoId] = useState('');

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IkNhc3RybyIsImV4cCI6MTY5ODgwMDUzMiwiY29tcGFueSI6Mn0.uTWsUuGEQGYFaL8MqrFdmFmoIIC36mxUyWqXklbpoN4"
    let nome;
    const data = await fetch("http://localhost:8080/video/2", {
        headers: {
            Authorization:`Bearer ${accessToken}`
        }
    }).then((data) => {
    nome = data;
    });
    console.log('nome', nome)
    // const video = data.json()
    

    // setVideoId();
    const videoId = 'b8JX94mkwio'

    const opts = {
        height: '620', // Altura em pixels
        width: '1150',  // Largura em pixels
      };


    return(
        <><h1>Aula - {params.myId} </h1><ul>
            <li><Link href={"/"}>Voltar</Link></li>
        </ul>
        <div className="video-place">
        <YouTube videoId={videoId} opts={opts}/>
        </div>
        </>
    )
}
