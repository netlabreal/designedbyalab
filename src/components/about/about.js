import React from 'react';

import Chip from '@material-ui/core/Chip';

import './about.css';
import ccna from './img/ccna1.png';
import ms from './img/mcitp.png';
import myFoto from './img/myFoto.png';


const About = () => {
    return (
        <section id="about">
            <div className="container content-lg">
                <div className="row">
                    <div className="col-sm-5 sm-margin-b-60" style={{textAlign: 'center', paddingTop: '15px'}}>
                        <img className="full-width img-responsive" src={myFoto} style={{display: 'inline-block'}}
                             alt=''/>
                        <div className="m_text">
                            <ul style={{padding: '0', listStyle: 'none'}}>
                                <li><span>Проживание:</span> Владивосток, Россия</li>
                                <li><span>Возраст:</span> 37 лет</li>
                                <li><span>Образование:</span> высшее</li>
                                <li><span>Опыт работы:</span> 14 лет</li>
                            </ul>


                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="section-seperator margin-b-50">
                            <div className="margin-b-50">
                                <div className="margin-b-30 ">
                                    <h2 className="main">Обо мне</h2>
                                    <p className="ab-text">
                                        Привет! Меня зовут Александр. Программированием занимаюсь с 2015 года. Успешно
                                        работаю в сфере IT, занимаясь как web разработкой так и администрированием серверов на базе Windows/Linux.
                                        Имею успешный опыт удаленной работы команде. Постоянно развиваюсь в профессиональной сфере.

                                    </p>

                                </div>
                                <div id="cv">
                                    <a  href='/Litvinov.pdf' target='_blank' className="btn-cv">Скачать мое резюме</a>
                                </div>
                            </div>
                        </div>

                        <h2 className="maind">Мои навыки</h2>
                        <div className="pred">
                            <div className="progress-box">
                                <h5>PHP / SYMFONY / YII2 / LARAVEL / 1C BITRIX<span
                                    className="color-heading pull-right">72%</span></h5>
                                <div className="progress" style={{opacity: '1', left: '0px'}}>
                                    <div className="progress-bar bg-color-base" role="progressbar" data-width="72"
                                         style={{width: '72%'}}></div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>PYTHON / DJANGO <span className="color-heading pull-right">86%</span></h5>
                                <div className="progress" style={{opacity: '1', left: '0px'}}>
                                    <div className="progress-bar bg-color-base" role="progressbar" data-width="86"
                                         style={{width: '86%'}}></div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>JAVASCRIPT / REACT / JQUERY <span className="color-heading pull-right">77%</span>
                                </h5>
                                <div className="progress" style={{opacity: '1', left: '0px'}}>
                                    <div className="progress-bar bg-color-base" role="progressbar" data-width="77"
                                         style={{width: '77%'}}></div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <h5>MS SQLSERVER / MYSQL / POSTGRESQL <span
                                    className="color-heading pull-right">71%</span>
                                </h5>
                                <div className="progress" style={{opacity: '1', left: '0px'}}>
                                    <div className="progress-bar bg-color-base" role="progressbar" data-width="71"
                                         style={{width: '71%'}}></div>
                                </div>
                            </div>

                            <div className="progress-box">
                                <h5>WINDOWS / LINUX <span className="color-heading pull-right">81%</span></h5>
                                <div className="progress" style={{opacity: '1', left: '0px'}}>
                                    <div className="progress-bar bg-color-base" role="progressbar" data-width="81"
                                         style={{width: '81%'}}></div>
                                </div>
                            </div>
                        </div>

                        <h2 className="maind">Мои сертификаты</h2>
                        <div className="sertificates pred">
                            <div className="col-sm-6">
                                <div className="work-overlay">

                                    <img className="full-width img-responsive" src={ccna} alt="CCNA"/>
                                    <Chip color="primary" size="small" label="Cisco Sertified Network Associate"
                                          style={{marginTop: '5px'}}/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="work-overlay">
                                    <img className="full-width img-responsive" src={ms} alt="MSDBA"/>
                                    <Chip color="primary" size="small" label="Database Administrator 2008"
                                          style={{marginTop: '5px'}}/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;