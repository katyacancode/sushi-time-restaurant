import { useState } from 'react';
import Categories from "./Categories";
import { data } from "./data";

function Menu() {

    const [dishes, setDishes] = useState(data);

    const chosenDishes = (searchTerm) => {
        const newDishes = data.filter(dish => dish.searchTerm === searchTerm);
        setDishes(newDishes);
    }

    return(
        <div>
            <div>
                <Categories filteredDishes={chosenDishes}/>
            </div>
            <div className="containerMenu">
            {dishes.map((dish => {
                const {id, img, name, price} = dish;
                return(                
                    <div key={id}>
                        <img className="sushiItem" src={`./${img}.jpg`} alt="sushi" width="400px"/>
                        <h2>{name}</h2>
                        <h3>${price.toFixed(2)}</h3>
                    </div>                
            )
        }))}
            </div>
        </div>
    )
}

export default Menu;