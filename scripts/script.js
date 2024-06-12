const articlesSection = document.querySelector('.articles');

// Replace with your actual API endpoint or logic for fetching articles
fetch('https://api.example.com/articles')
  .then(response => response.json())
  .then(data => {
    data.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.innerHTML = `<h3>${article.title}</h3>
                                  <p>${article.excerpt}</p>`;
      articlesSection.appendChild(articleElement);
    });
  })
  .catch(error => console.error(error));
