import React from 'react';
import Header from './header/header';
import Calendar from './calendar/calendar'
import ModalExample from './modal/modal';
import './app.scss';
import {
    Route,
} from "react-router-dom";

const App = () => {
  return (
      <div className="App">
        <Header/>
        <main>
        <ModalExample/>
            <Route exact path="/" render={() =>
                <div className="content">
                    <div className="content-left">
                        <div className="content-left-text">
                                <span>
                                    Choose the day <br/>
                                    for the meeting
                                </span>
                            <span>
                                We encourage you to book your <br/>
                                appointment online. <br/>
                                This save your time.
                                </span>
                        </div>
                    </div>
                    <Calendar/>
                </div>
            }
            />

            <Route path="/about" render={() =>
                <div className="about">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum explicabo iure iusto neque repellendus sit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto cum debitis dolores eaque eum iusto labore necessitatibus nihil numquam, placeat rem, repellendus, rerum tempora ullam unde voluptas voluptatem?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, atque autem commodi cumque debitis expedita facere id, in incidunt ipsam labore laudantium libero maiores minus modi nostrum numquam optio pariatur praesentium quam recusandae repellendus repudiandae rerum sit tenetur ullam velit veritatis vitae voluptates. Ducimus error magni mollitia quae voluptatem?</p>
                </div>
            }
            />

      </main>
    </div>
  );
};

export default App;
