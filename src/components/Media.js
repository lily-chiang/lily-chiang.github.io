import React from "react";

export default function Media(title, url) {
    return (
        <div className="modal fade" id="media" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="card">
            <div className="card-header"><h4>{title}</h4></div>
            <div className="card-body">
            <iframe 
                width="560"
                height="315"
                align="center"
                src={url}
                title={title}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            </div>
            </div>
        </div>
        </div>
        </div>  
    );
}