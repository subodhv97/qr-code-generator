import React, { Component, useState } from 'react';
import Tesseract from 'tesseract.js';
import QRCode from 'qrcode.react';

const Ocrtoqr = () => {
    const [isLoading, setisLoading] = useState(false);
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
    const [progress, setprogress] = useState(0);

    const handleSubmit = () => {
        setisLoading(true);
        Tesseract.recognize(image, 'eng', {
            logger: (m) => {
                console.log(m);
                if (m.status === 'recognizing text') {
                    setprogress(parseInt(m.progress * 100));
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result) => {
                console.log(result.data);
                setText(result.data.text);
                setisLoading(false);
            });
    };

    return (
        <div className="container">
            <div className="row h-100 mt-2">
                <div className="col-md-4 mx-auto h-100 d-flex flex-column justify-content-center">
                    {!isLoading && (<h1 className="text-center py-5 mc-5">OCR to QR</h1>)}
                    {!isLoading && (
                        <>
                            <progress className="form-control" value={progress} max="100">
                                {progress}%{' '}
                            </progress>{''}
                            <p className="text-center py-0 my-0">Converting:- {progress} % </p>
                        </>
                    )}
                    {!isLoading && !text && (
                        <>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setImage(URL.createObjectURL(e.target.files[0]))
                                }
                                className="form-control mt-2 mb-2"
                            />
                            <input
                                type="button"
                                onClick={handleSubmit}
                                className="btn btn-primary mt-3"
                                value="Convert"
                            />
                        </>
                    )}
                    {!isLoading && text && (
                        <>
                            <textarea
                                className="form-control mt-2"
                                rows="30"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </>
                    )}


                </div>
                <div className="col-md-4 mx-auto h-100 d-flex flex-column mt-4 pt-4 justify-content-center qrbox-output" style={{ border: "black" }}>
                    <QRCode

                        id="qrelement"
                        size={200}
                        value={text} />
            </div>
            </div>
            
        </div>
        



    )
};


export default Ocrtoqr;