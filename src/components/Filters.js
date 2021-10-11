import FilterCharName from "./FilterCharName";
import FilterCharSpecie from "./FilterCharSpecie";
import "../styles/layout/Filters.scss";
import FilterCharByStatus from "./FilterCharByStatus";

const Filters = (props) => {
    return (
        <form className="form">
            <FilterCharName
                searchName={props.searchName}
                handleSearchName={props.handleSearchName}
                labelText="Type name here"
                type="text"
                name="name"
                id="name"
            />
            <div className="selectOption">
                <FilterCharSpecie
                    selectSpecies={props.selectSepecies}
                    handleSelect={props.handleSelect}
                />

                <FilterCharByStatus
                    selectStatus={props.selectStatus}
                    handleStatus={props.handleStatus}
                />
            </div>
        </form>
    );
};

export default Filters;
