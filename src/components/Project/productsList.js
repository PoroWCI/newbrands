import classes from './productslist.module.css'

function productsList() {
    let productsAPI = [
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "current", "En cours"],
        ["La petite robe noire", "Robe courte", 3000, "L", "stopped", "Arrêté"],
        ["La petite robe noire", "Robe courte", 3000, "L", "late", "En retard"],
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "finished", "Terminé"],
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "waiting", "En attente"],
    ]

    let products = []
    for (const [index, value] of productsAPI.entries()) {
        products.push(
            <tr className={classes.product} key={index}>
                <td title={index} className={classes.indexProduct}>#{index}</td>
                <td title={value[0]} className={classes.productName}>{value[0]}</td>
                <td title={value[1]} className={classes.productType}>{value[1]}</td>
                <td title={value[2]} className={classes.productQuantity}>{value[2]}</td>
                <td title={value[3]} className={classes.productSize}>{value[3]}</td>
                <td title={value[5]} className={classes.productStep}><div className={`${classes.status} ${classes[value[4]]}`}></div>{value[5]}</td>
            </tr>
        )
    }
    return (
        <div className={classes.container}>
            <h2>Développement de (8 produits)</h2>
            <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
      <br /><br />
      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
      </p>
            <h2>Les produits</h2>
            <div className={classes.tableContainer}>
                <table className={classes.productTable}>
                    <thead>
                        <tr>
                            <th title="index">#</th>
                            <th title="produit">Produit</th>
                            <th title="catégorie">Catégorie</th>
                            <th title="quantité">Quantité</th>
                            <th title="size">Taille</th>
                            <th title="étape">Étape</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default productsList