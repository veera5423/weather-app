import "../pages/styles/searchPage.css"

function About() {
  return (
    <div>
      <div className="panel1, search-page" style={{color:"black", fontSize:"20px"}}>
      <h2>About the App</h2>
      <p>
        <strong>Weather App</strong> is a user-friendly, interactive platform designed to provide real-time 
        weather updates and forecasts for locations worldwide. Whether you’re planning your day, a trip, or 
        just curious about the weather, this app delivers accurate and detailed information right at your fingertips.
      </p>
      <p>
        Powered by <a href="https://www.weatherapi.com/" target="_blank" rel="noopener noreferrer">WeatherAPI</a>, 
        the app offers a seamless and visually appealing experience with features designed to make weather tracking effortless.
      </p>
      <p>
        Built with modern technologies like React and Vite, this app reflects a commitment to simplicity, speed, 
        and user satisfaction.
      </p>
      </div>

    </div>
  )
}

export default About