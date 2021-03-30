import classes from './error.module.css'

function ErrorPage () {
    return (
        <div className={classes.container}>
            <h1>#Erreur404</h1>
            <p>Oops, this page can't be found !</p>
            <span>This link might be corrupted, or the page have been removed.</span>
        </div>
    )
}

export default ErrorPage;