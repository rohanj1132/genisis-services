import React from 'react';
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
                        <a href="#" className="card-text">Read more</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={socialTileImg} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Social Events</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="card-text">Read more</a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={weddingTileImg} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Weddings</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <a href="#" className="card-text">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default EventsPage

{/*<h2>Corporate Events:</h2>
    <p>
      We’ll Bring Your Event to Life!
      Our corporate customers never stop to stun us. Throughout the years, we have had the benefit to work with some skilled and creative individuals. We're fortunate to have assembled enduring connections and are regarded to work with these people consistently.
      We have collaborated on amazing events, including:
      •	Fundraisers
      •	Stunning Galas
      •	Award and Scholarship Banquets
      •	Premier Events
      •	Grand Openings
      •	Open Houses
      •	Haute Holiday Parties
      •	Breakfast Meetings
      •	Corporate Luncheons
      •	Cocktail Receptions
      •	Company Picnics
      •	Summer BBQs
      •	Carnivals
      •	Concerts…the list goes on.
      What awesome thoughts have you been supposing about? We'd love to encourage convey those plans to reality. Our occasion experts will outline occasions suited to address your issues. We'll work with you to upgrade space and measurement, to consolidate your Company picture and brand, to add amazing components to wow your visitors, to mirror the occasion message, and to discover answers for fit your financial plan. 
      Genisis Services needs your occasion to be a win and our group of authorities will be here for you always. Depend on us to create a consistent and critical occasion where you, the host, can kick back and have a good time.
    </p>
    <h2>Gala/Social Events:</h2>
    <p>Each Occasion Matters! 
        Life is brimming with uncommon minutes. On these events we need to tune in to what you imagine, to make and team up, with you a stunning unique occasion that you and are your visitors will appreciate. Host Gathering Will Travel will ensure that you, the host, will have the capacity to invest energy with your family and companions, while we deal with every one of the subtle elements. Over giving a tweaked gourmet menu, we can facilitate every one of the additional items: rental things, delightful cloths, dazzling decorative layouts, customized and subject style bundles, amusement, thus considerably more.
        We Want to Help with Your Next Event!
        What are you planning? An anniversary, birthday, farewell, prom, graduation, reunion, engagement party, bridal shower, baby shower, housewarming, pool party, barn raising, holiday get-together…or something else?
    </p>
    <h2>Weddings:</h2>
    <p>Your Day Is Here!
From the minute your visitors arrive, they will feel invited and amped up for what's to come. Everything about your wedding will be nearly viewed over by our gifted group of occasion pros, so you and your visitors will have the capacity to appreciate all that you've arranged. You won't need to lift a finger.
Tuning in to you from the very first moment and working with you always beyond any doubt your vision turns into a reality… whatever that vision might be. 
From creative hand passed hors d'oeurvres served by intelligently dressed servers to splendidly bundled favours… from an appreciated mark mixed drink served in an exquisite woodwind to our mark gourmet hot chocolate and coffeehouses… from unusual place card holders to a lit sparkler exit… from the primary nibble of the tweaked wedding supper to the last chomp of the debauched wedding cake – Genisis Services will give each detail of the enormous day our complete consideration
    </p>*/}