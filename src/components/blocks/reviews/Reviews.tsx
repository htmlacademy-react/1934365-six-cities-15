import { isAuthType } from "../../utils/types";
import OfferForm from "../offer-form/OfferForm";
import OfferReview from "../offer-review/OfferReview";

export default function Reviews(props: {isAuth: isAuthType}): JSX.Element {

  return (
    <>
      <ul className="reviews__list">
        <OfferReview />
      </ul>
      {props.isAuth && <OfferForm />}
    </>

  )
}
