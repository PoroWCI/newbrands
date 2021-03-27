import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { LogoBrand, SiderTitle } from "../global";
import Logo from "../../assets/img/logo-newbrands.svg";
import styled from "styled-components";

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

class NavSider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: this.props.maxPage,
    };
  }

  componentDidUpdate(prevProps) {
    var maxPage = this.props.maxPage;
    if (maxPage !== prevProps.maxPage) {
      this.setState({ page: maxPage });
    }
  }

  isMenuItemActive(key) {
    if (key <= this.state.page) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Sider
        trigger={null}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Link to="/createProject/">
          <LogoBrand src={Logo} alt="NewBrands" />
          {/* <button onClick={this.props.debug}>Debug</button>
          <button onClick={() => localStorage.clear()}>Clear</button> */}
        </Link>
        <SiderTitle>Parlez nous de votre projet</SiderTitle>
        <Menu
          mode="inline"
          defaultSelectedKeys={[`${this.props.maxPage}`]}
          selectedKeys={[`${this.props.currentPage}`]}
          style={{ backgroundColor: "#F8F5F5" }}
        >
          <CustomItem
            key="1"
            className="customclass"
            disabled={this.isMenuItemActive(1)}
          >
            <LinkButton to="/createProject">Type</LinkButton>
          </CustomItem>
          <CustomItem
            key="2"
            className="customclass"
            disabled={this.isMenuItemActive(2)}
          >
            <LinkButton to="/createProject/numberProduct">
              Noms et nombre de produit
            </LinkButton>
          </CustomItem>

          {this.props.currentPage !== 3 ? (
            <CustomItem
              key="3"
              className="customclass"
              disabled={this.isMenuItemActive(3)}
            >
              <LinkButton to="/createProject/productDetail">
                Produits
              </LinkButton>
            </CustomItem>
          ) : (
            <SubMenu
              className="customArrow"
              key="sub1"
              title={
                <span
                  style={{
                    color: "black",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Produits
                </span>
              }
            >
              <Menu.ItemGroup key="g1" title="Produit 1">
                <CustomItem key="g1">Gamme</CustomItem>
                <CustomItem key="m1">Matières</CustomItem>
                <CustomItem key="c1">Catégorie</CustomItem>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Produit 2">
                <CustomItem key="g2">Gamme</CustomItem>
                <CustomItem key="m2">Matières</CustomItem>
                <CustomItem key="c2">Catégorie</CustomItem>
              </Menu.ItemGroup>
            </SubMenu>
          )}

          <CustomItem
            key="4"
            className="customclass"
            disabled={this.isMenuItemActive(4)}
          >
            <LinkButton to="/createProject/productDelay">
              Délais attendus
            </LinkButton>
          </CustomItem>
          <CustomItem
            key="5"
            className="customclass"
            disabled={this.isMenuItemActive(5)}
          >
            <LinkButton to="/createProject/placeOfShip">
              Lieu de livraison
            </LinkButton>
          </CustomItem>
          <CustomItem
            key="6"
            className="customclass"
            disabled={this.isMenuItemActive(6)}
          >
            <LinkButton to="/createProject/documentsProject">
              Photos / Documents
            </LinkButton>
          </CustomItem>
          <CustomItem
            key="7"
            className="customclass"
            disabled={this.isMenuItemActive(7)}
          >
            <LinkButton to="/createProject/descriptionProject">
              Description
            </LinkButton>
          </CustomItem>
          <CustomItem
            key="8"
            className="customclass"
            disabled={this.isMenuItemActive(8)}
          >
            <LinkButton to="/createProject/budgetProject">
              Budget (facultatif)
            </LinkButton>
          </CustomItem>
          <CustomItem
            key="9"
            className="customclass"
            disabled={this.isMenuItemActive(9)}
          >
            <LinkButton to="/createProject/userInfo">Coordonnées</LinkButton>
          </CustomItem>
        </Menu>
      </Sider>
    );
  }
}

export default NavSider;

const LinkButton = styled(Link)`
  color: black !important;
`;

const CustomItem = styled(Item)`
  background: none !important;
  color: black !important;
`;
