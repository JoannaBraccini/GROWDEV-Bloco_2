interface ButtonDefaultProps {
  title: string;
}

function ButtonDefault(props: ButtonDefaultProps) {
  return <button>{props.title}</button>;
}
export default ButtonDefault;
