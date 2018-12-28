exports.notFound = (req, res, next) => {
    res.status(404).render('not-found', {
        pageTitle: 'not found',
        path: '',
        isAuthenticated: req.session.isLoggedIn
    })
}