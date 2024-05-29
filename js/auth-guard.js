firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "/login_page.html"
    }
})