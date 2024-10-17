import React, { useState } from 'react';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        setSubmitted(true);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {submitted ? (
                        <div className="alert alert-success text-center">
                            Thank you for contacting me!<br />
                            For More Information Visit My Social media<br /><br />
                            FaceBook: Percival Kent Landicho <br />
                            Insta: Percivalino <br />
                            Xcorp:  Prettyachuchu <br />

                        </div>
                    ) : (
                        <>
                            <h1 className="text-center">Contact Me</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Name:
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={name} 
                                            onChange={(e) => setName(e.target.value)} 
                                            required 
                                        />
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Email:
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required 
                                        />
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Message:
                                        <textarea 
                                            className="form-control" 
                                            value={message} 
                                            onChange={(e) => setMessage(e.target.value)} 
                                            required 
                                        />
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactPage;