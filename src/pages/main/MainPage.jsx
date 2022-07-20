import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import { store } from "../../store/store";
import { Provider } from "react-redux";

export const MainPage = () => {
  return (
    <Provider store={store}>
      <div className={classnames(styles.root)}>
        <Header />
        <Content />
        <Footer />
      </div>
    </Provider>
  );
};
