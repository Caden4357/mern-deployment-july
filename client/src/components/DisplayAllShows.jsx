import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const DisplayAllShows = ({ shows, setShows }) => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/allTvShows')
            .then((res) => {
                console.log(res);
                setShows(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const removeFromDom = (id) => {
        const updatedShows = shows.filter((show) => show._id !== id);
        setShows(updatedShows);
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteTvShow/${id}`)
            .then((res) => {
                console.log(res);
                // setShows(shows.filter((show) => show._id !== id))
                removeFromDom(id);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='mt-5'>
            <h2>All Shows</h2>
            <div className='d-flex justify-content-center'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Network</th>
                            <th>Number of Seasons</th>
                            <th>Still On?</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shows.map((show) => (
                                <tr key={show._id}>
                                    <td>{show.title}</td>
                                    <td>{show.network}</td>
                                    <td>{show.numberOfSeasons}</td>
                                    <td>{show.stillOn ? "Yes" : "No"}</td>
                                    <td>
                                        <button onClick={() => deleteHandler(show._id)} className='btn btn-danger'>Delete</button>
                                        <Link to={`/editShow/${show._id}`} className='btn btn-success'>Edit</Link>
                                        <Link to={`/oneShow/${show._id}`} className='btn btn-success'>View</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayAllShows;