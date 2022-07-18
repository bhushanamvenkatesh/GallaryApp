// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onClickChangeImageUrl, isClicked} = props
  const {thumbnailAltText, imageUrl, id, imageAltText, thumbnailUrl} = eachItem

  const imageClicked = () => {
    console.log(id)
    onClickChangeImageUrl(imageUrl, imageAltText)
  }

  const removeClass = isClicked ? ' ' : 'opacity'

  return (
    <li className="list-item">
      <button type="button" className="button">
        <img
          src={eachItem.thumbnailUrl}
          alt={thumbnailAltText}
          className={`image-list ${removeClass}`}
          onClick={imageClicked}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
