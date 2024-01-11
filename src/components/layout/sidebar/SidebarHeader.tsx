import Logo from "../../../assets/images/logo.png";
import Arrow from "../../../assets/images/arrow.svg";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const SidebarHeader = () => {
  return (
    <div className="sidebarHeader">
      <div className="sidebarHeaderInner">
        <img src={ Logo } alt="logo" />
        <div className="logoTitle">
          <span className="name">Nishyan</span>
          <span className="visitStore">Visit store</span>
        </div>
      </div>
      <img src={ Arrow } alt="arrow" />
      <ExpandMoreRoundedIcon />
    </div>
  );
};

export default SidebarHeader;