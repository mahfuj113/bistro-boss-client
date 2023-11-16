import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem.jsx/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
            heading='from our menu'
            subHeading='popular items'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;