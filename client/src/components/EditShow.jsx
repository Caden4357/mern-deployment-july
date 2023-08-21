import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const EditShow = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [show, setShow] = useState({
        title: "",
        network: "",
        numberOfSeasons: 0,
        stillOn:false
    })

    const [errors, setErrors] = useState({})

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


    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            setShow({ ...show, stillOn: e.target.checked })
        }
        else {
            setShow({ ...show, [e.target.name]: e.target.value })
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/updateTvShow/${id}`, show)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h2>Edit Show</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={show.title} onChange={changeHandler}/>
                    {
                        errors.title ?
                            <p className='text-danger'>{errors.title.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Network</label>
                    <input type="text" name="network" value={show.network} onChange={changeHandler}/>
                    {
                        errors.network ?
                            <p className='text-danger'>{errors.network.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Number of Seasons</label>
                    <input type="number" name="numberOfSeasons" value={show.numberOfSeasons} onChange={changeHandler}/>
                    {
                        errors.numberOfSeasons ?
                            <p className='text-danger'>{errors.numberOfSeasons.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Still On?</label>
                    <input type="checkbox" name="stillOn" checked={show.stillOn} onChange={changeHandler}/>
                    {
                        errors.stillOn ?
                            <p className='text-danger'>{errors.stillOn.message}</p> :
                            null
                    }
                </div>
                <button>Add Show</button>
            </form>
        </div>
)}

export default EditShow;