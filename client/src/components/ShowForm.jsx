import React, {useState} from 'react';
import axios from 'axios';
const ShowForm = ({shows, setShows}) => {
    const [show, setShow] = useState({
        title: "",
        network: "",
        numberOfSeasons: 0,
        stillOn:false
    })

    const [errors, setErrors] = useState({})

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
        axios.post('http://localhost:8000/api/newTvShow', show)
            .then((res) => {
                console.log(res);
                setShows([...shows, res.data])
                setShow({
                    title: "",
                    network: "",
                    numberOfSeasons: 0,
                    stillOn:false
                })
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div>
            <h2>Add A Show</h2>
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

export default ShowForm;