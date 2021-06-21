import React from 'react'

const Categories = ({filterItems, categories}) => {
    return (
        <div className="filterContainer">
            {categories.map((category,index) => {
                return (
                    <div>
                     <button  key={index} onClick={() => filterItems(category)}>{category} </button>
                    </div>
                     )
                
            })
        }
            {/* <button className="contents" onClick={() => filterItems('All')} > All </button>
            <button className="contents" onClick={() => filterItems({categories})}> {categories} </button> */}
        </div>
    )
}

export default Categories
