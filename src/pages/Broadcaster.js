import React from 'react';
import './page.css'
import { useState , useEffect} from 'react';
import axios from 'axios';
import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';
const Broadcaster = () => {
    const url = "http://localhost:9000/api/broadcaster";
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(function(response) {
            setData(response.data);
            console.log("get seccess!!!");
           console.log(data);
        }).catch(function(error) {
            console.log("faild");
            });
    },[]);

    console.log(data);

    let broadcaster = [];
        <table className = "title">
            <tbody>
            {data.map(pro => {
                broadcaster.push(
                            <div className='broadcasterlist'>
                                <div className='listspace'>
                                <span className='id'>{pro.id}</span>
                                <span className='title'>{pro.certificate}</span>
                                </div>
                            </div>
                            
                )
            })}
            </tbody>
        </table>
        
        return broadcaster;
}
export default Broadcaster;