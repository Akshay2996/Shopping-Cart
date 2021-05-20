import React from 'react';
import './Sidebar.scss';

export default function Sidebar({ filteredCategory, handleProduct }) {
    return (
        <aside className="sidebar">
            {filteredCategory.map((category) => (
                <nav onClick={() => handleProduct(category.id)} key={category.id} className="sidebar__nav">{category.name}</nav>
            ))}
        </aside>
    )
}
