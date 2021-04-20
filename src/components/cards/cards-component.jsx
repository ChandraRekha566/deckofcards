import React from 'react';
import './cards-component.css';
import CardsDeck from './cards.json';
import cardDetails from './cards.json';

class Cards extends React.Component{
    constructor(){
        super();
        this.state = {
            cardState: CardsDeck.cardDetails,
            sort: CardsDeck.sortCards,
            sortCards: []
          
        }
    }

    shuffleCards(deck) {
        let counter;
        let t;
        let i;

        let shuff = [...this.state.cardState];
        for(i=shuff.length -1; i>0; i--){
            t=Math.floor(Math.random() * (i+1));
            counter=shuff[i];
            shuff[i]=shuff[t];
            shuff[t]=counter;
        }
        this.setState({
            cardState: shuff
        })
        
        return deck;
    }

    sortCards=()=>{
        let sort= this.state.sortCards.sort();
        console.log(sort);
    }
    saveCard(){
        console.log('Card saved');
    }

    render(){
        return(
            <div>
                <h4 className="head"> iX Cards Test</h4>
                <div className="container">
                    <h5 className="key">Deck</h5>
                    <h5 className="key">Controls</h5>
                    <h5 className="key">Hand</h5>
                </div>
                <div className="container">
                    <button className="key" onClick={() => this.shuffleCards(cardDetails)}>Shuffle</button>
                    <p className="key">Save Game</p>
                    <button className="key" onClick={() => this.sortCards()}>Sort</button>
                    
                </div>
                
                <div className="container">
                    <p className="key">1 of clubs<br/>2 of clubs</p>
                    <div>
                    <button className="key" onClick={() => this.saveCard()}>Save</button>
                    <button className="key" onClick={() => this.resetCard()}>Reset</button>
                    </div>
                    <p className="key">1 of spades <br/> 2 of spades</p>
                </div>
                <div className="container">
                    <p className="key">...</p>
                    <div>
                    <p className="key">Draw Cards</p>
                    <button className="key" onClick={this.drawFun}>Draw</button>
                    </div>
                    <p className="key"></p>

                </div>
            <div>
                {this.state.cardState.map(item => {
                return <div key={item.id}>{item.name} in {item.type}</div>
            })}
            </div>
            </div>
            
        )
    }
}

export default Cards;