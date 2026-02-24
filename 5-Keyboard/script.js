const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {

  const key = e.key === ' ' ? 'Space' : e.key;

  insert.innerHTML = `
    <div class="key-container">
      <table class="key-table">
        <thead>
          <tr>
            <th>Key</th>
            <th>Code</th>
            <th>KeyCode</th>
            <th>Shift Pressed</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>${key}</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
            <td>${e.shiftKey ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
});