import React from 'react';

const Home = () => (
  <div className="home">
    <section className="section__top">
      <div className="heading_and_button_container">
        <p className="section__top-heading">
          <span className="section__top-blue-text">Votes</span> that matters</p>
        <button className="button button-cta">
          Vote now
    </button>

      </div>
      <div className="count count-topics">
        <strong className="count-bold">2000</strong> topics created
    </div>
      <div className="count count-votes">
        <strong className="count-bold">2000</strong> votes given
    </div>
    </section>
    <div className="space__creator" />
    <section className="section__middle">
      <p className="section__middle-heading">
        Created using
      </p>

      <div className="card__container">

        <div className="card card-react">
          this is a card
      </div>

        <div className="card card-redux">
          this is a card
      </div>

        <div className="card card-mongo">
          this is a card
      </div>

        <div className="card card-node">
          this is a card
      </div>
      </div>
    </section>
    <div className="space__creator" />

  </div>
);

export default Home;
