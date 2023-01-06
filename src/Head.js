import globe from './Images/globe.png'
function Head(){
    return (
        <div className = "head">
            <img src={globe} alt="" />
            <h6 className = "head--text">my travel journal</h6>
        </div>
    )
}
export default Head;