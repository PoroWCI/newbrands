import classes from './progressBar.css'

function ProgressBar() {
    return (
        <div className={classes.container}>
            <div className={classes.background}></div>
            <div className={`${classes.step} ${classes.validatedStep}`}></div>
            <div className={`${classes.step}`}></div>
            <div className={`${classes.step}`}></div>
        </div>
    )
}

export default ProgressBar;