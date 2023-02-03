function Categories({filteredDishes}) {
    return(
        <div className="categories">
            <button className="btnFilter" onClick = {() => filteredDishes("sashimi")}>Sashimi</button>
            <button className="btnFilter" onClick = {() => filteredDishes("nigiri")}>Nigiri</button>
            <button className="btnFilter" onClick = {() => filteredDishes("chirashi")}>Chirashi</button>
            <button className="btnFilter" onClick = {() => filteredDishes("maki")}>Maki</button>
            <button className="btnFilter" onClick = {() => filteredDishes("uramaki")}>Uramaki</button>
            <button className="btnFilter" onClick = {() => filteredDishes("temaki")}>Temaki</button>
        </div>
    )
}

export default Categories;