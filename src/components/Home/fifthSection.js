import classes from "../../assets/fifthSection.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import { BiChevronUp } from "react-icons/bi";

function fifthSection() {
  return (
    <section className={classes.container}>
      <div>
        <div>
          <h2 className={classes.h2}>Most asked questions.</h2>
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
              <AccordionItem>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn}>
                    <h5>Qu'est-ce que Newbrands ?</h5><BiChevronUp className={classes.arrow} size="24" />
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
              <AccordionItem>
                <h3 className={classes.questionTitle}>
                  <AccordionButton className={classes.titleBtn} >
                    <h5>Qu'est-ce que Newbrands ?</h5><BiChevronUp className={classes.arrow} size="24" />
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.collapsibleContent}>
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
            </Accordion>
            {/* <div id="faqOne" className={classes.questionContainer}>
              <div className={classes.questionTitle}>
                <h5>Qu'est-ce que Newbrands ?</h5>
                <BiChevronUp className={classes.arrow} />
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
