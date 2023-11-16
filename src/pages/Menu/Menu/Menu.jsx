import { Helmet } from "react-helmet";
import Cover from "../../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* main cove */}
            <Cover img={menuImg} title={'our menu'}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
            {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu item */}
            <MenuCategory items={desserts} title={'dessert'} img={dessertImg}></MenuCategory>
            {/* pizza menu item */}
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
            {/* salad menu item */}
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            {/* soup menu item */}
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;