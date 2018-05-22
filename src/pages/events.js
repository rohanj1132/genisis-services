import React from 'react';
import Link from 'gatsby-link';
import PageTitle from '../components/PageTitle';
import corporateTileImg from '../../content/corporate-event-tile.jpg';
import socialTileImg from '../../content/social-event-tile.jpg';
import weddingTileImg from '../../content/wedding-tile.jpg';

const EventsPage = () => (
    <div>
        <PageTitle title='Events' />
        <div className='container'>
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src={corporateTileImg} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Corporate Events</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <Link to="/corporate-events" className="card-text">Read more</Link>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={socialTileImg} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Social Events</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/social-events" className="card-text">Read more</Link>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={weddingTileImg} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Weddings</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <Link to="/weddings" className="card-text">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default EventsPage

{/*
    <h2>Gala/Social Events:</h2>
    
    <h2>Weddings:</h2>
   */}