import Header from '../components/header'
import Content from '../components/legalsContainer'

function MentionsLegales(props) {
  return (
    <div>
      <Header />
      <Content page={props.page} />
    </div>
  );
}

export default MentionsLegales;
