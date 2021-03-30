import classes from './slider.module.css'
import Slider1 from '../../assets/img/About/about-slider-001.png'
import Slider2 from '../../assets/img/About/about-slider-002.png'
import Slider3 from '../../assets/img/About/about-slider-003.png'

function SliderAbout() {
    return (
        <div className={classes.sliderContainer}>
            <div className={`${classes.horizontalScrollWrapper} ${classes.squares}`}>
                <img src={Slider1} alt='' />
                <img src={Slider2} alt='' />
                <img src={Slider3} alt='' />
            </div>
        </div>
    )
}

export default SliderAbout