export const Header = ({ title = "Dogアプリ" }) => {
  return (
    <header className="app-header">
      <div className="container">
        <h1 className="brand">{title}</h1>
      </div>
    </header>
  );
}
