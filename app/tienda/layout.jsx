export const metadata = {
  title: "Tienda",
};

function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>
        <ul>
          <li>Juego</li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default TiendaLayout;
