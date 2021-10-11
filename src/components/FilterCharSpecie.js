const FilterCharSpecie = (props) => {
    const changeHandleSelect = (ev) => {
        props.handleSelect(ev.currentTarget.value)
    }
    return (
        <div className='selectOption__item'>
            <label htmlFor="species" className='form__labelText'>Select species</label>
            <select className='form__searchSpecies'
                name="species"
                id="species"
                value={props.selectSepecies}
                onChange={changeHandleSelect}
            >
                <option value="All">All</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Humanoid">Humanoid</option>

                <option value="Unknow">Unknow</option>
            </select>
        </div >
    );
};

export default FilterCharSpecie;
