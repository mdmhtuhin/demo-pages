// Function to create a new chat window
function createChatWindow(roomName) {
  const chatWindowsContainer = document.getElementById('chat-windows-container');

  // Check if a chat window for this room already exists
  const existingWindow = document.getElementById(`chat-window-${roomName}`);
  if (existingWindow) {
    existingWindow.classList.remove('minimized'); // Restore if minimized
    updateChatWindowsLayout(); // Update layout
    return;
  }

  // Create the chat window
  const chatWindow = document.createElement('div');
  chatWindow.id = `chat-window-${roomName}`;
  chatWindow.classList.add('chat-window');

  // Chat Header
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  chatHeader.innerHTML = `
    <span>${roomName}</span>
    <div class="actions">
      <i class="fa-solid fa-window-minimize minimize-button"></i>
      <i class="fa-solid fa-times close-button"></i>
    </div>
  `;
  chatWindow.appendChild(chatHeader);

  // Chat Body
  const chatBody = document.createElement('div');
  chatBody.classList.add('chat-body');
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatBody.innerHTML = `<p>Welcome to the ${roomName} chat!</p>`;
  chatWindow.appendChild(chatBody);

  // Chat Footer
  const chatFooter = document.createElement('div');
  chatFooter.classList.add('chat-footer');
  chatFooter.innerHTML = `<input type="text" placeholder="Type a message...">`;
  chatWindow.appendChild(chatFooter);

  // Add the chat window to the container
  chatWindowsContainer.appendChild(chatWindow);

  // Add event listeners for minimize and close buttons
  const minimizeButton = chatHeader.querySelector('.minimize-button');
  const closeButton = chatHeader.querySelector('.close-button');

  minimizeButton.addEventListener('click', () => {
    chatWindow.classList.toggle('minimized');
    updateChatWindowsLayout(); // Update layout when minimized/restored
  });

  closeButton.addEventListener('click', () => {
    chatWindowsContainer.removeChild(chatWindow);
    updateChatWindowsLayout(); // Update layout when closed
  });

  // Make the chat window draggable
  makeDraggable(chatWindow, chatHeader);

  // Update layout after adding a new chat window
  updateChatWindowsLayout();
}

// Function to update the layout of chat windows
function updateChatWindowsLayout() {
  const chatWindowsContainer = document.getElementById('chat-windows-container');
  const chatWindows = chatWindowsContainer.querySelectorAll('.chat-window');

  // Separate minimized and open chat windows
  const minimizedWindows = [];
  const openWindows = [];

  chatWindows.forEach((window) => {
    if (window.classList.contains('minimized')) {
      minimizedWindows.push(window);
    } else {
      openWindows.push(window);
    }
  });

  // Clear the container
  chatWindowsContainer.innerHTML = '';

  // Add open chat windows first (side by side)
  openWindows.forEach((window) => {
    chatWindowsContainer.appendChild(window);
  });

  // Add minimized chat windows in a vertical stack
  if (minimizedWindows.length > 0) {
    const minimizedStack = document.createElement('div');
    minimizedStack.classList.add('minimized-stack');

    minimizedWindows.forEach((window) => {
      minimizedStack.appendChild(window);
    });

    chatWindowsContainer.appendChild(minimizedStack);
  }
}

// Function to make a chat window draggable
function makeDraggable(chatWindow, chatHeader) {
  let isDragging = false;
  let offsetX, offsetY;

  chatHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - chatWindow.getBoundingClientRect().left;
    offsetY = e.clientY - chatWindow.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const maxTop = navbarHeight; // Prevent chat window from overlapping the navbar
      const maxBottom = window.innerHeight;

      let newTop = e.clientY - offsetY;
      let newLeft = e.clientX - offsetX;

      // Ensure the chat window stays within the visible area
      newTop = Math.max(maxTop, Math.min(newTop, maxBottom - chatWindow.offsetHeight));
      newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - chatWindow.offsetWidth));

      chatWindow.style.top = `${newTop}px`;
      chatWindow.style.left = `${newLeft}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// Function to refresh the room list
async function refreshList(category, listId) {
  try {
    const loader = document.getElementById('loader');
    loader.style.display = 'block'; // Show the loader

    const response = await fetch(`/refresh_rooms?category=${category}`);
    const data = await response.json();
    console.log('Server Response:', data); // Debugging

    const list = document.getElementById(listId);
    list.innerHTML = ''; // Clear the existing list

    if (data.rooms && Array.isArray(data.rooms)) {
      data.rooms.forEach((room) => {
        if (room.table && room.table.name && room.table.capacity) {
          const userCount = Array.isArray(room.table.users) ? room.table.users.length : 0;
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <a href="#" data-room-name="${room.table.name}">
              <span>${room.table.name}</span>
              <span>${userCount}/${room.table.capacity}</span>
            </a>
          `;
          list.appendChild(listItem);
        } else {
          console.error('Invalid room data:', room);
        }
      });
    } else {
      console.error('Invalid or missing rooms data:', data);
    }

    // Reattach event listeners to the new room list items
    attachRoomListListeners();
  } catch (error) {
    console.error('Error refreshing room list:', error);
    alert('Failed to refresh room list.');
  } finally {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide the loader
  }
}

// Function to attach event listeners to room list items
function attachRoomListListeners() {
  const roomItems = document.querySelectorAll('.list li a');
  console.log(`Found ${roomItems.length} room items.`); // Debugging

  roomItems.forEach((roomItem) => {
    roomItem.addEventListener('click', (e) => {
      e.preventDefault();
      const roomName = roomItem.querySelector('span').textContent;
      console.log(`Clicked on room: ${roomName}`); // Debugging

      // Call the API to join the room
      createChatWindow(roomName);
    });
  });
}

// Initial attachment of event listeners
attachRoomListListeners();