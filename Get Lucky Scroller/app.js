import data from  "./data.js";

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;

    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item"><span class="badge badge-primary float-left">Name:</span>
           ${currentProfile.name}</li>
        <li class="list-group-item"><span class="badge badge-warning float-left">Age:</span>
          ${currentProfile.age}</li>
          <li class="list-group-item"><span class="badge badge-success float-left">Location:</span>
         ${currentProfile.location}</li>
         <li class="list-group-item"><span class="badge badge-danger float-left">Preference:</span>  
        ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;
  } else {
    // No more profiles
    document.getElementById('done').innerHTML = `
    <div class="my-4 alert alert-info alert-dismissible fade show" role="alert">
    <strong>Oh snap!</strong> No more active prifiles. \n <pre>Make sure to check later <b>;)</b></pre>
    <small class="lead text.dark">The page will reload soon</small>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
    `;

    setTimeout(() => {
      window.location.reload();      
    }, 2500);
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}