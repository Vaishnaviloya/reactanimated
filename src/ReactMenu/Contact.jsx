import React from 'react'
import { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        Fullname: '',
        phone: '',
        email: '',
        msg: ''
    })

    const InputEvent = (event) => {
        const {name, value} = event.target

        setData((prevalue) => {
            return{
                ...prevalue,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert(` ${data.Fullname} `)
    }

    return (
        <>
            <div className="my-5">
                <h1>Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="Fullname"
                                    value={data.Fullname}
                                    onChange={InputEvent}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Your Fullname" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number"
                                    className="form-control"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your phone number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    id="exampleFormControlInput1"
                                    placeholder="Enter your emailid" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="email"
                                    value={data.msg}
                                    onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact