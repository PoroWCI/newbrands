import classes from './productslist.module.css'

function productsList() {
    let productsAPI = [
        ["La petite robe noire", "Robe courte", 3000, "L", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "En attente"],
        ["La petite robe noire", "Robe courte", 3000, "L", "En attente"],
    ]

    let products = []
    for (const [index, value] of productsAPI.entries()) {
        products.push(
            <tr className={classes.product} key={index}>
                <td className={classes.indexProduct}>#{index}</td>
                <td className={classes.productName}>{value[0]}</td>
                <td className={classes.productType}>{value[1]}</td>
                <td className={classes.productQuantity}>{value[2]}</td>
                <td className={classes.productSize}>{value[3]}</td>
                <td className={classes.productStep}>{value[4]}</td>
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
                            <th>#</th>
                            <th>Produit</th>
                            <th>Catégorie</th>
                            <th>Quantité</th>
                            <th>Taille</th>
                            <th>Étape</th>
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