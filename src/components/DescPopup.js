
// style this 
// adjust header controls positioning 
// more space between trash and controls ?
// scale up the chevron and ellipse ?


function DescPopup({descWindow, editDescBox, closeDescPopup, deleteBoard}){
    return(
      
    <div ref={descWindow} className="popup-container flex-center">
        {/* <div className="desc-card" > */}
          <div className="desc-card">
            <div className="desc-card-header">
              <h2>Task Description</h2>
              <p onClick={closeDescPopup}>X</p>
            </div>
            <textarea ref={editDescBox}  className="edit-desc-box" cols="30" rows="10"></textarea>

            <button className="close-desc-popup-btn delete-board-btn" onClick={() => deleteBoard()}>Delete Task</button>
            
      {/* <svg onClick={() => deleteBoard()} className='trashcan' width="25px" height="25px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z" />
          <path d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z" />
        </svg> */}
          </div>
        {/* </div> */}
    </div>


    )
}

export default DescPopup