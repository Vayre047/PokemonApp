function SearchInput(props){
    const { valueFiltered, placeholder } = props;

    return(
        <div>
            <input type="search" onChange={valueFiltered} placeholder={placeholder} />
        </div>
    )
}

export default SearchInput;