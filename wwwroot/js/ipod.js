
document.addEventListener('DOMContentLoaded', function () {
    // Set focus on the first tab when the page loads
    document.querySelector('.nav-link:first-child').focus();
});

let lastFocusedNavItem = null;

// Add an event listener to each nav-item to track the last focused nav-item
document.querySelectorAll('.nav-link').forEach(navItem => {
    navItem.addEventListener('focus', function () {
        lastFocusedNavItem = this;
    });
});

// Add an event listener to the "Select" button
document.querySelector('.select').addEventListener('click', function () {
    // Check if there was a last focused nav-item
    if (lastFocusedNavItem) {
        document.getElementById(lastFocusedNavItem.id).click();
        // Add your logic here to handle the selection
    } else {
        console.log('No active list item to select.');
    }
});
let startPartition;
let currentPartition;

document.querySelectorAll(".partition").forEach(partition => {
    partition.addEventListener("mouseover", function () {
        setCurrentPartition(this);

        if (currentPartition && currentPartition !== startPartition) {
            const direction = getDirection(startPartition, currentPartition);
            console.log(direction);
            setStartPartition(currentPartition);
        }
    });
});

document.getElementById("scroll-container").addEventListener("mousemove", function (e) {
    setCurrentPartition(e.target);
});

function setCurrentPartition(partition) {
    if (partition !== undefined && partition.classList.contains("partition")) {
        currentPartition = partition; // Extract the class name (e.g., 'top', 'right', 'bottom', 'left')
    }
}

function setStartPartition(partition) {
    startPartition = partition; // Extract the class name (e.g., 'top', 'right', 'bottom', 'left')
}

function getDirection(startPartition, endPartition) {
    if (!startPartition || !endPartition) {
        return "unknown";
    }

    const partitions = ['top', 'right', 'bottom', 'left'];
    const startIndex = partitions.indexOf(startPartition.className.split(" ")[1]);
    const endIndex = partitions.indexOf(endPartition.className.split(" ")[1]);

    const clockwise = (endIndex - startIndex + 4) % 4 === 1;

    const navLinks = document.querySelectorAll('.nav-link');
    const currentIndex = Array.from(navLinks).indexOf(document.activeElement);

    if (clockwise) {
        const nextIndex = (currentIndex + 1) % navLinks.length;
        navLinks[nextIndex].focus();
        return "clockwise";
    } else {
        const prevIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        navLinks[prevIndex].focus();
        return "anticlockwise";
    }
}

document.querySelectorAll('.nav-item').forEach(navItem => {
    navItem.addEventListener('mouseenter', function () {
        // Clear focus from the last focused nav-item
        if (lastFocusedNavItem) {
            lastFocusedNavItem.blur();
        }

        // Set focus on the current nav-item
        this.focus();
        lastFocusedNavItem = this;
    });
});