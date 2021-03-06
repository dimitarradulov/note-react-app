import { useState, useRef } from 'react';

import useListenForOutsideClicks from '../util/useListenForOutsideClicks';

import './NotesFilter.css';

const NotesFilter = (props) => {
  const wrapperRef = useRef(null);
  const [isSorting, setIsSorting] = useState(false);

  useListenForOutsideClicks(wrapperRef, setIsSorting);

  const dropdownContentClasses = `dropdown__content ${
    !isSorting ? 'hidden' : ''
  }`;

  const toggle = () => {
    setIsSorting(!isSorting);
  };

  const sortElementsHandler = (fn) => {
    fn();

    setIsSorting(false);
  };

  return (
    <div ref={wrapperRef} className="dropdown">
      <button onClick={toggle} className="btn btn--filter">
        <span>Sort By</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0001 5C10.1658 5 10.3248 5.06585 10.442 5.18306C10.5592 5.30027 10.6251 5.45924 10.6251 5.625V12.8663L13.3076 10.1825C13.3657 10.1244 13.4347 10.0783 13.5106 10.0468C13.5865 10.0154 13.6679 9.99921 13.7501 9.99921C13.8322 9.99921 13.9136 10.0154 13.9895 10.0468C14.0655 10.0783 14.1344 10.1244 14.1926 10.1825C14.2507 10.2406 14.2968 10.3096 14.3282 10.3855C14.3597 10.4614 14.3758 10.5428 14.3758 10.625C14.3758 10.7072 14.3597 10.7886 14.3282 10.8645C14.2968 10.9404 14.2507 11.0094 14.1926 11.0675L10.4426 14.8175C10.3845 14.8757 10.3155 14.9219 10.2396 14.9534C10.1637 14.9849 10.0823 15.0011 10.0001 15.0011C9.91785 15.0011 9.83645 14.9849 9.76052 14.9534C9.68458 14.9219 9.61561 14.8757 9.55756 14.8175L5.80756 11.0675C5.74945 11.0094 5.70335 10.9404 5.6719 10.8645C5.64045 10.7886 5.62427 10.7072 5.62427 10.625C5.62427 10.5428 5.64045 10.4614 5.6719 10.3855C5.70335 10.3096 5.74945 10.2406 5.80756 10.1825C5.92492 10.0651 6.08409 9.99921 6.25006 9.99921C6.33224 9.99921 6.41361 10.0154 6.48954 10.0468C6.56546 10.0783 6.63445 10.1244 6.69256 10.1825L9.37506 12.8663V5.625C9.37506 5.45924 9.44091 5.30027 9.55812 5.18306C9.67533 5.06585 9.8343 5 10.0001 5V5Z"
            fill="#FBFFFF"
          />
        </svg>
      </button>
      <ul className={dropdownContentClasses}>
        <li onClick={sortElementsHandler.bind(this, props.onTitleSort)}>
          Title
        </li>
        <li onClick={sortElementsHandler.bind(this, props.onDateSort)}>Date</li>
      </ul>
    </div>
  );
};

export default NotesFilter;
