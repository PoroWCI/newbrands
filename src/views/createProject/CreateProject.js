import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "../../index.css";
import "./CreateProject.css";
import { Layout } from "antd";
import NavFooter from "../../components/createProject/NavFooter";
import NavSider from "../../components/createProject/NavSider";

import TypeProject from "./typeProject/typeProject";
import NumberProduct from "./numberProduct/numberProduct";
import ProductDetail from "./productDetail/productDetail";
import ProductDelay from "./productDelay/productDelay";
import PlaceOfShip from "./placeOfShip/placeOfShip";
import DocumentsProject from "./documentsProject/documentsProject";
import DescriptionProject from "./descriptionProject/descriptionProject";
import BudgetProject from "./budgetProject/budgetProject";
import UserInfo from "./userInfo/userInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.debugMax = this.debugMax.bind(this);

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

  allFinished() {
    window.location.replace("/successMessage");
  }

  debugMax() {
    console.log(this.state.maxPage);
    console.log("==");
    console.log(this.state.currentPage);
  }

  render() {
    return (
      <>
        <Router>
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
                debug={this.debugMax}
              />
              <Layout style={{ minHeight: "80vh" }}>
                <Route
                  exact
                  path="/createProject"
                  render={() => (
                    <>
                      {this.setCurrentPage(1)}
                      <TypeProject />
                      <NavFooter
                        percent={0}
                        next="/createProject/numberProduct"
                        prev="/"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/numberProduct"
                  render={() => (
                    <>
                      {this.setCurrentPage(2)}
                      <NumberProduct />
                      <NavFooter
                        percent={10}
                        next="/createProject/productDetail"
                        prev="/createProject/"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/productDetail"
                  render={() => (
                    <>
                      {this.setCurrentPage(3)}
                      <ProductDetail />
                      <NavFooter
                        percent={20}
                        next="/createProject/productDelay"
                        prev="/createProject/numberProduct"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/productDelay"
                  render={() => (
                    <>
                      {this.setCurrentPage(4)}
                      <ProductDelay />
                      <NavFooter
                        percent={60}
                        prev="/createProject/productDetail"
                        next="/createProject/placeOfShip"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/placeOfShip"
                  render={() => (
                    <>
                      {this.setCurrentPage(5)}
                      <PlaceOfShip />
                      <NavFooter
                        percent={70}
                        prev="/createProject/productDelay"
                        next="/createProject/documentsProject"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/documentsProject"
                  render={() => (
                    <>
                      {this.setCurrentPage(6)}
                      <DocumentsProject />
                      <NavFooter
                        percent={80}
                        prev="/createProject/placeOfShip"
                        next="/createProject/descriptionProject"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/descriptionProject"
                  render={() => (
                    <>
                      {this.setCurrentPage(7)}
                      <DescriptionProject />
                      <NavFooter
                        percent={95}
                        prev="/createProject/documentsProject"
                        next="/createProject/budgetProject"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/budgetProject"
                  render={() => (
                    <>
                      {this.setCurrentPage(8)}
                      <BudgetProject />
                      <NavFooter
                        percent={97}
                        prev="/createProject/descriptionProject"
                        next="/createProject/userInfo"
                        goNext={this.goNext}
                      />
                    </>
                  )}
                />
                <Route
                  path="/createProject/userInfo"
                  render={() => (
                    <>
                      {this.setCurrentPage(9)}
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
                <Route path ="/dashboard">
                  <Redirect to="/dashboard" />
                </Route>
              </Layout>
            </Layout>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
