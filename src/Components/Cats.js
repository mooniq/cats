import React, { Component } from 'react';
import '../App.css';

class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            modalShow: false,
        };

    }

    componentDidMount() {
        fetch("https://api.thecatapi.com/v1/images/search?limit=100&page=5&order=Desc&size=small")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        // const audio = new Audio("Cat-Meowing.wav");
        const { error, isLoaded, items } = this.state;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="row align-items-start">
                    {items.map((item, index) => (
                        <div className="card bg-light mb-3 mr-1" key={index}>
                            <img className="card-img-top" src={item.url} alt={index + 1}/>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Cat {index + 1}
                                    </h5>
                                    <p className="card-text">
                                        Cat {index + 1} has an id of {item.id} and image size
                                        of {item.width} x {item.height} !
                                    </p>
                                </div>
                                {/*<div className="card-footer text-right">*/}
                                {/*    <button className="btn-outline-secondary" onClick={() => audio.play()}>Read More ></button>*/}
                                {/*</div>*/}
                        </div>

                    ))}
                </div>
            );
        }
    }
}

export default Cats;
