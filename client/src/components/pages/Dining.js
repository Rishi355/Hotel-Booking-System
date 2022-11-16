import React from "react";
import "../../styles/Dining.scss";
const Dining = () => {
  return (
    <div className="Dining">
      <header className='header-main'
        style={{
          background:
            ' no-repeat center/cover url("/img/dining/dining_header.jpg")',
        }}
      >
          <div className="header-content">
              <h2 className="alt-font">Restaurant & Bar</h2>
        <p>Discover Goa's best dining</p>
          </div>
      
      </header>
      <section className="desc">
        <h1 className="alt-font">South Indian food</h1>
        <p>
          The essence of south Indian food is all about balance – achieving the perfect
          harmony between sweet, sour, hot and salty. Pungent fresh herbs, such
          as lemongrass and galangal, tone down overpowering spices, while salty
          sauces are tempered with sugars and offset by acids, such as lemon and
          lime.
        </p>
      </section>
      <section className="desc_gallery">
        <div className="descLeft">
          <h2 className="alt-font">Dosa</h2>
          <div className="img-container">
            <img src="/img/dining/dining_article.jpg" alt="dining_pic" />
          </div>
        </div>
        <div className="descRight">
          <img src="/img/dining/dining_team.jpg" alt="dining_team" />
          <article>
            <h2 className="alt-font">World Class Culinary Team</h2>
            <p>
              Here you’ll be offered best south indian food from the indian's best chef.
              With stunning views of iconic Table Mountain, our Cape
              Town fine dining restaurant and chic bar comes alive with
              innovative dishes, intriguing cocktails, sparkling conversation
              and chilled-out tunes.
            </p>
          </article>
        </div>
      </section>
      <section className="desc_photo">
        <div className="descLeft">
          <div>
             <h1 className="alt-font">Balaji Bar & Lounge</h1>
          <p>
            The stylish heart of our resort, Vista Bar and Lounge’s eclectic
            drinks, live entertainment and unfettered mountain views are
            renowned in Cape Town. Indulge in afternoon tea, and by night, let
            our expert mixologists personalise your cocktail. Table Mountain
            forms an irresistible backdrop to your cosmopolitan evening out, as
            Vista Bar buzzes with a sophisticated crowd.
          </p>
          </div>
         
        </div>
        <div className="descRight">
          <img src="/img/dining/dining_bar.jpg" alt="dining_bar" />
        </div>
      </section>
    </div>
  );
};

export default Dining;
