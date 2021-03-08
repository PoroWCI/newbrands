import Header from '../components/Header/header'
import Content from '../components/Legal/legalsContainer'

function MentionsLegales(props) {
  return (
    <div>
      <Header />
      <Content page={props.page} />
    </div>
  );
}

export default MentionsLegales;
