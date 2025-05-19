document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const modal = document.getElementById('profileModal');
    const editBtn = document.getElementById('editProfileBtn');
    const closeBtn = document.querySelector('.profile-close');
    const cancelBtn = document.querySelector('.profile-cancel-btn');
    const profileForm = document.getElementById('profileForm');
    const avatarInput = document.getElementById('avatar');
    const avatarPreview = document.getElementById('avatarPreview');
    
    // Current profile data
    const currentProfile = {
      name: document.getElementById('displayName').textContent,
      email: document.getElementById('displayEmail').textContent,
      bio: document.getElementById('displayBio').textContent,
      dob: document.getElementById('displayDob').textContent,
      status: document.getElementById('displayStatus').textContent,
      gender: document.getElementById('displayGender').textContent,
      phone: document.getElementById('displayPhone').textContent,
      avatar: document.getElementById('profileAvatar').src
    };
    
    // Open modal and load current data
    editBtn.addEventListener('click', function() {
      modal.style.display = 'block';
      document.getElementById('name').value = currentProfile.name;
      document.getElementById('email').value = currentProfile.email;
      document.getElementById('bio').value = currentProfile.bio;
      document.getElementById('dob').value = currentProfile.dob;
      document.getElementById('status').value = currentProfile.status;
      document.getElementById('gender').value = currentProfile.gender;
      document.getElementById('phone').value = currentProfile.phone;
      
      // Clear previous preview
      avatarPreview.style.display = 'none';
      avatarPreview.innerHTML = '';
    });
    
    // Close modal with X button
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Close modal with Cancel button
    cancelBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    // Handle avatar image preview
    avatarInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          avatarPreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
          avatarPreview.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
      }
    });
    
    // Form submission
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const bio = document.getElementById('bio').value;
      const dob = document.getElementById('dob').value;
      const status = document.getElementById('status').value;
      const gender = document.getElementById('gender').value;
      const phone = document.getElementById('phone').value;
      const avatarFile = avatarInput.files[0];
      
      // Update profile display
      document.getElementById('displayName').textContent = name;
      document.getElementById('displayEmail').textContent = email;
      document.getElementById('displayBio').textContent = bio;
      document.getElementById('displayDob').textContent = dob;
      document.getElementById('displayStatus').textContent = status;
      document.getElementById('displayGender').textContent = gender;
      document.getElementById('displayPhone').textContent = phone;
      
      // Update avatar if a new one was selected
      if (avatarFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('profileAvatar').src = e.target.result;
          currentProfile.avatar = e.target.result;
        }
        reader.readAsDataURL(avatarFile);
      }
      
      // Update current profile data
      currentProfile.name = name;
      currentProfile.email = email;
      currentProfile.bio = bio;
      currentProfile.dob = dob;
      currentProfile.status = status;
      currentProfile.gender = gender;
      currentProfile.phone = phone;
      
      // Close modal
      modal.style.display = 'none';
      
      // Show success message
      alert('Profile updated successfully!');
    });
  });