"use strict";
/* Sankar Blagodirov am6354      */

var PollutionInfo = React.createClass({
    render: function () {
        return (
            <div className="card-header-row">
                <div>
                    <p>CO: </p>
                    <h5>{this.props.pI.components.co}</h5>
                </div>
                <div>
                    <p>NO: </p>
                    <h5>{this.props.pI.components.no}</h5>
                </div>
                <div>
                    <p>NO<sub>2</sub>: </p>
                    <h5>{this.props.pI.components.no2}</h5>
                </div>
                <div>
                    <p>O<sub>3</sub>: </p>
                    <h5>{this.props.pI.components.o3}</h5>
                </div>
                <div>
                    <p>SO<sub>2</sub>: </p>
                    <h5>{this.props.pI.components.so2}</h5>
                </div>
                <div>
                    <p>PM2.5: </p>
                    <h5>{this.props.pI.components.pm2_5}</h5>
                </div>
                <div>
                    <p>PM10: </p>
                    <h5>{this.props.pI.components.pm10}</h5>
                </div>
                <div>
                    <p>NH<sub>3</sub>: </p>
                    <h5>{this.props.pI.components.nh3}</h5>
                </div>
            </div>
        )
    }
});

var City = React.createClass({
    getInitialState: function () {
        return {
            showDetail: false,
            showForecast: false,
            pollution: []
        };
    },
    toggleDetail: function () {
        this.setState({ pollution: [] });
        console.log(this);
        const lat = this.props.city.lat;
        const lon = this.props.city.lon;
        const url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=006be366a3a21e98b4373122c886c05a`;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    pollution: json.list,
                })
                console.log(json)
            }
            );
        console.log("aa");
        {
            this.setState({
                showForecast: true
            })
        }
    },

    render: function () {
        const city = this.props.city.name;
        const country = this.props.city.country;
        const state = this.props.city.state;
        const aqi = this.props.city.airq.list[0].main.aqi
        console.log(this.props.city);
        console.log(this.state.pollution);
        const date = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(this.props.city.airq.list[0].dt * 1000);

        return (
            <div>
                {this.state.showDetail ?
                    <div>
                        {this.state.showForecast ?
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-row">
                                        <div>
                                            <p>City: </p>
                                            <h2>{city}</h2>
                                        </div>
                                        {state &&
                                            <div>
                                                <p>State: </p>
                                                <h2>{state}</h2>
                                            </div>
                                        }
                                        <div>
                                            <p>Country:</p>
                                            <h2>{country}</h2>
                                        </div>
                                        <div>
                                            <p>AQI:</p>
                                            <h2>{aqi}</h2>
                                        </div>
                                        <button className="btn" onClick={() => this.setState({ showDetail: false })} type="button"><div className="fa fa-angle-double-up"></div></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>{date}</p>
                                    <PollutionInfo pI={this.props.city.airq.list[0]} />
                                    <button className="btn btn-primary" onClick={() => this.setState({ showForecast: false })} type="button">Hide forecast</button>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {this.state.pollution.map(ptd =>
                                        <li className="list-group-item">
                                            <div className="card-header-row">
                                                <h5>AQI: {ptd.main.aqi}</h5>
                                                <p>{new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(ptd.dt * 1000)}</p>
                                            </div>
                                            <PollutionInfo pI={ptd} />
                                        </li>
                                    )}
                                </ul>
                            </div>
                            :
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-row">
                                        <div>
                                            <p>City: </p>
                                            <h2>{city}</h2>
                                        </div>
                                        {state &&
                                            <div>
                                                <p>State: </p>
                                                <h2>{state}</h2>
                                            </div>
                                        }
                                        <div>
                                            <p>Country:</p>
                                            <h2>{country}</h2>
                                        </div>
                                        <div>
                                            <p>AQI:</p>
                                            <h2>{aqi}</h2>
                                        </div>
                                        <button className="btn" onClick={() => this.setState({ showDetail: false })} type="button"><div className="fa fa-angle-double-up"></div></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <PollutionInfo pI={this.props.city.airq.list[0]} />
                                    <p>{date}</p>
                                    <button className="btn btn-primary" onClick={this.toggleDetail} type="button">forecast</button>
                                </div>
                            </div>
                        }
                    </div>
                    :
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-row">
                                <div>
                                    <p>City: </p>
                                    <h2>{city}</h2>
                                </div>
                                {state &&
                                    <div>
                                        <p>State: </p>
                                        <h2>{state}</h2>
                                    </div>
                                }
                                <div>
                                    <p>Country:</p>
                                    <h2>{country}</h2>
                                </div>
                                <div>
                                    <p>AQI:</p>
                                    <h2>{aqi}</h2>
                                </div>
                                <button className="btn" onClick={() => this.setState({ showDetail: true })} type="button"><div className="fa fa-angle-double-down"></div></button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
});

var Cities = React.createClass({
    getInitialState: function () {
        return {
            cities: [],
            error: null,
            noRes: false,
        };
        this.addAlbum = this.addAlbum.bind(this);
    },



    addAlbum: function (cityQuery) {
        this.setState({ cities: [], noRes: false });
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityQuery}&limit=5&appid=006be366a3a21e98b4373122c886c05a`;
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                Promise.all(json.map(city =>
                    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&appid=006be366a3a21e98b4373122c886c05a`)
                        .then((pollution) => pollution.json())
                        .then((add) => (city.airq = add))))
                    .then(results => {
                        if (!json.length) {
                            this.setState({
                                cities: json,
                                noRes: true
                            })
                        } else {
                            this.setState({
                                cities: json,
                            })
                        }
                        console.log(json)
                    })
            }
            )
    },


    render: function () {
        const { noRes } = this.state;
        if (noRes) {
            return (
                <div>
                    <AddFriend addNew={this.addAlbum} />
                    <p>Location not found, try again!</p>
                </div>
            )
        } else {
            return (
                <div>
                    <AddFriend addNew={this.addAlbum} />
                    <div className="card-deck">
                        {this.state.cities.map(function (city, index) {
                            return (
                                <div>
                                <City
                                    city={city}

                                />
                                <Map city={city} />
                                </div>
                            )
                        }, this)}
                    </div>
                </div>
            )
        }
    }
});

class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.addNew,
            cityQuery: ''
        }
        this.updatecityQuery = this.updatecityQuery.bind(this)
        this.handleKeypress = this.handleKeypress.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }
    updatecityQuery(e) {
        this.setState({
            cityQuery: e.target.value
        })
    }
    handleKeypress(e) {
        if (e.keyCode === 13) {
            this.handleAddNew();
        }
    }
    handleAddNew() {
        this.props.addNew(this.state.cityQuery)
    }
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={this.state.cityQuery}
                        onChange={this.updatecityQuery}
                        onKeyPress={this.handleKeypress}
                        className="form-control"
                        placeholder="Enter a city..."
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={this.handleAddNew}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

class Map extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        // no state for now..
      }
      
      // Use createRef() to create a reference to the DOM node we want
      // Learn more about Refs for React here: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
      this.myMapContainer = React.createRef()
    }
  
    componentDidMount() {
        const lat = this.props.city.lat;
        const lon = this.props.city.lon;
        console.log(lat);
        console.log(lon);
        
        
      // Instead of using: document.getElementById, use the ref we created earlier to access the element
      let map = new google.maps.Map(this.myMapContainer.current, {
        center: { lat: lat, lng: lon },
        scrollwheel: false,
        zoom: 4
      });
    }
    
    render() {
      return (
        <div className="container">
          <div ref={this.myMapContainer} id="map"></div>
          <div id="text">
            <p>Google Maps now requires the use of a valid API Key.</p>
            <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">Go get one!
            </a>
          </div>
        </div>
      )
    }
  }

ReactDOM.render(
    <Cities />,

    document.getElementById("root")
);