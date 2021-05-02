import React from "react";

const Card = (props) =>{
    return(
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img src={props.imgsrc} className="card_image" alt="..." />
                    <div className="card-body">
                        <span className="card-title font-weight-bold">{props.title}</span>
                        <h3 className="card-text">{props.sname}</h3>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <button className="btn_style"> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;