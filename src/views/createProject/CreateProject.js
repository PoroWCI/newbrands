import React, { Component } from "react";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import "../../index.css";
import "./CreateProject.css";
import { Layout } from "antd";
import NavFooter from "../../components/createProject/NavFooter";
import NavSider from "../../components/createProject/NavSider";

import TypeProject from "./typeProject/typeProject";
import NumberProduct from "./numberProduct/numberProduct";
import ProductDelay from "./productDelay/productDelay";
import PlaceOfShip from "./placeOfShip/placeOfShip";
import DocumentsProject from "./documentsProject/documentsProject";
import DescriptionProject from "./descriptionProject/descriptionProject";
import BudgetProject from "./budgetProject/budgetProject";
import UserInfo from "./userInfo/userInfo";
import ProductTexture from "./productDetail/productTexture/productTexture";
import ProductWeight from "./productDetail/productWeight/productWeight";
import ProductType from "./productDetail/productType/productType";
import ProductCategory from "./productDetail/productCategory/productCategory";

import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);

    this.state = {
      maxPage: 1,
      currentPage: 1,
    };
  }

  componentDidMount() {
    localStorage.getItem("maxPage") &&
      this.setState({
        maxPage: localStorage.getItem("maxPage"),
      });
  }

  componentDidUpdate() {
    if (this.state.maxPage > localStorage.getItem("maxPage")) {
      localStorage.setItem("maxPage", this.state.maxPage);
    }
  }

  goNext() {
    if (this.state.maxPage <= this.state.currentPage) {
      var nextPage = this.state.currentPage;
      this.setState({ maxPage: nextPage + 1 });
    }
  }

  setCurrentPage(keyPage) {
    if (this.state.currentPage !== keyPage) {
      this.setState({ currentPage: keyPage });
    }
  }

  render() {
    return (
      <Switch>
        <Layout
          style={{
            minHeight: "100vh",
            marginLeft: "300px",
            paddingBottom: "120px",
          }}
        >
          <NavSider
            maxPage={this.state.maxPage}
            currentPage={this.state.currentPage}
          />
          <Layout style={{ minHeight: "80vh" }}>
            <Route
              exact
              path={`/createProject`}
              render={() => (
                <>
                  {this.setCurrentPage(1)}
                  <TypeProject />
                  <NavFooter
                    percent={0}
                    next="/createProject/product"
                    prev="/"
                    goNext={this.goNext}
                  />
                </>
              )}
            />
            {this.props.workflow?.map((menu, index) => {
              let component = <TypeProject />

              if (menu.nameStep === "product")
                component = <NumberProduct />
              if (menu.nameStep === "file")
                component = <DocumentsProject />
              if (menu.nameStep === "delai")
                component = <ProductDelay />
              if (menu.nameStep === "livraison")
                component = <PlaceOfShip />
              if (menu.nameStep === "budget")
                component = <BudgetProject />
              if (menu.nameStep === "info")
                component = <DescriptionProject />
              if (menu.nameStep === "category")
                component = <ProductCategory />
              if (menu.nameStep === "matter")
                component = <ProductTexture />
              if (menu.nameStep === "grammage")
                component = <ProductWeight />
              if (menu.nameStep === "gamme")
                component = <ProductType />
              if (menu.nameStep === "content")
                return false
              return (<Route
                key={window.location.pathname + index}
                path={`/createProject/${menu.nameStep}`}
                render={() => (
                  <>
                    {component}
                    <NavFooter
                      percent={index * 10}
                      next={`/createProject/${menu.nameStep === "info" ? "userInfo" : menu.nameStep === "gamme" ? "file" : menu.nameStep !== "product" ? 
                      (this.props.workflow[index + 1]?.typeStep === "product" ? 
                      this.props.workflow[index + 1].nameStep + "/" + document.location.pathname.split('/').pop() 
                      : this.props.workflow[index + 1]?.nameStep) 
                      : "category/0"}`}
                      prev={`/createProject/${this.props.workflow[index - 1]?.nameStep}`}
                      goNext={this.goNext}
                    />
                  </>
                )}
              />)
            })}
            <Route
              path="/createProject/userInfo"
              render={() => (
                <>
                  {this.setCurrentPage(this.props.workflow.length + 1)}
                  <UserInfo />
                  <NavFooter
                    percent={100}
                    prev="/createProject/budgetProject"
                    goNext={this.allFinished}
                    isFinished={true}
                  />
                </>
              )}
            />
            <Route path="/dashboard">
              <Redirect to="/dashboard" />
            </Route>
          </Layout>
        </Layout>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectId: state.projectId,
    workflow: state.workflow,
    products: state.products
  }
}

export default connect(mapStateToProps, null)(App)