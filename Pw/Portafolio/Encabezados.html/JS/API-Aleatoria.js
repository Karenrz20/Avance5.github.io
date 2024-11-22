const userTable = document.getElementById("user-table");
const generateUserBtn = document.getElementById("generate-user");

function loadStoredUsers() {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.forEach(addUserToTable);
}

function addUserToTable(user) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.job}</td>
        <td><img src="${user.image}" alt="Avatar" width="50"></td>
    `;
    userTable.appendChild(row);
}

function saveUserToStorage(user) {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));
}

function fetchRandomUser() {
    fetch("https://random-data-api.com/api/v2/users?size=1")
        .then((response) => response.json())
        .then((user) => {
            const userData = {
                name: `${user.first_name} ${user.last_name}`,
                job: user.employment.title,
                image: user.avatar,
            };

            addUserToTable(userData);
            saveUserToStorage(userData);
        })
        .catch((error) => console.error("Error al obtener datos:", error));
}

const clearTableBtn = document.getElementById("clear-table");

function clearTable() {
    userTable.innerHTML = ""; 
    localStorage.removeItem("users"); 
    alert("Tabla limpiada correctamente.");
}

clearTableBtn.addEventListener("click", clearTable);

loadStoredUsers();

generateUserBtn.addEventListener("click", fetchRandomUser);
