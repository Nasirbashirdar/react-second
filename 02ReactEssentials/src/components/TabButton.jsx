function TabButton({ onSelect, children }) {
  return (
    <button className="active" onClick={onSelect}>
      {children}
    </button>
  );
}

export default TabButton;
