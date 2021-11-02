import './App.css';

export default function App() {
  const movies = [
    {
      title: "John Wick",
      poster: "https://www.themoviedb.org/t/p/original/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      rating: "7.4",
      summary: "John Wick is an American neo-noir action-thriller franchise created by screenwriter Derek. An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him. "
    },
    {
      title: "Avengers",
      poster: "https://www.themoviedb.org/t/p/original/5k6WG11oWrXipYD8BAkmMJU4Men.jpg",
      rating: "8.4",
      summary: "After the devastating events of Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
      title: "Justice League",
      poster: "https://www.themoviedb.org/t/p/original/yWmbO5tQNlIpIEt6nNKD72TpXtM.jpg",
      rating: "8.1",
      summary: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from catastrophic proportions."
    },
    {
      title: "Don't Breathe",
      poster: "https://www.themoviedb.org/t/p/original/kkUMGON2uFRlxI3zIMFdjqARnbb.jpg",
      rating: "7.1",
      summary: "Three delinquents break into the house of Norman, a Gulf War veteran who is blind, to steal his money. However, much to their horror, they discover that Norman is not as defenceless as he seems. "
    },
    {
      title: "Ice Age",
      poster: "https://mypostercollection.com/wp-content/uploads/2018/08/Ice-Age-Poster-2006-MyPosterCollection.com-7-683x1024.jpg",
      rating: "7.5",
      summary: "The story revolves around a group of people, a baby boy and sub-zero heroes: a woolly mammoth, a saber-toothed tiger, a sloth and a prehistoric combination of a squirrel and rat, known as Scrat."
    },
    {
      title: "Venom",
      poster: "https://www.themoviedb.org/t/p/original/gB7ThItFiRFw18SsE1gWHA92eri.jpg",
      rating: "6.7",
      summary: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. When serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must stop his reign of terror."
    },
    {
      title: "The Lion King",
      poster: "https://cultureposters.com/wp-content/uploads/2020/10/lion-king-1.jpeg",
      rating: "8.5",
      summary: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself. Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his."
    },
    {
      title: "Frozen",
      poster: "https://i.pinimg.com/originals/63/02/24/6302249542a1069a8a46850d2c4f3125.jpg",
      rating: "8.5",
      summary: "Newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a man, and a snowman to change the weather condition."
    },

  ]
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {movies.map(movie =>
            <MovieCard title={movie.title} poster={movie.poster} rating={movie.rating} summary={movie.summary} />
          )}
        </div>
      </div>
    </div>
  );
}

function MovieCard({ title, poster, rating, summary }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 block">
      <div className="card">
        <img src={poster} alt={title} />
        <h3 className="pt-3">{title}</h3>
        <h5 className="px-3">IMDB: {rating} <i class="fas fa-star"></i></h5>
        <h6 className="px-3">Summary: </h6>
        <p className="px-3">{summary}</p>
      </div>
    </div>
  )
}
