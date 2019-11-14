import React from "react";
import HeadHelmet from "services/HeadHelmet";

export default () => (
  <section
    className="card contato card-shadow"
    style={{ height: "400px", marginBottom: "1.55rem" }}
  >
    <HeadHelmet
      robots="noindex"
      title="404"
      description="Página não encontrada"
    />
    <div className="header-card">
      <h2>Error 404 - Pagina não encontrada</h2>
    </div>

    <div className="card-border" />
  </section>
);
