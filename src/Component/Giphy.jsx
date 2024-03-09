import React, { useEffect, useState } from 'react'
import { GetGiphy } from '../Helper/GetGiphy';

export const Giphy = () => {
    const [resultData, setResultData] = useState([]);
    const [filter, setFilter] = useState();

    useEffect(() => {
        GetGiphy(filter).then(response => {
            const { data } = response;
            setResultData(data);
        })
    }, [filter])

    const gifSearch = event => {
        setFilter(event.target.value)
    }

    return (
        <>
            <br />
            <div className='container'>
                <div className='text-center'>
                    <div className='text-white'>
                        <span className='fs-1' >G  I  P  H  Y</span>
                    </div>
                </div>
                <br />


                <div className='container'>
                    <div className='card bg-black'>
                        <div className='input-group input-group-lg'>
                            <span className='input-group-text' id='inputGroup-sizing-lg'>Buscando...</span>
                            <input type='text' className='form-control' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-lg' placeholder='Palabra clave' onChange={gifSearch} />
                        </div>
                    </div>
                </div>
                <br />

                <div className='container'>
                    <div className='row'>
                        {
                            resultData.map((item, id) => (
                                <div className='col-md-4 mb-4' key={id}>
                                    <div className='card border-black'>
                                        <div className='card bg-transparent'>
                                            <div className='card bg-black'>
                                                <div className='card-body'>
                                                    <iframe title='gifs' src={item.embed_url} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div className='container'>
                    <div className='text-center'>
                        <span>
                            Proyecto realizado para el curso de Electiva 1 en Software 2024-1 del Tecnologíco de Antioquia
                        </span>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}