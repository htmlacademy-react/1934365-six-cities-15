import classNames from 'classnames';
import { Default, FavoriteButtonTypeProps } from './types';
import { useActionCreators} from '../../../store/hooks';
import { favoriteActions } from '../../../store/slices/favorites';
import { memo, useState } from 'react';
import { fetchAllOffers } from '../../../store/thunks/offers';

function FavoriteButton({ bemBlock = 'place-card', isFavorite, offerId, width = 18 }: FavoriteButtonTypeProps): JSX.Element {
  const [isFavoriteButton, setIsFavoriteButton] = useState(isFavorite);
  const favoriteLabel = `${isFavoriteButton ? 'In' : 'To'} bookmarks`;
  const buttonClass = `${bemBlock}__bookmark-button`;
  const favoriteClass = classNames(
    buttonClass,
    { [`${buttonClass}--active`]: isFavoriteButton },
    'button'
  );
  const height = width * Default.HeightCoefficient;
  const { changeFavorite } = useActionCreators(favoriteActions);
  const handleClick = () => {
    changeFavorite({ offerId, status: isFavoriteButton ? 0 : 1 });
    setIsFavoriteButton(isFavoriteButton);
    fetchAllOffers();
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

export default memo(FavoriteButton);

