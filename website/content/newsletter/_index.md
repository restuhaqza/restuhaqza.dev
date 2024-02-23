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
  color: #fff;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<div>
<form>
  <div class="form-group">
    <label for="name">First Name</label>
    <input type="text" class="form-control" id="firstName" placeholder="Enter your first name" required/>
  </div>
  <div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" required/>
  </div>

  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
  </div>
  <button id="submitBtn" type="submit">Subscribe</button>
</form>
</div>

<script>
    document.getElementById('submitBtn').addEventListener("click", function(e ){
        e.preventDefault()
        const url = 'https://api-6vankd4g6a-uc.a.run.app/newsletter/subscribe'

        const firstName = document.getElementById("firstName").value
        const lastName = document.getElementById("lastName").value
        const email = document.getElementById("email").value

        const dataToSend = {
            firstName,
            lastName,
            email
        }

        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
        })
        .then(response => {
        // Handle response
            return new Promise(async res => {
                await res(response.json())
            })
        }).then(data => {
            if(data.status == 400) {
                window.alert(data.message)
            } else {
                window.alert(data.data.email + ' subscribed to newsletter')
                window.location.href = '/'     
            }
        })
        .catch(error => {
        // Handle error
            console.log(error)
            window.alert(error.body.message)
        });
    })
    
</script>
