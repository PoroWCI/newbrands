import classes from './sidepricing.module.css'

function SidePricing(props) {
    return (
        <div className={classes.container}>
            <h4>Proposition</h4>
            <div className={classes.grid}>
                <div className={classes.firstCol}>
                    <span>Total H.T</span>
                    <div className={classes.totals}>
                        <span>TVA (20%) </span>
                        <span>Total TTC</span>
                    </div>
                </div>
                <div className={classes.secondCol}>
                    <span>{props.data.priceHt}€</span>
                    <div className={classes.totals}>
                        <span>{props.data.tva}€</span>
                        <span>{props.data.priceTTC}€</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePricing;