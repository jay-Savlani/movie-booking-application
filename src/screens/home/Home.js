import React, {Component} from 'react';
import { Header } from '../../common/header/Header';
import './Home.css';
import { ImageList, ImageListItem, ImageListItemBar, Card, CardContent, CardActions, CardHeader, Theme } from '@material-ui/core';
import moviesData from '../../common/moviesData';
import { convertDate } from './convertDate';

class Home extends Component {
    render() {
        return(
            <div>
                    <Header />
                    <div className='text-center upcoming-movies-header'><span >Upcoming Movies</span></div>
                    {/* Upcoming Movies container */}
                    <ImageList 
                    variant='standard'
                    cols='6' 
                    rows='1' 
                    rowHeight='250' 
                    style = {{flexWrap: 'nowrap'}}
                    className='curs-pointer'
                    >   
                        {
                            moviesData.map(movie => {
                                return(
                                    <ImageListItem key='movie.id'>
                                        <img src={movie.poster_url} alt={movie.title}/>
                                        <ImageListItemBar 
                                            title={movie.title}
                                        />
                                    </ImageListItem>
                                );
                            })
                        }
                    </ImageList>
                    <div className='flex-container'> 
                        <div className='left'> {/* Released Movies container */}
                            <ImageList 
                            variant = 'standard' 
                            cols='4' rowHeight='350'  
                            className='image-list-release-movies curs-pointer' 
                            gap={50}
                            
                            >
                                {
                                    moviesData.map(movie => {
                                        const readableDate = convertDate(movie.release_date);
                                        return (
                                            <ImageListItem>
                                                <img src={movie.poster_url} alt={movie.title}/>
                                                <ImageListItemBar title={movie.title} subtitle={`Release Date: ${readableDate}`}  />
                                            </ImageListItem>
                                          
                                        )
                                    })
                                }
                            </ImageList>
                        </div>
                        
                    </div>
            </div>
        );
    }
}


export {Home};