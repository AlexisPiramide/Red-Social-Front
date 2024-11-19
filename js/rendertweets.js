document.addEventListener("DOMContentLoaded", () => {
    renderTweets(tweets);
});

const tweets = [
    { id: 1, n_likes: 34, texto: "Learning SQL is fun! #coding", fecha: "2023-10-10T14:30:00", usuario: "alice.garcia@example.com", publicado: true },
    { id: 2, n_likes: 57, texto: "Backend development is amazing!", fecha: "2023-10-11T09:15:00", usuario: "bob.hernandez@example.com", publicado: true },
    { id: 3, n_likes: 12, texto: "Happy to join this platform!", fecha: "2023-10-12T17:45:00", usuario: "carlos.mendoza@example.com", publicado: true },
    { id: 4, n_likes: 5, texto: "Testing a draft tweet, not published yet.", fecha: "2023-10-13T08:20:00", usuario: "alice.garcia@example.com", publicado: false },
    { id: 5, n_likes: 22, texto: "Good morning, everyone! #positivity", fecha: "2023-10-14T06:00:00", usuario: "bob.hernandez@example.com", publicado: true },
    { id: 1, n_likes: 34, texto: "Learning SQL is fun! #coding", fecha: "2023-10-10T14:30:00", usuario: "alice.garcia@example.com", publicado: true },
    { id: 2, n_likes: 57, texto: "Backend development is amazing!", fecha: "2023-10-11T09:15:00", usuario: "bob.hernandez@example.com", publicado: true },
    { id: 3, n_likes: 12, texto: "Happy to join this platform!", fecha: "2023-10-12T17:45:00", usuario: "carlos.mendoza@example.com", publicado: true },
    { id: 4, n_likes: 5, texto: "Testing a draft tweet, not published yet.", fecha: "2023-10-13T08:20:00", usuario: "alice.garcia@example.com", publicado: false },
    { id: 5, n_likes: 22, texto: "Good morning, everyone! #positivity", fecha: "2023-10-14T06:00:00", usuario: "bob.hernandez@example.com", publicado: true },
    { id: 3, n_likes: 12, texto: "Happy to join this platform!", fecha: "2023-10-12T17:45:00", usuario: "carlos.mendoza@example.com", publicado: true },
    { id: 4, n_likes: 5, texto: "Testing a draft tweet, not published yet.", fecha: "2023-10-13T08:20:00", usuario: "alice.garcia@example.com", publicado: false },
    { id: 5, n_likes: 22, texto: "Good morning, everyone! #positivity", fecha: "2023-10-14T06:00:00", usuario: "bob.hernandez@example.com", publicado: true },
    { id: 1, n_likes: 34, texto: "Learning SQL is fun! #coding", fecha: "2023-10-10T14:30:00", usuario: "alice.garcia@example.com", publicado: true },
    { id: 2, n_likes: 57, texto: "Backend development is amazing!", fecha: "2023-10-11T09:15:00", usuario: "bob.hernandez@example.com", publicado: true },
    { id: 3, n_likes: 12, texto: "Happy to join this platform!", fecha: "2023-10-12T17:45:00", usuario: "carlos.mendoza@example.com", publicado: true },
    { id: 4, n_likes: 5, texto: "Testing a draft tweet, not published yet.", fecha: "2023-10-13T08:20:00", usuario: "alice.garcia@example.com", publicado: false },
    { id: 5, n_likes: 22, texto: "Good morning, everyone! #positivity", fecha: "2023-10-14T06:00:00", usuario: "bob.hernandez@example.com", publicado: true },
];

const renderTweets = (tweets) => {
    const tweetsContainer = document.getElementsByClassName("tweets")[0];
    tweetsContainer.innerHTML = ""; 
    tweets
        .filter(tweet => tweet.publicado) 
        .forEach(tweet => imprimeTweet(tweet, tweetsContainer));
};

function imprimeTweet(tweet, container) {
    const tweetDiv = document.createElement("div");
    tweetDiv.id = tweet.id;
    tweetDiv.classList.add("tweet");

    // Header
    const tweetHeader = document.createElement("div");
    tweetHeader.classList.add("tweet-header");

    const profilePic = document.createElement("img");
    profilePic.classList.add("profile-pic");
    profilePic.src = "https://placehold.co/600x400/EEE/31343C";
    profilePic.alt = tweet.usuario || "Usuario no encontrado";

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    const username = document.createElement("p");
    username.classList.add("username");
    username.textContent = tweet.usuario;

    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = new Date(tweet.fecha).toLocaleString();

    userInfo.append(username, date);
    tweetHeader.append(profilePic, userInfo);

    // Body
    const tweetBody = document.createElement("div");
    tweetBody.classList.add("tweet-body");

    const tweetText = document.createElement("p");
    tweetText.classList.add("tweet-text");
    tweetText.textContent = tweet.texto;

    tweetBody.append(tweetText);

    // Footer
    const tweetFooter = document.createElement("div");
    tweetFooter.classList.add("tweet-footer");

    const likeButton = document.createElement("button");
    likeButton.classList.add("likes");
    likeButton.textContent = `♡ ${tweet.n_likes}`;

    likeButton.addEventListener("click", (e) => toggleLikes(e.target, tweet));

    tweetFooter.append(likeButton);

    tweetDiv.append(tweetHeader, tweetBody, tweetFooter);
    container.append(tweetDiv);
}

function toggleLikes(button, tweet) {
    let likes = parseInt(button.textContent.match(/\d+/)[0]);

    if (button.classList.contains("liked")) {
        likes -= 1;
        button.textContent = `♡ ${likes}`;
        button.classList.remove("liked");
    } else {
        likes += 1;
        button.textContent = `❤️ ${likes}`;
        button.classList.add("liked");
    }

    tweet.n_likes = likes;
}
