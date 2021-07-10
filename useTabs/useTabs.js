const content = [
  {
    tab: "Section1",
    content: "I'm the content of Section1",
  },
  {
    tab: "Section2",
    content: "I'm the content of Section2",
  },
];

export const useTabs = (initialTab, allTabs) => {
  const [currnetIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currnetIndex],
    changeItem: setCurrentIndex,
  };
};
