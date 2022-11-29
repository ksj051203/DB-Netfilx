import React from 'react';
import './page.css'
import { useState , useEffect} from 'react';
import axios from 'axios';
import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';
const Gnere = () => {
    const url = "http://localhost:9000/api/gnere";
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

    let gnere = [];
        <table className = "title">
            <tbody>
            {data.map(pro => {
                gnere.push(
                            <div className='gnerelist'>
                                <div className='listspace'>
                                <span className='id'>{pro.id}</span>
                                <span className='title'>{pro.genre}</span>
                                </div>
                            </div>
                            
                )
            })}
            </tbody>
        </table>
        
        return gnere;
}
export default Gnere;