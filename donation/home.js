/* staff section dynmically */

const items = [
    {
      profilePic: 'img/1.jpeg',
      name: 'Sriram Parthasarathy',
      jobDescr: 'Chairman at Chennai Institue of Technology',
      comment: 'Experienced Chairman with a demonstrated history of working in the higher education industry.',
    },
    {
      profilePic: 'img/2.jpeg',
      name: 'Ramesh A',
      jobDescr: 'Principal at Chennai Institute of Technology',
      comment: 'An effective principal with good leadership qualities with a history of studying in the Government College of Technology',
    },
    {
      profilePic: 'img/3.jpg',
      name: 'Anshalin Sharu',
      jobDescr: 'President of Donation Club',
      comment: 'A woman with innovative ideas,lead others kindly,and posses organization skills',
    },
    {
      profilePic: 'img/4.jpg',
      name: 'Arul Jessica',
      jobDescr: 'Treasurer of Donation Club',
      comment: 'A skilled woman being able to balance a vision for the long term success of the organization',
    },
    {
      profilePic: 'img/5.jpeg',
      name: 'Roshan Jagadish',
      jobDescr: 'Secretary of Donation Club',
      comment: 'A dedicated person with team working,communication,administrative and organization skills',
    },
    {
      profilePic: 'img/6.jpeg',
      name: 'Benjamin Samuel',
      jobDescr: 'Joint Secretary of Donation Club',
      comment: 'A person with a strong ability to organize,keep a clear head and keep track of everything from deadlines to essential files',
    },
  ];
  
  for (let i = 0; i < items.length; i += 1) {
    const data = document.createElement('div');
    data.classList.add('staff-items');
    data.innerHTML = `
    <div class="staff-item">
    <div class="staff-img">
          <img src="img/checkerboard-squares-black-white.svg" alt="back" class="back"/> 
          <img src="${items[i].profilePic}" alt="staff" class="profile"/> 
        </div>
        <div class="staff-info">
        <h2>${items[i].name}</h2>
        <i class="job">${items[i].jobDescr}</i>
        <span></span>
        <p>${items[i].comment}</p>
      </div>
  </div>
    `;
  
    document.querySelector('.staff-members').appendChild(data);
  }