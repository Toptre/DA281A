"use strict";
/* Sankar Blagodirov am6354      */


class PollutionInfo extends React.Component {
    render() {
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
};

class City extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        showDetail: false,
        showForecast: false,
        pollution: []
      }
      
      // Use createRef() to create a reference to the DOM node we want
      // Learn more about Refs for React here: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
     
    }


    toggleDetail () {
        this.setState({ pollution: [] });
        console.log(this);
        const lat = this.props.city.latitude;
        const lon = this.props.city.longitude;
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
    }

    render() {
        const city = this.props.city.name;
        const country = this.props.city.country;
        const region = this.props.city.region;
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
                                        {region &&
                                            <div>
                                                <p>State: </p>
                                                <h2>{region}</h2>
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
                                        {region &&
                                            <div>
                                                <p>State: </p>
                                                <h2>{region}</h2>
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
                                {region &&
                                    <div>
                                        <p>State: </p>
                                        <h2>{region}</h2>
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
};
class Cities extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        cities: [],
            error: null,
            noRes: false,
      }
      
      // Use createRef() to create a reference to the DOM node we want
      // Learn more about Refs for React here: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
      this.addAlbum = this.addAlbum.bind(this);
    }
    



    addAlbum(cityQuery) {
        this.setState({ cities: [], noRes: false });
        const url = `http://api.positionstack.com/v1/forward?access_key=9769134991feb137ce700d8c04bc6eb3&query=${cityQuery}`;
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                Promise.all(json.data.map(city =>
                    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${city.latitude}&lon=${city.longitude}&appid=006be366a3a21e98b4373122c886c05a`)
                        .then((pollution) => pollution.json())
                        .then((add) => (city.airq = add))))
                    .then(results => {
                        if (!json.data.length) {
                            this.setState({
                                cities: json.data,
                                noRes: true
                            })
                        } else {
                            this.setState({
                                cities: json.data,
                            })
                        }
                        console.log(json)
                    })
            }
            )
    }


    render() {
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
                    <MainMap mainMap={this.state.cities}/>
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
};

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
    handleAddNew(e) {
     

        this.props.addNew(this.state.cityQuery)
    }
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                <form >
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
                </form>
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
        const lat = this.props.city.latitude;
        const lon = this.props.city.longitude;
      // Instead of using: document.getElementById, use the ref we created earlier to access the element
      let map = new google.maps.Map(this.myMapContainer.current, {
        center: { lat: lat, lng: lon },
        scrollwheel: false,
        zoom: 10
      });
      let marker = new google.maps.Marker({
        position: { lat: lat, lng: lon },
        map: map,
      });
    }
    
    render() {
        window.initMap = this.initMap;
      return (
        <div className="container">
          <div ref={this.myMapContainer} id="map"></div>
          
        </div>
      )
    }
  }

  class MainMap extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        // no state for now..
      }
      
      // Use createRef() to create a reference to the DOM node we want
      // Learn more about Refs for React here: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
      this.myMapContainer2 = React.createRef()
    }
  
    componentDidMount() {
    

      // Instead of using: document.getElementById, use the ref we created earlier to access the element
      

      const bounds = new google.maps.LatLngBounds();
  

      this.props.mainMap.map((markers) => {
        let marker = new google.maps.Marker({
            position: { lat: markers.lat, lng: markers.lon },
            map: map,
          });
        })

       

   
        let map = new google.maps.Map(this.myMapContainer2.current,{
            center: { lat: 15 , lng: 21 },
        scrollwheel: false,
        zoom: 10
         })
      

     

     
     
      
      
    }
    

    
    render() {
        window.initMap = this.initMap;
        console.log('start' + this.props.mainMap + 'ends')
        console.log(this.props.mainMap)
        console.log('start' + this.props.mainMap + 'ends')
        const mapList = this.props.mainMap;
      return (
    <div>
        
         <div className="container">
          <div ref={this.myMapContainer2} id="map"></div>
     
        </div>
    
    </div>
    
      )
    }
  }
ReactDOM.render(
    <Cities />,

    document.getElementById("root")
);