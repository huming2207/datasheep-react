import React from "react";

interface TabSectionProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabSection(props: TabSectionProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
}
