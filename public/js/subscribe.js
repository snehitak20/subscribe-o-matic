// Click on the subscribe button
    // Use an event listener
    // Route: POST via api/team/:id
// Get alert "You are now subscribed!"
// NOTE: this is from the TEAM PAGE--> do NOT need to be sent to another page????
// How to send email when button is clicked via nodemailer????

// For loop: iterates through the document.querySelectorAll('.subscription') array --> gets the specific id associated with team that is clicked
const subscription = async (event) => {
    const response = await fetch('/api/subscribe', {
          method: 'POST',
          body: JSON.stringify({"team_id": event.target.id}),
          headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
          alert("You are now subscribed!");
    } else {
          alert(response.statusText);
    }
};
for(var i=0; i<document.querySelectorAll('.subscription').length; i++ ){
document.querySelectorAll('.subscription')[i].addEventListener('click', subscription);
}
console.log(document.querySelectorAll('.subscription'))
