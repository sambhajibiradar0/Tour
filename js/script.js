let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};


  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      subject: document.querySelector('input[name="subject"]').value,
      message: document.querySelector('textarea[name="message"]').value
    };

    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert(data.success || data.error);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong.');
    });
  });

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission (page reload)

    const formData = {
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      subject: document.querySelector('input[name="subject"]').value,
      message: document.querySelector('textarea[name="message"]').value
    };

    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      const responseMessage = document.getElementById('responseMessage');
      if (data.success) {
        responseMessage.innerText = data.success;
        responseMessage.style.color = 'green';
        document.getElementById('contactForm').reset(); // Clear form
      } else {
        responseMessage.innerText = data.error;
        responseMessage.style.color = 'red';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('responseMessage').innerText = 'Something went wrong.';
      document.getElementById('responseMessage').style.color = 'red';
    });
  });



