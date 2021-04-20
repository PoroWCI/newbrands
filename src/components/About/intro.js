import Image from '../../assets/img/About/french-green-tech.svg'
import classes from './intro.module.css'

function IntroAbout() {
    return (
        <div className={classes.container}>
            <div className={classes.imgOnRight}>
                <div className={classes.textDiv}>
                    <h1>Fondé en 2017</h1>
                    <p>We’re young startup made of individuals dedicated to things we love. One of those thingd is web platform and technologies that surrounds it. We posses different set of skills, like frontend and backend development, web and UI design project management, know alot about web servers and security incubade at Station F </p>
                </div>
                <img src={Image} alt="French tech - Green tech" />
            </div>
        </div>
    )
}

export default IntroAbout;