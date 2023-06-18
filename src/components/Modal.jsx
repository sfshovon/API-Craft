import React from 'react'

const Modal = ({modalOpen, setModalOpen, children, title}) => {
  return (
    <dialog id="my_modal_3" className="modal bg-black bg-opacity-30" open={modalOpen}>
      <div className="modal-box ">
        <form method="dialog" >
          <label htmlFor="my_modal_3-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
            <button id="my_modal_3-1" onClick={() => setModalOpen(false)} />
          </label>
          <h3 className="font-bold text-lg text-center mb-4">{title}</h3>
        </form>
        {children}
      </div>
    </dialog>
  )
}

export default Modal