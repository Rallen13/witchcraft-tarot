import "./InstructionBlock.scss";

const InstructionBlock = ({heading, children}) => {
  return (
    <div className="instruction-block">
      <h4>{heading}</h4>
      <p>{children}</p>
    </div>
  );
};

export default InstructionBlock;
