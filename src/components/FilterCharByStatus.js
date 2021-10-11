const FilterCharByStatus = (props) => {
    const changeHandleSelectStatus = (ev) => {
        props.handleStatus(ev.currentTarget.value)
    }
    return (
        <div className='selectOption__item'>
            <label htmlFor="status" className='form__labelText'>Status:</label>
            <select className='form__searchSpecies'
                name="status"
                id="status"
                value={props.selectStatus}
                onChange={changeHandleSelectStatus}
            >
                <option value="all">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
};

export default FilterCharByStatus;
