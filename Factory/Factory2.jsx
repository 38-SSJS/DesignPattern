class ComponentFactory {
  static createComponent(props) {
    const { name, type, size } = props;
    switch (type) {
      case "button":
        return <Button name={name} size={size} />;
      case "input":
        return <Input name={name} />;
      default:
        throw new Error(`Invalid component type: ${type}`);
    }
  }
}

function App() {
  const button = ComponentFactory.createComponent({
    name: "Submit",
    type: "button",
    size: "large",
  });
  const input = ComponentFactory.createComponent({
    name: "Email",
    type: "input",
  });

  return (
    <div>
      {button}
      {input}
    </div>
  );
}
