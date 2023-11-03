import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link"
import YouTube from 'react-youtube';
import { getData } from "../../app/pages/api/cors";

function lista({ params }: {
    params: { myId: string, }
}) {
    const [data, setData] = useState(null);

    const [nomeAula, setNomeAula] = useState('');
    const [idVideo, setIdVideo] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const url = "/api/video";
    //         const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IkNhc3RybyIsImV4cCI6MTY5ODk0Nzg5NiwiY29tcGFueSI6Mn0.zhKcwzwMx1gp8lUy5aC0rubJwgkrHNy1u9TLDWbchu0";

    //         try {
    //             const response = await axios.get(url, {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,

    //                 }
    //             });
    //             setData(response.data);
    //             console.log('response.data', response.data)
    //             setNomeAula(response.data.name)
    //             setIdVideo(response.data.url)

    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    const videoId = 'b8JX94mkwio'

    const opts = {
        height: '620',
        width: '1150',
    };

    return (
        <><h1>Aula - {params.myId} - {nomeAula} </h1><ul>
            <li><Link href={"/"}>Voltar</Link></li>
        </ul>
            <div className="content">
            </div>
        </>
    );
}

export default lista;