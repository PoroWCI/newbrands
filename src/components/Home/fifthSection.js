import classes from "../../assets/fifthSection.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import { BiChevronDown } from "react-icons/bi";

function fifthSection() {
  return (
    <section className={classes.container}>
      <div>
        <div>
          <h2 className={classes.h2}>Foire aux questions</h2>
          <p className={classes.introduction}>
            Nous avons répondus aux questions les plus fréquentes, cependant, en
            cas de questions supplémentaires ; vous pouvez nous écrire à{" "}
            <span>faq-fr@newbrands.fr</span>
          </p>
        </div>
        <div className={classes.faqContainer}>
          <div>
            <Accordion
              collapsible
              multiple
              className={classes.questionContainer}
            >
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>Qu'est-ce que Newbrands ?</h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel>
                  <p>
                    NewBrands met les marques en relations avec les manufactures
                    françaises et européennes ainsi qu’avec des fournisseurs de
                    matières premières éthiques et biosourcées européenne afin
                    de rendre l’industrie textile plus verte.
                    <br />
                    <br />
                    Notre objectif premier est de connecter l’industrie de façon
                    innovante et intelligente grâce l’utilisation d’algorithmes
                    et d’intelligence artificielle dans la sélection des
                    partenaires pouvant répondre de façon concrète aux besoins
                    des marques.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>
                      Combien de temps faut-il pour que je puisse commencer à
                      travailler avec un fabricant ?
                    </h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.collapsibleContent}>
                  <p>
                    La création d’un compte prend en moyenne 5 minutes sur
                    NewBrands, vous pouvez lancer votre appel d’offres aussitôt
                    inscrit. Le temps de réponse varie généralement entre 48
                    heures et 5 jours ouvrés pour recevoir une proposition
                    commerciale consolidée.
                    <br />
                    <br />
                    Après réception de votre proposition commerciale, libre à
                    vous de l’accepter, la décliner ou bien la renégocier. En
                    cas d’acceptation, des éléments de vérification d’identité*
                    seront obligatoires pour la signature tripartite entre les
                    usines, votre entreprise et NewBrands.
                    <br />
                    <br />* La vérification des éléments peut prendre 1 heure
                    maximum.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>
                      Combien de temps faut-il pour passer du développement à la
                      confection ?
                    </h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.collapsibleContent}>
                  <p>
                    Plusieurs éléments sont à prendre en compte, cela dépendra
                    de la complexité des pièces à développer ainsi que le
                    sourcing des matières premières final.
                    <br /> <br />
                    Nous vous conseillons de directement choisir le Sourcing +
                    Développement + Confection lors de la création de projet.
                    Cela permettra de faire une présélection des partenaires
                    intervenant sur vos produits et ainsi accélérer la prise en
                    charge de vos produits aussitôt le développement terminé par
                    nos partenaires.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className={classes.borderedContainer}>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>Pourquoi devrais-je travailler avec NewBrands ?</h5>
                    <BiChevronDown className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.collapsibleContent}>
                  <p>
                    Nous sommes à vos côtés de la première à la dernière étape
                    de vos projets de sourcing, développement, confection ou
                    encore de distribution.
                    <br /> <br />
                    Nous avons pour vocation d’être à la fois votre partenaire
                    dans votre activité mais surtout d’être un outil vous
                    permettant de facilité la gestion de vos projets de
                    développement sourcing et confection au sein de votre
                    activité, votre marque.
                    <br /> <br />
                    NewBrands militent pour une industrie plus verte et
                    respectueuse de l’environnement mais aussi de ses mains qui
                    travaillent vos produits, pour une clarté de la chaîne de
                    production, éthiques, et biosourcées.
                    <br /> <br />
                    Nous apportons de la transparence à votre marque, à vos
                    clients finaux.
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* <div id="faqOne" className={classes.questionContainer}>
              <div className={classes.questionTitle}>
                <h5>Qu'est-ce que Newbrands ?</h5>
                <BiChevronDown className={classes.arrow} />
              </div>
              <p>
                NewBrands met les marques en relations avec les manufactures
                françaises et européennes ainsi qu’avec des fournisseurs de
                matières premières éthiques et biosourcées européenne afin de
                rendre l’industrie textile plus verte.
                <br />
                <br />
                Notre objectif premier est de connecter l’industrie de façon
                innovante et intelligente grâce l’utilisation d’algorithmes et
                d’intelligence artificielle dans la sélection des partenaires
                pouvant répondre de façon concrète aux besoins des marques.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default fifthSection;
