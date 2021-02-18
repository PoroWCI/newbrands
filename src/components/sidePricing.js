import classes from '../assets/sidepricing.module.css'

function SidePricing() {
    return (
        <div className={classes.container}>
            <h4>Proposition</h4>
            <div className={classes.grid}>
                <div className={classes.firstCol}>
                    <span>Sous-total</span>
                    <span>Remise</span>
                    <span>Total H.T</span>
                    <div className={classes.totals}>
                        <span>TVA (20%) </span>
                        <span>Total TTC</span>
                    </div>
                </div>
                <div className={classes.secondCol}>
                    <span>201.09€</span>
                    <span>30,00%</span>
                    <span>140.76€</span>
                    <div className={classes.totals}>
                        <span>28.15€</span>
                        <span>168.91€</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePricing;