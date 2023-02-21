import * as React from 'react';
import { FC, useEffect, useState } from 'react';

interface Props {
    onClick: () => void;
}

export const Screen: FC<Props> = () => {
    const [data, setData] = useState();
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}`;
    useEffect(() => {
        const getMyData = async () => {
             fetch(url, {
                headers: {
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(response => response.json()).then(data => setData(data));
        }; getMyData();
    }, []);
    return (
        <div>
            <h1>NASA image</h1>
            <div>

                {data && 
                <div>
                <img alt='nasa' src={data['url']} />
                <p>{data['explanation']}</p>
                </div>}
            </div>
        </div>

    )
}
