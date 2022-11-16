import React from "react";
import "../../styles/Tour.scss";
import BookWidget from "../booking/BookWidget";
const Tour = () => {
  return (
    <div className="Tour">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/tours/tour_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">Tours & Activities</h2>
          <p>Explore all of our tours and activities here</p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">View all of our tours</h1>
        <p>
          Explore evrything Goa has to offer while staying at our resort.
          From it's amazing beaches, breathtaking nature, uniquie
          cuisine, and friendly locals, Goa has someone special for
          everybody.
        </p>
      </section>
      <section className="desc_main">
        <article className="descLeft">
          <div className="bg-light"></div>
          <h1 className="alt-font">Baga Beach</h1>
          <p>
          The most happening beach in Goa, Baga is loaded with shacks, party crowd, music, water sports, restaurants and clubs. Dolphin cruises and water sports like parasailing and banana rides are definitely the things to be tried here. You can also experience windsurfing during the peak season.
          </p>
          <h2>DAILY VISITS</h2>
        </article>
        <div className="descRight">
          <img src="/img/tours/tour_main.jpg" alt="tour_main" />
        </div>
      </section>
      <section className="desc_sec">
        <div className="img-container">
          <img src="/img/tours/tour_market.jpg" alt="markets" />
        </div>
        <article>
          <span></span>
          <div>
            <h1 className="alt-font">Explore the local markets</h1>
            <p>
            Anjuna Flea Market is one of the popular and great places of shopping in Goa. Hosted every Wednesday at Anjuna Beach, this flea market is a paradise place for real shopaholics. You will find hundreds of stores selling jewelries, clothes, wooden crafts, footwear, handicrafts, hammocks, bed sheets, trinkets, and wall hangings.
            </p>
          </div>
          <span></span>
        </article>
      </section>
      <section className="desc_gallery">
        <div className="descLeft">
          <h2 className="alt-font">Calangute</h2>
          <div className="img-container">
            <img
              className="lg-img"
              src="/img/tours/tour_island.jpg"
              alt="island_tour"
            />
          </div>
        </div>
        <div className="descRight">
          <img src="/img/tours/tour_island_01.jpg" alt="island_tour_01" />
          <article>
            <h2 className="alt-font">Calangute Beaches and Blue Waters</h2>
            <p>
              You won’t be short on things to do as Calangute has plenty of
              activities on offer, from diving, snorkelling, swimming. For those who prefer to relax, there are several amazing
              spas that offer a range of pampering and revitalizing packages.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Tour;
