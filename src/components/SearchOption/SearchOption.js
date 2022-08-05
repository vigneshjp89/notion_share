import './SearchOptionStyle.css';
function SearchOption({users,groups,placeholder}){
    return (<>
        <div className="search-field"><input type="text" className="field-text" readOnly="readOnly"/><span className='placeholder'>People, emails, groups</span><button className="invite-button">Invite</button></div>
    </>);
}
export default SearchOption;