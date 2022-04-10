import moment from 'moment';

import './SingleNote.css';

const SingleNote = (props) => {
  const formatedDate = moment(props.date).format('YYYY-MM-DD');

  const deleteBtnHandler = () => {
    const id = props.id;
    props.onDelete(id);
  };

  return (
    <div className="added-notes__note">
      <h3 className="added-notes__title">{props.title}</h3>
      <p className="added-notes__content">{props.content}</p>
      <div className="note-details">
        <p className="added-notes__date">{formatedDate}</p>
        <button className="added-notes__details">
          View Details
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.499971 4.00001C0.499971 3.85082 0.559234 3.70775 0.664723 3.60226C0.770212 3.49677 0.913287 3.43751 1.06247 3.43751L7.5796 3.43751L5.16422 1.02326C5.11192 0.970958 5.07044 0.90887 5.04213 0.840538C5.01383 0.772206 4.99926 0.698968 4.99926 0.625006C4.99926 0.551044 5.01383 0.477807 5.04213 0.409475C5.07044 0.341143 5.11192 0.279055 5.16422 0.226756C5.21652 0.174458 5.27861 0.132971 5.34694 0.104668C5.41527 0.0763636 5.48851 0.0617962 5.56247 0.0617962C5.63643 0.0617962 5.70967 0.0763636 5.778 0.104668C5.84633 0.132971 5.90842 0.174458 5.96072 0.226756L9.33572 3.60176C9.3881 3.65401 9.42967 3.71608 9.45802 3.78442C9.48638 3.85276 9.50098 3.92602 9.50098 4.00001C9.50098 4.07399 9.48638 4.14726 9.45802 4.21559C9.42967 4.28393 9.3881 4.34601 9.33572 4.39826L5.96072 7.77326C5.8551 7.87888 5.71184 7.93822 5.56247 7.93822C5.4131 7.93822 5.26984 7.87888 5.16422 7.77326C5.0586 7.66763 4.99926 7.52438 4.99926 7.37501C4.99926 7.22563 5.0586 7.08238 5.16422 6.97676L7.5796 4.56251L1.06247 4.56251C0.913287 4.56251 0.770212 4.50324 0.664723 4.39775C0.559234 4.29226 0.499971 4.14919 0.499971 4.00001Z"
              fill="#111113"
            />
          </svg>
        </button>
        <button onClick={deleteBtnHandler} className="added-notes__delete">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z"
              fill="#111113"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleNote;
