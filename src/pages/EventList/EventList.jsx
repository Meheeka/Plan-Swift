import React from 'react'; // Import React if not already imported
import EventCard from '../../Components/EventCard.jsx';
import Navigation from '../../Components/Navigation/Navigation.jsx';


import './EventList.css';
import { eventList } from '../../utils/EventDatabase.jsx'; // Correct the path and filename

const EventList = () => {
    const renderEventCards = () =>{
        return eventList.map(({id,date,heading,location,img})=>{
            return(
                <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
                
                />
            )
        }
        )
    }
    return (
        <div>
            <Navigation/>
          
          <div className="event-list-wrapper">
            <div className="event-list">
              {eventList.length > 0 ? (
                renderEventCards()
              ) : (
                <p>No events available</p>
              )}
            </div>
          </div>
        </div>
      );
    };
    export default EventList;
