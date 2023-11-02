'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link"
import YouTube from 'react-youtube';
import { getData } from "../../../app/pages/api/cors";

function video({ params }: {
        params: { myId: string,}
    }) {
  const [data, setData] = useState(null);

  const [nomeAula, setNomeAula] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url = "/api/video/2";
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IkNhc3RybyIsImV4cCI6MTY5ODg5Nzg2NSwiY29tcGFueSI6Mn0.FQrZ7OMfr6AzP4lfttWAeP15xdiXFxvabHImXBuvR8M";

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            
          }
        });
        setData(response.data);
        console.log('response.data', response.data)
        setNomeAula(response.data.name)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
    const videoId = 'b8JX94mkwio'

        const opts = {
        height: '620',
        width: '1150', 
      };


  return (
            <><h1>Aula - {params.myId} - { nomeAula } </h1><ul>
            <li><Link href={"/"}>Voltar</Link></li>
        </ul>
        <div className="video-place">
        <YouTube videoId={videoId} opts={opts}/>
        </div>
        </>
  );
}

export default video;










// 'use client'

// export async function getServerSideProps() {
//   const url = "http://192.168.0.104:8080/video/2";
//   const accessToken = "seu_token_aqui";

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//     const data = response.data;

//     return {
//       props: {
//         data
//       }
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         data: null // ou algum valor padrão em caso de erro
//       }
//     };
//   }
// }


// export default async function video({ params }: {
//     params: { myId: string,}
// }) {


//     const data = await getData()

//     console.log('nome', data)


//     const videoId = 'b8JX94mkwio'

//     const opts = {
//         height: '620',
//         width: '1150', 
//       };


//     return(
//         <><h1>Aula - {params.myId} </h1><ul>
//             <li><Link href={"/"}>Voltar</Link></li>
//         </ul>
//         <div className="video-place">
//         {/* <YouTube videoId={videoId} opts={opts}/> */}
//         </div>
//         </>
//     )
// }
