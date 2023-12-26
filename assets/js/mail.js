const form = document.querySelector('form');
const fullName = document.getElementById('name');
const mail = document.getElementById('mail');
const sub = document.getElementById('subject');
const text = document.getElementById('textarea');

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${mail.value}<br> Subject: ${text.value}`;

    Email.send({
        SecureToken: "542fd265-2fa3-4e68-a961-0786e2e0cb5e",
        Username : "murshidmuhammed433@gmail.com",
        Password : "266C4E874C1CD17E6635390F3F522114F76D",
        To : 'murshidmuhammed433@gmail.com',
        From : "murshidmuhammed433@gmail.com",
        Subject : sub.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Succcess!",
                text: "Message send successfully!",
                icon: "success"
              });
        }
      }
    );

}

function checkinputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxTmail = document.querySelector(".error-text.email");

    if (!mail.value.match(emailRegex)) {
        mail.classList.add("error");
        mail.parentElement.classList.add("error");

        if (mail.value != "") {
            errorTxTmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxTmail.innerText = "Email can't be blank";
        }
    }
    else {
        mail.classList.remove("error");
        mail.parentElement.classList.remove("error");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();

    if (!fullName.classList.contains("error") && !mail.classList.contains("error") && !sub.classList.contains("error") && !text.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }


});
