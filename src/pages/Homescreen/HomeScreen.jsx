import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Row from '../../components/Rows/Row'
import requests from '../../request'
import './homeScreen.css'

const HomeScreen = () => {
  return (
    <div>
       {/* Nav */}
        <Nav />
       {/* Banner */}
        <Banner />

       {/* cards */}
       <Row 
       title="NETFLIX ORIGINALS" 
       fetchUrl={'https://api.themoviedb.org/3'+requests.fetchNetflixOriginals}
       isLargeRow
       />
       <Row title="Trending Now" fetchUrl={'https://api.themoviedb.org/3'+requests.fetchTopRated}/>
       <Row title="Top Rated" fetchUrl={'https://api.themoviedb.org/3'+requests.fetchActionMovies}/>
       <Row title="Action Movies" fetchUrl={'https://api.themoviedb.org/3'+requests.fetchComedyMovies}/>
       <Row title="Comedy Movies" fetchUrl={'https://api.themoviedb.org/3'+requests.fetchHorrorMovies}/>
       <Row title="Horror Movies" fetchUrl={'https://api.themoviedb.org/3'+requests.fetchRomanceMovies}/>
       <Row title="Romance Movies" fetchUrl={'https://api.themoviedb.org/3'+requests.fetchActionMovies}/>
       <Row title="Documentations" fetchUrl={'https://api.themoviedb.org/3'+requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen