class LobbyView {
  updatePlayersList(users, currentUser) {
    const playersListTable = document.getElementById('players-list');

    // Clear the table, keep the header
    const playersListRowCount = playersListTable.rows.length;

    for (let i = playersListRowCount; i > 1; i--) {
      playersListTable.deleteRow(i - 1);
    }

    users.forEach((user, index) => {
      const newRow = playersListTable.insertRow(index + 1);
      const userNameCell = newRow.insertCell(0);
      const idCell = newRow.insertCell(1);

      userNameCell.appendChild(document.createTextNode(user.username));

      if (user.username === currentUser) {
        newRow.classList.add('success');
      }

      idCell.appendChild(document.createTextNode(user.id));
    });
  }

  updateRoomsList(rooms, currentRoom) {
    const roomsListTable = document.getElementById('rooms-list');

    // Clear the table, keep the header
    const roomsListRowCount = roomsListTable.rows.length;

    for (let i = roomsListRowCount; i > 1; i--) {
      roomsListTable.deleteRow(i - 1);
    }

    rooms.forEach((room, index) => {
      const newRow = roomsListTable.insertRow(index + 1);
      const roomNameCell = newRow.insertCell(0);
      const numberOfPlayersCell = newRow.insertCell(1);

      roomNameCell.appendChild(document.createTextNode(room.name));
      numberOfPlayersCell.appendChild(
        document.createTextNode(room.users.length));

      if (room.name === currentRoom) {
        newRow.classList.add('success');
      }
    });
  }

  updateLatency(latency) {
    document.getElementById('latency').innerHTML = latency;
  }
}

export default new LobbyView();
