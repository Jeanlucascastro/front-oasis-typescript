"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link"
import YouTube from 'react-youtube';
import { getData } from "../../../app/pages/api/cors";

function video({ params }: {
    params: { myId: string, }
}) {
Z


    useEffect(() => {
        const fetchData = async () => {
            const url = "/api/video/2";
            const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6IkNhc3RybyIsImV4cCI6MTY5ODk1NjEyMSwiY29tcGFueSI6Mn0.NfIsMbXS3i2EuqwHZCcMoCUggyV3Jkh57aJ4x-hMEAk";

            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,

                    }
                });
                setData(response.data);
                console.log('response.data', response.data)
                setNomeAula(response.data.name)
                setIdVideo(response.data.url)
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
        <>
            <div className="content">
                <div className="video-place">
                    <YouTube className="video" videoId={idVideo} opts={{ ...opts, width: '100%', height: '100%' }} />
                    <h1 className="titulo-aula"> {nomeAula} </h1>
                </div>
                <div className="note-area">
                    <span className="titulo-nota"> Anotações da aula: </span>
                    <textarea className="note" placeholder="Digite uma anotação para aula..."></textarea>
                </div>
            </div>

            <div className="content">
                <div className="note-area">
                    <span className="titulo-nota"> Todos os videos: </span>
                </div>
            </div>
        </>
    );
}

export default video;
