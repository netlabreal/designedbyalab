import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

import './header.css';
import Logo from './logo.png';


class Header extends Component {

    state = {
        scroll: 0,
        menu: {
            elements: [
                {name: 'Главная', idx: 'main', height: 0, top: 0},
                {name: 'Обо мне', idx: 'about', height: 0, top: 0},
                {name: 'Мои работы', idx: 'work', height: 0, top: 0},
                {name: 'Связаться', idx: 'contact', height: 0, top: 0}
            ],
            active: 0
        }
    }
    static defaultProps = {
        display: true
    }

    componentDidMount() {
        if (this.props.display) {
            window.addEventListener('scroll', this.onResize);
            // Определяем координаты для каждого элемента, на которые позже переместится
            let itog = [];
            this.state.menu.elements.map((el, id) => {
                let k = {
                    ...el,
                    height: document.getElementById(el.idx) ? document.getElementById(el.idx).offsetHeight : 0,
                    top: document.getElementById(el.idx) ? document.getElementById(el.idx).offsetTop : 0
                };
                itog.push(k);
                return k;
            });
            // Записываем координаты для тел
            this.setState({...this.state, menu: {elements: itog, active: 0}});
        }
    }

    componentWillUnmount() {
        if (this.props.display) {
            window.removeEventListener('scroll', this.onResize);
        }
    }

    onResize = () => {
        // Определяем активность меню
        let scroll = window.scrollY;
        let a = 0;
        this.state.menu.elements.map((el, id) => {
            if (el.top < scroll + 100 && (el.top + el.height) > scroll + 100) {
                a = id;
            }
            return null;
        });
        if (a !== this.state.menu.active) {
            let y = this.state.menu;
            y.active = a;
            this.setState({scroll, menu: y})
        } else {
            this.setState({...this.state, scroll})
        }
    }

    // Определяем событие при нажатии на элемент меню
    onClickMenu = (event) => {
        event.preventDefault();

        let nom = event.target.dataset.id;
        // если нажатый элемент не текущий
        if (nom !== this.state.menu.active) {
            // Опрделяем координаты тела и переходим на него
            let el = document.getElementById(this.state.menu.elements[nom].idx);
            el.scrollIntoView({block: "center", behavior: "smooth"});
            // Записываем новый активный элемент
            this.setState((state) => {
                    let d = state.menu;
                    d.active = parseInt(nom);
                    return {...state, menu: d}
                }
            )
        }
    }


    render() {
        let cl_navbar = 'header navbar-fixed-top ';
        let cl_but = 'nav-item-child nav-item-hover';
        let b_styles = {marginTop: '7px', marginLeft: '30px', color: 'white', fontSize: '14px', fontFamily: 'txt3'};
        let menu = null;
        let loginButton = null;
        let dop_style =  null;

        // Определяем необходимо ли выводить меню
        if (this.props.display) {
            if (this.state.scroll > 60) {
                dop_style = {
                    backgroundColor: 'white',
                    // paddingBottom: '10px'
                };
                cl_navbar += ' more60';
                cl_but = 'nav-item-child-more nav-item-hover';
                b_styles = {
                    marginTop: '7px',
                    marginLeft: '30px',
                    color: '#515769',
                    fontSize: '14px',
                    fontFamily: 'txt3'
                };
            }
            menu = this.state.menu.elements ? this.state.menu.elements.map((item, key) => {
                let classes = 'js_nav-item nav-item nav-home ';
                if (key === this.state.menu.active) {
                    classes += ' active';
                }
                return (
                    <li key={key} className={classes}>
                        <a href="/" onClick={this.onClickMenu} className={cl_but} data-id={key}>{item.name}</a>
                    </li>
                );
            }) : null;


            loginButton = menu ? (
                    <Link to="/login" className="header_link">
                        <Button style={b_styles}>
                            <Avatar style={{width: '30px', height: '30px', marginRight: '5px'}}><i
                                className="fa fa-user"/></Avatar>
                            войти
                        </Button>
                    </Link>
                )
                : null;
        }

        return (
            <header className={cl_navbar}>
                <nav className="navbar" role="navigation">
                    <div className="container" style={{transition: 'all .4s'}}>
                        <div className="menu-container js_nav-item">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".nav-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="toggle-icon"></span>
                                <i className="fa fa-bars " style={{paddingTop: '15px'}}></i>
                            </button>

                            <div className="logo">
                                <Link className="logo-wrap" to="/">
                                    <img className="logo-img" src={Logo} style={{width: '50px'}} alt=''/>
                                </Link>

                            </div>
                            <div className="tel-email">
                                <div style={{float: 'right'}}>
                                    <span>8 914 724 41 89</span> <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <span>litab.nhk@mail.ru</span> <i className="fa fa-envelope-o"
                                                                      aria-hidden="true"></i>
                                </div>
                            </div>

                        </div>

                        <div className="collapse navbar-collapse nav-collapse " style= {dop_style}>
                            <div className="menu-container">
                                <ul className="nav navbar-nav navbar-nav-right">
                                    {menu}
                                    {loginButton}

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;