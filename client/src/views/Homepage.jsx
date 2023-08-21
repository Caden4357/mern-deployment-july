import React, {useState} from 'react';
import axios from 'axios';
import ShowForm from '../components/ShowForm';
import DisplayAllShows from '../components/DisplayAllShows';
const Homepage = (props) => {
    const [shows, setShows] = useState([])
    return (
        <>
            <ShowForm shows={shows} setShows={setShows}/>
            <DisplayAllShows shows={shows} setShows={setShows}/>
        </>
)}

export default Homepage;