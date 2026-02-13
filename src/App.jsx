import { useState } from "react";
import "./index.css";

export default function App() {
  const [selectedMood, setSelectedMood] = useState("Happy");
  const [popupMovie, setPopupMovie] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [showFav, setShowFav] = useState(false);

  const moods = [
    "Happy",
    "Sad",
    "Angry",
    "Relax",
    "Love",
    "Fun",
    "Feel Good",
    "Children",
    "Comedy",
  ];

  const movieDB = {
    Happy: [
      { title: "Home Alone", desc: "A cheerful holiday adventure.", img: "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg", lang: "English" },
      { title: "The Mask", desc: "A hilarious comedy.", img: "https://image.tmdb.org/t/p/w500/okdFv1Vh8zO3fNhxYOPJH6N8WJg.jpg", lang: "English" },
      { title: "Paddington", desc: "Feel-good family movie.", img: "https://image.tmdb.org/t/p/w500/yP2q3l5x0bqC5W0k8C2D5b5OQJX.jpg", lang: "English" },
      { title: "Toy Story", desc: "Animated adventure.", img: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", lang: "English" },
    ],
    Sad: [
      { title: "Titanic", desc: "A tragic love story.", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", lang: "English" },
      { title: "Pursuit of Happyness", desc: "Story of struggle.", img: "https://image.tmdb.org/t/p/w500/4Ej2K2gGvWmXb9Kf8n7I6Kx2yA4.jpg", lang: "English" },
      { title: "Life is Beautiful", desc: "Emotional father-son story.", img: "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg", lang: "Italian" },
      { title: "Fault in Our Stars", desc: "Emotional love journey.", img: "https://image.tmdb.org/t/p/w500/clmv0xZilW0Z1zA8Gf7s0dZs0LB.jpg", lang: "English" },
    ],
    Angry: [
      { title: "Dark Knight", desc: "Batman vs Joker.", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", lang: "English" },
      { title: "Gladiator", desc: "Warrior revenge story.", img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", lang: "English" },
      { title: "John Wick", desc: "Assassin revenge.", img: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E4iX.jpg", lang: "English" },
      { title: "Mad Max", desc: "Furious action.", img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", lang: "English" },
    ],
    Relax: [
      { title: "Interstellar", desc: "Space and emotions.", img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", lang: "English" },
      { title: "Forrest Gump", desc: "Peaceful life journey.", img: "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg", lang: "English" },
      { title: "Soul", desc: "Calm animated movie.", img: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg", lang: "English" },
      { title: "Walter Mitty", desc: "Dreamy adventure.", img: "https://image.tmdb.org/t/p/w500/tY6xVt2cUq9fYzZ6r7sW6lK5e6b.jpg", lang: "English" },
    ],
    Love: [
      { title: "La La Land", desc: "Romantic musical.", img: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", lang: "English" },
      { title: "Notebook", desc: "Emotional romance.", img: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg", lang: "English" },
      { title: "Titanic", desc: "Epic love story.", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", lang: "English" },
      { title: "Before Sunrise", desc: "Romantic journey.", img: "https://image.tmdb.org/t/p/w500/jpM0eR0t1t2s8X2v9Tq2c7yY2oG.jpg", lang: "English" },
    ],
    Fun: [
      { title: "Jumanji", desc: "Adventure comedy.", img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", lang: "English" },
      { title: "Rush Hour", desc: "Action comedy.", img: "https://image.tmdb.org/t/p/w500/5Jb8zSwv9e8oU9N2zG5J7Y5P3K7.jpg", lang: "English" },
      { title: "Minions", desc: "Fun animated movie.", img: "https://image.tmdb.org/t/p/w500/dr02bdc7TQxMTRtywAJZ6z6yI6N.jpg", lang: "English" },
      { title: "Kung Fu Panda", desc: "Funny martial arts.", img: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg", lang: "English" },
    ],
    "Feel Good": [
      { title: "Intouchables", desc: "Heartwarming friendship story.", img: "https://image.tmdb.org/t/p/w500/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg", lang: "French" },
      { title: "Forrest Gump", desc: "Inspirational life journey.", img: "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg", lang: "English" },
      { title: "Soul", desc: "Peaceful emotional film.", img: "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg", lang: "English" },
      { title: "Little Miss Sunshine", desc: "Feel-good family movie.", img: "https://image.tmdb.org/t/p/w500/5lP8R2E0VfY3cH8p6b5f7n7d7k.jpg", lang: "English" },
    ],
    Children: [
      { title: "Frozen", desc: "Disney princess story.", img: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", lang: "English" },
      { title: "Lion King", desc: "Animated classic.", img: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg", lang: "English" },
      { title: "Finding Nemo", desc: "Ocean adventure.", img: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg", lang: "English" },
      { title: "Cars", desc: "Racing animation.", img: "https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg", lang: "English" },
    ],
    Comedy: [
      { title: "Mr Bean", desc: "Classic comedy.", img: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg", lang: "English" },
      { title: "Johnny English", desc: "Spy comedy.", img: "https://image.tmdb.org/t/p/w500/k7N3qW4N8J9f4s8dZ5Z3xg3Zf8.jpg", lang: "English" },
      { title: "Hangover", desc: "Wild comedy.", img: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg", lang: "English" },
      { title: "Dumb and Dumber", desc: "Slapstick comedy.", img: "https://image.tmdb.org/t/p/w500/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg", lang: "English" },
    ],
  };

  const movies = movieDB[selectedMood] || [];

  const toggleFav = (movie) => {
    setFavourites((prev) => {
      const exists = prev.find((m) => m.title === movie.title);
      return exists
        ? prev.filter((m) => m.title !== movie.title)
        : [...prev, movie];
    });
  };

  const isFav = (movie) =>
    favourites.some((m) => m.title === movie.title);

  return (
    <div className="app">

      {/* TOP RIGHT BUTTONS */}
      <div style={{ position: "fixed", top: 20, right: 20, display: "flex", gap: 10 }}>
        <button className="topBtn favBtn" onClick={() => setShowFav(true)}>⭐ Favourites</button>
        <button className="topBtn exitBtn" onClick={() => window.location.reload()}>🚪 Exit</button>
      </div>

      <h1>CineMood AI 🎬</h1>

      {/* MOODS */}
      <div className="moodBar">
        {moods.map((m) => (
          <button
            key={m}
            className={m === selectedMood ? "mood activeMood" : "mood"}
            onClick={() => setSelectedMood(m)}
          >
            {m}
          </button>
        ))}
      </div>

      <h3>Detected Mood: {selectedMood}</h3>

      {/* MOVIES */}
      <div className="grid">
        {movies.map((m, i) => (
          <div key={i} className="card" onClick={() => setPopupMovie(m)}>
            <img src={m.img} alt={m.title} />
            <h4>{m.title}</h4>
          </div>
        ))}
      </div>

      {/* MOVIE POPUP */}
      {popupMovie && (
        <div className="popup" onClick={() => setPopupMovie(null)}>
          <div className="popupBox" onClick={(e) => e.stopPropagation()}>
            <img src={popupMovie.img} />
            <div>
              <h2>{popupMovie.title}</h2>
              <p>{popupMovie.desc}</p>
              <p>Language: {popupMovie.lang}</p>

              <button className="play">▶ Play</button>

              <button
                className={isFav(popupMovie) ? "removeBtn" : "favBtn"}
                onClick={() => toggleFav(popupMovie)}
              >
                {isFav(popupMovie) ? "❌ Remove" : "❤️ Favourite"}
              </button>

              <button onClick={() => setPopupMovie(null)}>⬅ Back</button>
            </div>
          </div>
        </div>
      )}

      {/* FAV POPUP */}
      {showFav && (
        <div className="popup" onClick={() => setShowFav(false)}>
          <div className="popupBox" onClick={(e) => e.stopPropagation()}>
            <h2>⭐ Favourite Movies</h2>

            {favourites.length === 0 ? (
              <p>No favourites yet</p>
            ) : (
              favourites.map((m, i) => (
                <div key={i} className="favItem">
                  <img src={m.img} />
                  <div>
                    <b>{m.title}</b>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))
            )}

            <button onClick={() => setShowFav(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
