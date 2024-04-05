import classNames from 'classnames';
import { Default, FavoriteButtonTypeProps } from './types';
import { useActionCreators } from '../../../store/hooks';
import { favoriteActions } from '../../../store/slices/favorites';
import { memo } from 'react';

function FavoriteButton({ bemBlock = 'place-card', isFavorite, offerId, width = 18 }: FavoriteButtonTypeProps): JSX.Element {
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    { [`${buttonClass}--active`]: isFavorite },
    'button'
  );
  const height = width * Default.HeightCoefficient;
  const { changeFavorite } = useActionCreators(favoriteActions);
  const handleClick = () => {
    changeFavorite({ offerId, status: !!isFavorite ? 0 : 1 });
  };

  return (
    <button className={favoriteClass} type="button" onClick={handleClick}>
      <svg className={`${bemBlock}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export default memo(FavoriteButton)

