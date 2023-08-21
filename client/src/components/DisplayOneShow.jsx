import React, {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const DisplayOneShow = (props) => {
    const { id } = useParams();

    const [show, setShow] = useState({
        title: "",
        network: "",
        numberOfSeasons: 0,
        stillOn:false
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneTvShow/${id}`)
            .then((res) => {
                console.log(res);
                setShow(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h2>Title: {show.title}</h2>
            <h2>Network: {show.network}</h2>
            <h2>Number Of Seasons: {show.numberOfSeasons}</h2>
            {
                show.stillOn ?
                    <h2>Still On: Yes</h2> :
                    <h2>Still On: No</h2>   
            }

        </div>
)}

export default DisplayOneShow;