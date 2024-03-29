import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={css.loadBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};