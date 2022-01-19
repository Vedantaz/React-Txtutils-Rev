import React from 'react'
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';
export default function About() {
    window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
    const popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
        container: 'body'
    })
    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
                Popover on top
            </button>
        </div>
    )
}
// export default About.js;