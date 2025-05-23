const movies = [
  {
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    director: "Anthony Russo, Joe Russo",
    rating: 8.4
  },
  {
    title: "Joker",
    genre: "Drama",
    year: 2019,
    director: "Todd Phillips",
    rating: 8.5
  },
  {
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    director: "Bong Joon Ho",
    rating: 8.6
  }
];

function displayMovies() {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  movies.forEach((movie, index) => {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = `
      <strong>${movie.title}</strong><br>
      Genre: ${movie.genre}<br>
      Tahun: ${movie.year}<br>
      Sutradara: ${movie.director}<br>
      Rating: ${movie.rating}<br>
      <button onclick="editMovie(${index})">Edit</button>
      <button onclick="deleteMovie(${index})">Delete</button>
    `;
    movieList.appendChild(movieItem);
  });
}

function addMovie(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const year = parseInt(document.getElementById("year").value);
  const director = document.getElementById("director").value;
  const rating = parseFloat(document.getElementById("rating").value);

  const movie = { title, genre, year, director, rating };
  movies.push(movie);
  displayMovies();
  document.getElementById("movie-form").reset();
}

function editMovie(index) {
  const movie = movies[index];
  document.getElementById("title").value = movie.title;
  document.getElementById("genre").value = movie.genre;
  document.getElementById("year").value = movie.year;
  document.getElementById("director").value = movie.director;
  document.getElementById("rating").value = movie.rating;

  movies.splice(index, 1);
  displayMovies();
}

function deleteMovie(index) {
  movies.splice(index, 1);
  displayMovies();
}

function filterMovies() {
  const genreInput = document.getElementById("filter-genre").value.toLowerCase();
  const yearInput = document.getElementById("filter-year").value;

  const filtered = movies.filter(movie => {
    const matchGenre = genreInput === "" || movie.genre.toLowerCase().includes(genreInput);
    const matchYear = yearInput === "" || movie.year == yearInput;
    return matchGenre && matchYear;
  });

  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  filtered.forEach((movie, index) => {
    const movieItem = document.createElement("li");
    movieItem.innerHTML = `
      <strong>${movie.title}</strong><br>
      Genre: ${movie.genre}<br>
      Tahun: ${movie.year}<br>
      Sutradara: ${movie.director}<br>
      Rating: ${movie.rating}<br>
      <button onclick="editMovie(${index})">Edit</button>
      <button onclick="deleteMovie(${index})">Delete</button>
    `;
    movieList.appendChild(movieItem);
  });
}

document.getElementById("movie-form").addEventListener("submit", addMovie);
window.onload = displayMovies;
