// Click on the subscribe button
    // Use an event listener
    // Route: POST via api/team/:id
// Get alert "You are now subscribed!"
// NOTE: this is from the TEAM PAGE--> do NOT need to be sent to another page????
// How to send email when button is clicked via nodemailer????

//const teamName = document.querySelector('#teamName').value; 
//add body with stringified data for team name to associate team 
// with subscription
const subscription = async () => {
    const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
          alert("You are now subscribed!");
    } else {
          alert(response.statusText);
    }
};

document.querySelector('#subscription').addEventListener('click', subscription);

