import React from 'react';
import "./services.css"
const Services = () => {
  return (
    <section id="services" className="services-section">
          <h2>Services</h2>
          <p>We provide a full range of event services to make your special occasion stress-free and memorable. From planning to execution, we handle everything with creativity and precision.</p>

          <div className="service-list">
            <div className="service-card">
              <h3>Event Planning</h3>
              <p>Plan your perfect event with ease! Whether it's a wedding, birthday, corporate event, or any special occasion, we help you bring your vision to life.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLQLWoVbworZ9nXz40X5KGv4Wj41YNwKRVw&s"
                alt="event-planning"
              />
            </div>
            <div className="service-card">
              <h3>Event Management</h3>
              <p>We turn your dream event into reality with seamless planning and execution.</p>
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D12AQHbFAgJm3O16w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1618318102565?e=2147483647&v=beta&t=NKSioZnKzeTuTO97v15fZgB4mT0BUggujs-4Y4tdQ4U"
                alt="evet-management"
                />
            </div>
            <div className="service-card">
              <h3>Event Coordinator</h3>
              <p>An Event Coordinator ensures every aspect of your event runs smoothly, from planning to execution.</p>
                <img 
                src="https://cdnl.iconscout.com/lottie/premium/thumb/process-management-animation-download-in-lottie-json-gif-static-svg-file-formats--flow-task-manage-event-business-character-pack-people-animations-4651682.gif"
                alt="event-coordinator"
                />

            </div>
            <div className="service-card" section="services">
              <h3>Event Marketing</h3>
              <p>Maximize your event’s reach with strategic marketing that attracts the right audience, boosts engagement, and ensures a successful turnout. </p>
              <img
              src="https://media.licdn.com/dms/image/v2/D5612AQHAjuQVVC5-zA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657725931052?e=2147483647&v=beta&t=buJNrnULUjCwAT8ywrxYNsxLPbFbVG1SnYEqjY73w50"
              alt="event-marketing"
              />
            </div>
            <div className="service-card">
              <h3>Event Promotion</h3>
              <p>Boost attendance and engagement with our expert event promotion strategies! Whether you’re hosting a conference, concert, product launch, or festival, we ensure your event gets the visibility it deserves.</p>
              <img
              src="https://cdn.prod.website-files.com/57822c659e1627a433e6a7c6/60a48dad9548b25e0af86768_iC2Aaf5UG2oPx6Kh18wrGewUGDtyVABcPzSmk9Qn5gGIdGWYYhlHASzdh5itfRfhH-QriyDFE612HTsSWVswrgHRyq2lz4JNMMKZ5rGOKlI0b6V-C8OgEE6iwpY-M6cHG7S9un9P.gif"
              alt="event-promotion"
              />
            </div>
           
          </div>

        </section>
  );
};

export default Services;
