import React, {Component, Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';


import Skeleton from '@material-ui/lab/Skeleton';

import MService from "../../servicies/m-service";
// import im1 from "../works/img/1.png";
// import im2 from "../works/img/2.png";
import './my-works.css';


export default class MyWorks extends Component {
    state = {data: [], loading: true}

    componentDidMount() {
        let m = new MService();
        m.getWorks()
            .then((data) => {
                    this.setState({data, loading: false});
                }
            )
    }

    onClick(event) {
        console.log(event.target);
    }

    render() {
        let rd = null;

        if (this.state.loading) {
            rd = (<div>Loading...</div>);
            rd = <Fragment>
                <div className="col-sm-6 col-md-4 workc">
                    <Skeleton variant="rect" width='90%' height={200}/> <Skeleton width='90%'/> <Skeleton width='60%'/>
                </div>
                <div className="col-sm-6 col-md-4 workc">
                    <Skeleton variant="rect" width='90%' height={200}/> <Skeleton width='90%'/> <Skeleton width='60%'/>
                </div>
                <div className="col-sm-6 col-md-4 workc">
                    <Skeleton variant="rect" width='90%' height={200}/> <Skeleton width='90%'/> <Skeleton width='60%'/>
                </div>
            </Fragment>
        } else {
            rd = this.state.data.map((data, key) => {
                return (
                    <W key={key} dt={data}/>
                );
            });
        }
        return (
            <section id="work">
                <div className="container content-lg">
                    <div className="row margin-b-40">
                        <div className="col-sm-6">
                            <h2 className="main" style={{paddingBottom: '25px'}}>Мои работы</h2>
                        </div>
                    </div>

                    <div className="row" style={{textAlign: 'center'}}>

                        {rd}

                    </div>

                </div>

            </section>
        );
    }
}

const W = ({dt}) => {
    let tech = dt.tech.map((d, key) => {
        return (
            <Chip key={key} color="primary" size="small" label={d} style={{marginRight: '5px', marginBottom: '5px'}}/>
        );
    });
    return (
        <div className="col-sm-6 col-md-4 workc"
             >
            <Card className="card" onClick={
                (event) => {
                    window.open(dt.site, "_blank");
                }
            }>

                <CardActionArea>
                    <CardHeader style={{textAlign: 'left', fontFamily: 'txt4!important'}}
                                avatar={
                                    <Avatar aria-label="recipe">
                                        {dt.avatar}
                                    </Avatar>}
                                action={
                                    <div size="small" color="primary" style={{}} className="smallLink">
                                        {/*<a href={dt.site}>перейти<i*/}
                                        {/*    className="fa fa-arrow-circle-o-right" style={{paddingLeft: '5px'}}></i></a>*/}
                                    </div>
                                }
                                title={dt.title}
                                subheader={dt.subheader}


                    >
                    </CardHeader>
                    <CardMedia
                        className="media"
                        image={dt.img}
                        title={dt.title}
                        // onClick={
                        //     (event) => {
                        //         console.log(event.target);
                        //     }
                        // }
                        // data-url={dt.site}
                    />
                    <CardContent>
                        <div>

                        </div>
                        <p style={{fontFamily: 'txt1'}}>
                            {dt.opis}
                        </p>


                    </CardContent>
                </CardActionArea>

                <Divider variant="middle"/>
                <div style={{padding: '15px'}}>
                    {tech}
                </div>
            </Card>
        </div>
    );
}