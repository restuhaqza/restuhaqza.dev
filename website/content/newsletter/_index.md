---
title: Subscribe Newsletter
---

<style>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<div>
<form>
  <div class="form-group">
    <label for="name">First Name</label>
    <input type="text" class="form-control" id="firstName" placeholder="Enter your first name">
  </div>
  <div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" class="form-control" id="lastName" placeholder="Enter your last name"/>
  </div>

  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter your email">
  </div>
  <button id="submitBtn" type="submit" class="btn btn-primary" onClick="subscribeNewsletter(this)">Subscribe</button>
</form>
</div>

<script>
    document.getElementById('submitBtn').addEventListener("click", function(e ){
        console.log(e)
        e.preventDefault()
        const url = 'https://api-6vankd4g6a-uc.a.run.app/api/newsletter/subscribe'
        const firstName = document.getElementById("firstName").value
        const lastName = document.getElementById("lastName").value
        const email = document.getElementById("email").value

        const dataToSend = {
            firstName,
            lastName,
            email
        }

        console.log(dataToSend)

        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
        })
        .then(response => {
        // Handle response
            console.log(response)
        })
        .catch(error => {
        // Handle error
            console.log(error)
        });
    })
    
</script>




