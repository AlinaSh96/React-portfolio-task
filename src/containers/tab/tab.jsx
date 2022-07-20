import Tabs from "../../components/Tabs/Tabs";
import React from "react";
import { useSelector } from "react-redux";
import { selectElements } from "../../store/element/selectors";
import { selectCategories } from "../../store/category/selectors";

export const TabsContainer = ({ selectedId, onTabSelect }) => {
  const categories = useSelector(selectCategories);
  console.log(selectedId)
  const tabs = categories.map(({ category, id }) => ({ label: category, id }));
  return <Tabs tabs={tabs} selectedId={selectedId} onTabSelect={onTabSelect} />;
};
