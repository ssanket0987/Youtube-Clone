// Menu Button
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var content = document.querySelector(".content");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    content.classList.toggle("large-content");
    
}

//Notification icon
document.addEventListener("DOMContentLoaded", function() {
    var notificationIcon = document.getElementById("notificationIcon");

    notificationIcon.addEventListener("click", function() {
        alert("There are no notifications available.");
    });
});


//file upload
    document.addEventListener("DOMContentLoaded", function() {
        var uploadIcon = document.getElementById('uploadIcon');
        var fileInput = document.getElementById('fileInput');

        uploadIcon.addEventListener('click', function() {
            fileInput.click();
        });

        fileInput.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                
                console.log(this.files[0].name);
            }
        });
    });


//drwaer for profile pic
    function toggleDrawer() {
        var drawer = document.getElementById("userDropdown");
        drawer.classList.toggle("show");
    }

// Searchbar
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const vidList = document.querySelectorAll(".vid-list");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        vidList.forEach(function(video) {
            const title = video.querySelector(".vid-info h5").textContent.toLowerCase();
            const uploader = video.querySelector(".vid-info p:nth-child(2)").textContent.toLowerCase();
            const thumbnail = video.querySelector(".thumbnail");

            if (title.includes(searchTerm) || uploader.includes(searchTerm)) {
                video.style.display = "block"; 
                thumbnail.style.filter = "none"; 
            } else {
                video.style.display = "none"; 
                thumbnail.style.filter = "grayscale(100%)"; 
            }
        });
    });
});



//explore page
document.addEventListener("DOMContentLoaded", function() {
    var exploreLink = document.querySelector('.sidebar a[href="explore.html"]');
    
    exploreLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'explore.html';
    });
});
//video playable

function playVideo() {
    var videoElement = document.getElementById("video-player");
    
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { 
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { 
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { 
        videoElement.msRequestFullscreen();
    }
}



//ONCLICK VIDEO PLAYING


function playVideo(videoUrl) {
    const newWindow = window.open(videoUrl, '_blank');
    newWindow.onload = function() {
        const closeButton = document.createElement('div');
        closeButton.textContent = '✕'; 
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px'; 
        closeButton.style.right = '5px'; 
        closeButton.style.fontSize = '20px'; 
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = 'white'; 
        closeButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
        closeButton.style.borderRadius = '50%';
        closeButton.style.width = '30px';
        closeButton.style.height = '30px';
        closeButton.style.display = 'flex';
        closeButton.style.justifyContent = 'center';
        closeButton.style.alignItems = 'center';
        closeButton.style.zIndex = '9999';
        closeButton.addEventListener('click', function() {
            newWindow.close();
        });
        newWindow.document.body.appendChild(closeButton);
    };
}






