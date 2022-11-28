import React from 'react';
import './Title.css'
import { useState , useEffect} from 'react';
import axios from 'axios';
import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';
const Title = () => {
    const url = "http://localhost:9000/api/title";
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

    let title = [];
        <table className = "title">
            <tbody>
            {data.map(pro => {
                title.push(
                            <div className='list'>
                                <div className='listspace'>
                                <span className='id'>{pro.id}</span>
                                <span className='title'>{pro.title}</span>
                                </div>
                            </div>
                            
                )
            })}
            </tbody>
        </table>
        
        return title;
}
export default Title;