let button = document.getElementById("allUsers");

let usersBody = document.getElementById("usersBody");


button.onclick = function () {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(function (response) {

            return response.json();

        })

        .then(function (users) {

            usersBody.innerHTML = "";

            for (let i = 0; i < users.length; i++) {

                let row = `

                    <tr>

                        <td>${users[i].id}</td>

                        <td>${users[i].name}</td>

                        <td>${users[i].username}</td>

                        <td>${users[i].email}</td>

                        <td>${users[i].phone}</td>

                        <td>${users[i].website}</td>

                        <td>${users[i].address.city}</td>

                        <td>${users[i].company.name}</td>

                    </tr>

                `;

                usersBody.innerHTML += row;
            }

        })

        .catch(function (error) {

            console.log(error);

        });

};