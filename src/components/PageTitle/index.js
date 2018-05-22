import React from 'react'

export default function PageTitle({title}) {
    return (
        <div className='jumbotron text-white bg-dark rounded-0'>
            <div className='container'>
                <h1 className="display-4 font-bold">{title}</h1>
            </div>
        </div>
    );
}