import classes from '../../assets/sixthSection.module.css'

function sixthSection() {
    return (
        <section className={classes.container}>
        <div className={classes.card}>
          <div className={classes.row}>
            <div className={classes.textContainer}>
              <h2 className={classes.h2}>Vous êtes un fabricant ?</h2>
              <p>
                Faites comme +8 000 usines à travers la France, rejoignez
                NewBrands et accompagner des milliers de marques dans leurs
                projets de production françaises
              </p>
            </div>
            <button className={classes.btn}>Devenons partenaire</button>
          </div>
        </div>
      </section>)
}

export default sixthSection