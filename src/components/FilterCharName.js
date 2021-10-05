import PropTypes from 'prop-types';

const FilterCharName = (props) => {
    const handleChangeName = (ev) => {
        props.handleSearchName(ev.currentTarget.value)
    }
    return (
        <>
            <label htmlFor={props.id} className='form__labelText'>{props.labelText}</label>
            <input className='form__searchName'
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.searchName}
                onChange={handleChangeName}
            />
        </>
    );
};


FilterCharName.defaultProps = {
    type: 'text'
};

FilterCharName.propTypes = {
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    handleSearchName: PropTypes.func.isRequired
};

export default FilterCharName;
