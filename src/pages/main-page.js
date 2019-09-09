import React from 'react';
import Header from "../components/header";
import background from "../components/app/img/fon.jpg";
import li from "../components/app/img/li.png";
import gh from "../components/app/img/gh.png";
import SendMe from "../components/sendme";
import About from "../components/about";
import MyWorks from "../components/my-works";

const MainPage = (props) =>{
    let y = new Date().getFullYear();
    console.log(y);
    return(
        <div>
            <Header/>
            <Main />
            <About/>
            {/*/!*<Works />*!/*/}
            <MyWorks />
            <SendMe/>
            <footer id="footer">
                Copyright © Alexandr Litvinov {y}
            </footer>
        </div>
    );
}

function Main() {
    return (
        <section id="main">
            <div className="promo-block" style={{backgroundImage: `url(${background})`}}>
                <div className="container" style={{textAlign: 'center'}}>
                    <div className="row">
                        <div className="col-sm-6 sm-margin-b-60">
                            <div className="margin-b-30">
                                <h1 className="promo-block-title">Александр Литвинов</h1>
                                <p className="promo-block-text">web программист</p>
                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="promo-block-img-wrap">
                                <a rel="noopener noreferrer" href="http://ru.linkedin.com/in/designedbylab" target='_blank' style={{paddingRight: '10px'}}><img src={li} id="linkedin" alt=""/></a>
                                <a rel="noopener noreferrer"  href="https://github.com/netlabreal/" target='_blank'> <img src={gh} id="github" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;