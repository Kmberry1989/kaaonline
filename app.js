
document.addEventListener('DOMContentLoaded', () => {
    const loadComponent = (url, placeholderId) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(placeholderId).innerHTML = data;
            });
    };

    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
    const memberScript = document.createElement('script');
    memberScript.src = 'membership.js';
    document.body.appendChild(memberScript);
});
