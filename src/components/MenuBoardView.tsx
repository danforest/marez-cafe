import type { MenuBoard } from "@/lib/menuBoards";

export default function MenuBoardView({ board }: { board: MenuBoard }) {
  const isLight = board.variant === "light";

  return (
    <article
      className={`menu-board ${isLight ? "menu-board--light" : ""}`}
    >
      {board.disclaimer && (
        <p className="menu-board-disclaimer">{board.disclaimer}</p>
      )}

      <h3 className="menu-board-title">{board.title}</h3>

      <div className="menu-board-grid">
        {board.sections.map((section) => (
          <section
            key={section.title}
            className={`menu-board-section ${isLight ? "menu-board-section--light" : ""}`}
          >
            <h4 className="menu-board-section-title">{section.title}</h4>
            <ul className="menu-board-list">
              {section.items.map((item) => (
                <li key={item.name} className="menu-board-item">
                  <div className="menu-board-item-head">
                    <span className="menu-board-item-name">
                      {item.name}
                      {item.tag && (
                        <span className="menu-board-tag">{item.tag}</span>
                      )}
                    </span>
                    <span className="menu-board-item-price">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="menu-board-item-desc">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {board.footer && <p className="menu-board-footer">{board.footer}</p>}
    </article>
  );
}
