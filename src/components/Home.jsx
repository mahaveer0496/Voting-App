import React from 'react';
import ScrollArea from 'react-scrollbar';

const reactLogo = require('./../img/react.svg');
const reduxLogo = require('./../img/redux.svg');
const mongoLogo = require('./../img/mongo.svg');
const nodeLogo = require('./../img/node.svg');


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
    <p className="section__middle-heading">
      Created using
    </p>
    <section className="section__middle">
      <div className="card__container">
        <div className="card card-react">
          <div className="card-img">
            <img src={reactLogo} alt="React Logo" width={200} height={100} />
          </div>
          <div className="card-text">
            <p>
              Bla bla bla bla  Bla bla bla bla Bla bla bla bla
            </p>
          </div>
        </div>

        <div className="card card-redux">
          <div className="card-img">
            <img src={reduxLogo} alt="React Logo" width={200} height={100} />
          </div>
          <div className="card-text">
            <p>
              Bla bla bla bla  Bla bla bla bla Bla bla bla bla
            </p>
          </div>
        </div>

        <div className="card card-mongo">
          <div className="card-img">
            <img src={mongoLogo} alt="React Logo" width={200} height={100} />
          </div>
          <div className="card-text">
            <p>
              Bla bla bla bla  Bla bla bla bla Bla bla bla bla
            </p>
          </div>
        </div>

        <div className="card card-node">
          <div className="card-img">
            <img src={nodeLogo} alt="React Logo" width={200} height={100} />
          </div>
          <div className="card-text">
            <p>
              Bla bla bla bla  Bla bla bla bla Bla bla bla bla
          </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section__bottom">
      <div className="space__creator" />
      <p className="section__bottom-heading">
        Easily share on popular sites
      </p>
    </section>
  </div>
);
export default Home;
