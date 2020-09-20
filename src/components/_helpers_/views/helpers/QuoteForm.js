import React from 'react';

const QuoteForm = () => (
    <div className="card zIndex-1">
        <div className="card-header p-0">
            <div className="bg-secondary text-white text-center p-2">
                <h3><i className="fa fa-envelope pr-3"></i>Tell Us What Are You Looking For ?</h3>
            </div>
        </div>
        <div className="card-body p-3">
            <div className="form-group">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-user text-secondary"></i></div>
                    </div>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-phone text-secondary"></i></div>
                    </div>
                    <input type="tel" className="form-control" id="nombre" name="mobile" placeholder="+91 ..." required />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-comment text-secondary"></i></div>
                    </div>
                    <textarea className="form-control" placeholder="Tell Us What Are You Looking For ?" required></textarea>
                </div>
            </div>

            <div className="text-center">
                <input type="button" value="Send us" className="btn btn-secondary btn-block py-2" />
            </div>
        </div>
    </div>
)

export default QuoteForm;
