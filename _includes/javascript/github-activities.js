fetch('https://api.github.com/users/ggurjar333/events/public')
  .then(response => response.json())
  .then(data => {
    const activitiesContainer = document.getElementById('github-activities');
    data.forEach(event => {
      const activityElement = document.createElement('p');
      activityElement.textContent = `${event.type} in repository ${event.repo.name}`;
      activitiesContainer.appendChild(activityElement);
    });
  });