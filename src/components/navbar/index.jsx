import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } =
        useContext(GlobalContext);

    console.log(searchParam);

    return (
        <nav className="container mx-auto flex flex-col items-center justify-between gap-5 py-8 lg:flex-row lg:gap-0">
            <h2 className="text-2xl font-semibold">
                <NavLink to="/">FoodRecipe</NavLink>
            </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    value={searchParam}
                    onChange={(event) => setSearchParam(event.target.value)}
                    placeholder="Enter Items..."
                    className="w-full rounded-full bg-white/75 p-3 px-8 shadow-lg shadow-red-100 outline-none focus:shadow-red-200 lg:w-96"
                />
            </form>

            <ul className="flex gap-5">
                <li>
                    <NavLink
                        to="/"
                        className="text-black duration-300 hover:text-gray-700"
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/favorites"
                        className="text-black duration-300 hover:text-gray-700"
                    >
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}