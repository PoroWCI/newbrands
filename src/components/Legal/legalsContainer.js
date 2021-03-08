import { useTranslation } from "react-i18next";
import classes from './legals.module.css';
import SideMenu from './sideMenuLegals';

function LegalsContainer(props) {
    const { t } = useTranslation('common');
    const Component = props.page;
    return (
        <div className={classes.container}>
                <SideMenu page={props.page.name} />
                <Component />
        </div>
    );
}

export default LegalsContainer;