'use client'
import Link from "next/link"
import YouTube from 'react-youtube';
// import cors from '../../pages/api/cors';

export default async function video({ params }: {
    params: { myId: string}
}) {
    // const [videoId, setVideoId] = useState('');

    let data
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IkNhc3RybyIsImV4cCI6MTY5ODgxMTE3NSwiY29tcGFueSI6Mn0.wjFfeLN-vt05CTsokV74iHdZJ14t0Y85WIIlPy3Ad18"
    try {
        const response = await fetch("http://localhost:8080/video/2", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    
        if (!response.ok) {
            throw new Error(`Erro ao fazer a requisição: ${response.statusText}`);
        }
    
         data = await response.json();
        console.log('Dados recebidos:', data);
    } catch (error) {
        console.error('Erro:', error);
    }

    console.log('nome', data)
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
