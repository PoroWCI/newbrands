import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { LogoBrand, SiderTitle } from "../global";
import Logo from "../../assets/img/logo-newbrands.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../config";

import { connect, useDispatch } from 'react-redux'

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

function NavSider(props) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch()
    useEffect(() => {
      function fetchData() {
        if (!props.projectId) {
          axios.post(API + "/api/project").then((result) => {
            dispatch({
              type: "updateProjectId",
              payload: result.data.idProject
            })
          })
        }
        else {
          console.log(props.projectId)
        axios.get(`${API}/api/project/${props.projectId}`).then((result) => {
          dispatch({
            type: "updateProducts",
            payload: result.data.project[0].product
          })
        })
        }
      }

      fetchData()
    }, [])

    useEffect(() => {
      
    }, [props.workflow])

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
        {props.workflow?.map((menu, index) => {
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
                {props.products?.length > 0 && props.products.map((product, indexProduct) => {
                  return (<Menu.ItemGroup key={indexProduct} title={product.name}>
                    {props.workflow.map((menu, index) => {
                      // console.log("product", product)
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
          return false
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



const mapStateToProps = (state) => {
  return {
      projectId: state.projectId,
      workflow: state.workflow,
      products: state.products
  }
}

export default connect(mapStateToProps, null)(NavSider)


const LinkButton = styled(Link)`
  color: black !important;
`;

const CustomItem = styled(Item)`
  background: none !important;
  color: black !important;
`;
