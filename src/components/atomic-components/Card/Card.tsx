import React from 'react';
import './Card.scss';
import { LEFT, RIGHT, TOP } from '../../../constants/constants';

/**
The sizing of the card has to be handled by the parent component
Sizing option for the image not included
@params
    cardDetails - Object that contains {image, title, body}. Only title is required, image & body are optional
    cardOrient - Positioning of the image inside the card - left / top / right
    background - One out of the two background color options
*/

const CustomCard:React.FC<{cardDetails:any, cardOrient:string, background:number}> = ({cardDetails, cardOrient, background}) => {

    let cardImage  = cardDetails.hasOwnProperty('image') ? 
        (
            <img src={cardDetails.image} alt={cardDetails.title} className="card-img px-4 my-3 my-md-3" />
        ) : null;

    let cardContent = (
        <div className="card-body">
            <h4 className="card-title">{cardDetails.title}</h4>
            { cardDetails.hasOwnProperty('body') ? (<h4 className="card-text">{cardDetails.body}</h4> ) : "" }  
        </div>
    )
        

    let myCard = null;
    if(cardOrient === LEFT){
        myCard = (
            <div className="row">
                {cardImage === null ? 
                    (<div className="col">{cardContent}</div>) :
                    (<>
                        <div className="col-sm-12 col-md-4">
                            {cardImage}
                        </div>
                        <div className="col-sm-12 col-md-8">                    
                            {cardContent}
                        </div>
                    </>)
                }                
            </div>
        )
    }
    else if(cardOrient === RIGHT){
        myCard = (
            <div className="row">  
            {cardImage === null ? 
                (<div className="col">{cardContent}</div>) :
                (<>
                    <div className="col-sm-12 col-md-8">                    
                        {cardContent}
                    </div>
                    <div className="col-sm-12 col-md-4">
                        {cardImage}
                    </div>
                </>)
            }  
            </div>
        )
    }
    else if(cardOrient === TOP || cardOrient){
        myCard = (
            <div className="row"> 
                <div className="col">
                {cardImage === null ? "" : (<div className="mt-4 mt-md-5">{cardImage}</div>)}
                    {cardContent}
                </div>
            </div>
        )
    }


    if(background === 1){
        console.log(myCard);
        return(
            <div className="card card-background-primary">
                {myCard}
            </div>
        )
    }
    else{
        return(
            <div className="card card-background-secondary">
                {myCard}
            </div>
        )
    }
}

export default CustomCard;