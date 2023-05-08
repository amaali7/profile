import { Fragment, useRef } from "react";

const Model = (props) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      props.setModel(false);
    }
  };
  return (
    <Fragment>
      <div className="model-container" ref={modalRef} onClick={closeModal}>
        <div className="card">{props.children} </div>
      </div>
    </Fragment>
  );
};

export default Model;
