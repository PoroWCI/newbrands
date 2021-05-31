import React, { Component, useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { LogoBrand, SiderTitle } from "../global";
import Logo from "../../assets/img/logo-newbrands.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../config";

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

function NavSider(props) {
  const [page, setPage] = useState(0)
  const [products, setProducts] = useState([])
  const { t } = useTranslation("common");
  console.log(localStorage)
  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("projectId") === null) {
        await axios.post(API + "/api/project").then((result) => {
          localStorage.setItem("projectId", result.data.idProject)
          // localStorage.setItem("projectId", "4b7bf1f9-bd22-11eb-9a36-0050b6027878")
        
        })
        
      }
      await axios.get(`${API}/api/project/${localStorage.getItem("projectId")}`).then((result) => {
        setProducts(result.data.project[0].product)
        localStorage.setItem("products", JSON.stringify(result.data.project[0].product))
        console.log(result.data)
      })
      setPage(1)
    }
    fetchData()
  }, [localStorage])

  console.log(products)
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
        defaultSelectedKeys={[`${props.maxPage}`]}
        selectedKeys={[`${props.currentPage}`]}
        style={{ backgroundColor: "#F8F5F5" }}
      >
        <CustomItem
          className="customclass"
        >
          <LinkButton to="/createProject">Type</LinkButton>
        </CustomItem>
        {JSON.parse(localStorage.getItem("workflow"))?.map((menu, index) => {
          if (menu.typeStep !== "product" && menu.nameStep !== "content")
            return (
              <CustomItem
                key={index}
                className="customclass"
              >
                <LinkButton to={`/createProject/${menu.nameStep}`}>{t(`createProject.menu.${menu.nameStep}`)}</LinkButton>
              </CustomItem>
            )
          else if (menu.nameStep === "content") {
            return (
              <SubMenu
                className="customArrow"
                key={index}
                title={
                  <span
                    style={{
                      color: "black",
                      fontSize: "1rem"
                    }}
                  >
                    Produits
                </span>
                }
              >
                {products.map((product, indexProduct) => {
                  return (<Menu.ItemGroup key={indexProduct} title={product.name}>
                    {JSON.parse(localStorage.getItem("workflow")).map((menu, index) => {
                      console.log("product", product)
                      if (menu.typeStep === "product") {
                        return (
                          <CustomItem key={index} >
                            <LinkButton to={`/createProject/${menu.nameStep}/${indexProduct}`}>{t(`createProject.submenu.${menu.nameStep}`)}</LinkButton>
                          </CustomItem>
                        )
                      }
                      return null
                    })}
                  </Menu.ItemGroup>)
                })}
              </SubMenu>
            )
          }
        })}
        <CustomItem
          key="12"
          className="customclass"
        >
          <LinkButton to="/createProject/userInfo">Coordonnées</LinkButton>
        </CustomItem>
        {/* <CustomItem
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
              <Menu.ItemGroup key="m1" title="Produit 1">
                <CustomItem key="m1"><LinkButton to="/createProject/productDetail">Matières</LinkButton></CustomItem>
                <CustomItem key="w1"><LinkButton to="/createProject/productWeight">Grammage</LinkButton></CustomItem>
                <CustomItem key="c1"><LinkButton to="/createProject/productCategory">Catégorie</LinkButton></CustomItem>
                <CustomItem key="g1"><LinkButton to="/createProject/productType">Gamme</LinkButton></CustomItem>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="m2" title="Produit 2">
                <CustomItem key="m2"><LinkButton to="/createProject/productDetail">Matières</LinkButton></CustomItem>
                <CustomItem key="w2"><LinkButton to="/createProject/productWeight">Grammage</LinkButton></CustomItem>
                <CustomItem key="c2"><LinkButton to="/createProject/productCategory">Catégorie</LinkButton></CustomItem>
                <CustomItem key="g2"><LinkButton to="/createProject/productType">Gamme</LinkButton></CustomItem>
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
          </CustomItem> */}
      </Menu>
    </Sider>
  );
}


export default NavSider;

const LinkButton = styled(Link)`
  color: black !important;
`;

const CustomItem = styled(Item)`
  background: none !important;
  color: black !important;
`;
