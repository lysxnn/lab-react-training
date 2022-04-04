function BoxColor({ r, g, b }) {
  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, width: '200px' }}>
      <h3>{`RGB(${r}, ${g}, ${b})`}</h3>
    </div>
  );
}

export default BoxColor;
