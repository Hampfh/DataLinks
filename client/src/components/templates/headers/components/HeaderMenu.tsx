import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderMenu.css"

export default function HeaderMenu({ selected, program }: PropsForComponent) {

    const paths = [{
        name: "Workspace",
        path: `/${program}`
    },{
        name: "Deadlines",
        path: `/${program}/deadlines`
    },{
        name: "Contributors",
        path: `/${program}/contributors`
    },{
        name: "Archive",
        path: `/${program}/archive`
    }]

    return (
        <div className="header-menu-container">
            {paths.map((current, index) => (
                
                <div key={current.name} className="header-menu-item-container">
                    <Link to={current.path}>
                        <h3 className={`header-menu-item-text ${selected === index ? "selected" : ""}`}>{current.name}</h3>
                    </Link>
                </div>
            
            ))}
        </div>
    )
}

interface PropsForComponent {
    program: string
    selected: number
}
